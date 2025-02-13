import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Shop } from "../entity/Shop"
import { StatusCodes } from "http-status-codes";
const jwt = require("jsonwebtoken");
export class ShopController {

    private shopRepository = AppDataSource.getRepository(Shop)


    async one(request: Request, response: Response, next: NextFunction) {
        
        const id = parseInt(request.params.id)
        const shop = await this.shopRepository
            .createQueryBuilder("shop")
            .innerJoinAndSelect("shop.customization", "customization") 
            .innerJoinAndSelect("shop.translations", "translation") 
            .where("shop.id = :id", { id })
            .getOne();
        if (!shop) {
            return "shop not found"
        }
        return {
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: shop,
        };
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.shopRepository.find()
    }

    async save(request: Request, response: Response, next: NextFunction) {

        const shop = Object.assign(new Shop(), request.body)
        
        return {
            statusCode: StatusCodes.CREATED,
            message: StatusCodes[StatusCodes.CREATED],
            data: shop,
        };
    }

    async fakeLogin (req: Request, res: Response, next: NextFunction){
        try {
            //FAKE DATA SHOP
            const shop = {
                id:1,
                shopify_domain:'dat-nt2.myshopify.com',
                shop_owner:'DAT NT2'
            }
            const accessToken = jwt.sign(
                {
                    shopId: shop.id,
                    shopify_domain: shop.shopify_domain,
                },
                shop.shop_owner,
                { expiresIn: "30d" }
            );
    
            return {
                statusCode: StatusCodes.OK,
                message: StatusCodes[StatusCodes.OK],
                data: shop,
                token: accessToken,
            };
        } catch (error) {
            next(error);
        }
    };

    

}