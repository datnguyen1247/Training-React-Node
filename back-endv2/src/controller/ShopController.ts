import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Shop } from "../entity/Shop"

export class ShopController {

    private shopRepository = AppDataSource.getRepository(Shop)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.shopRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        const id = parseInt(request.params.id)
        const shop = await this.shopRepository
            .createQueryBuilder("shop")
            .innerJoinAndSelect("shop.customization", "customization") 
            .innerJoinAndSelect("shop.translations", "translation") 
            .where("shop.id = :id", { id })
            .getOne();
        console.log(shop)
        if (!shop) {
            return "unregistered shop"
        }
        return shop
    }

    async save(request: Request, response: Response, next: NextFunction) {

        const shop = Object.assign(new Shop(), request.body)

        return this.shopRepository.save(shop)
    }

    

}