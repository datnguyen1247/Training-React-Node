import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Customization } from "../entity/Customization"
import { StatusCodes } from "http-status-codes";

export class CustomizationController {

    private customizationRepository = AppDataSource.getRepository(Customization)

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const data = request.body;
            console.log(data)
            let customization = await this.customizationRepository.findOne({
                where: { shopify_domain: request.headers.shopify_domain },
            });           
            if (customization) {
                customization = Object.assign(customization, data);
            } else {
                customization = Object.assign(new Customization(), request.body)
            }
            customization.shopify_domain = request.headers.shopify_domain;
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

    async one(request: Request, response: Response, next: NextFunction) {
        console.log(request.headers)
        const shopify_domain = request.headers.shopify_domain;
        const customization = await this.customizationRepository.findOne({
        where: { shopify_domain },
        });
        if (!customization) {
            return {
                statusCode: 400,
                message: "No have customization",
            };
        }
        return {
            statusCode: StatusCodes.CREATED,
            message: StatusCodes[StatusCodes.CREATED],
            data: customization,
        };
    }
}