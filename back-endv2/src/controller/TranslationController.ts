import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Translation } from "../entity/Translation"

export class TranslationController {

    private translationRepository = AppDataSource.getRepository(Translation)

    async all(request: Request, response: Response, next: NextFunction) {

        const { shopId  = 1} = request.params

        return this.translationRepository.find({
            where:{
                shop: shopId
            }
        })
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const locale = request.params.locale

        const translation = await this.translationRepository.findOne({
            where: { locale }
        })

        if (!translation) {
            return "unregistered translation"
        }
        return translation
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const data = request.body;
            
            let translation = await this.translationRepository.findOne({
                where: { locale: data.locale },
            });
    
            if (translation) {
                translation = Object.assign(translation, data);
            } else {
                translation = Object.assign(new Translation(), data);
            }
            translation.shop = data.shop_id;
            return this.translationRepository.save(translation);
        } catch (error) {
            next(error);
        }
    }
    

    async remove(request: Request, response: Response, next: NextFunction) {
        const locale = request.params.locale

        let translationToRemove = await this.translationRepository.findOneBy({ locale })

        if (!translationToRemove) {
            return "this translation not exist"
        }

        await this.translationRepository.remove(translationToRemove)

        return "translation has been removed"
    }
}