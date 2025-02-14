import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Shop } from "../entity/Shop";
import { StatusCodes } from "http-status-codes";
const jwt = require("jsonwebtoken");
export class ShopController {
  private shopRepository = AppDataSource.getRepository(Shop);

  async one(request: Request, response: Response, next: NextFunction) {
    const shopify_domain = request.headers.shopify_domain;
    const shop = await this.shopRepository
      .createQueryBuilder("shop")
      .leftJoinAndSelect("shop.customization", "customization")
      .leftJoinAndSelect("shop.translations", "translation")
      .where("shop.shopify_domain = :shopify_domain", { shopify_domain })
      .getOne();
    if (!shop) {
      return "shop not found";
    }
    return {
      statusCode: StatusCodes.OK,
      message: StatusCodes[StatusCodes.OK],
      data: shop,
    };
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.shopRepository.find();
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const data = request.body;
    let shop = await this.shopRepository.findOne({
      where: { shopify_domain: data.shopify_domain },
    });
    if (shop) {
      shop = shop;
    } else {
      shop = Object.assign(new Shop(), request.body);
      await this.shopRepository.save(shop);
    }
    return {
      statusCode: StatusCodes.CREATED,
      message: StatusCodes[StatusCodes.CREATED],
      data: shop,
    };
  }

  async fakeLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const shop = req.body
      const accessToken = jwt.sign(
        {
          shopify_domain: shop.shopify_domain,
        },
        'secretKey',
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
  }
}
