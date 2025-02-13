import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Customization } from "../entity/Customization"
import { StatusCodes } from "http-status-codes";

export class CustomizationController {

    private customizationRepository = AppDataSource.getRepository(Customization)

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const data = request.body;
            let customization = await this.customizationRepository.findOne({
                where: { shop: data.shop_id },
            });           
            if (customization) {
                customization = Object.assign(customization, data);
            } else {
                customization = Object.assign(new Customization(), request.body)
            }
            customization.shop = data.shop_id;
            await this.customizationRepository.save(customization);
            return {
                statusCode: StatusCodes.OK,
                message: StatusCodes[StatusCodes.OK],
                data: customization,
            };
        } catch (error) {
            next(error);
        }
    }
}