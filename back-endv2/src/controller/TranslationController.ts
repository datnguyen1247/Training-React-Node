import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { Translation } from "../entity/Translation";
import { StatusCodes } from "http-status-codes";

export class TranslationController {
  private translationRepository = AppDataSource.getRepository(Translation);

  async all(request: Request, response: Response, next: NextFunction) {
    const { shopDomain } = request.headers;

    const data = await this.translationRepository.find({
      where: {
        shopify_domain: shopDomain,
      },
    });
    return {
      statusCode: StatusCodes.OK,
      message: StatusCodes[StatusCodes.OK],
      data,
    };
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const locale = request.params.locale;

    const translation = await this.translationRepository.findOne({
      where: { locale },
    });

    if (!translation) {
      return "unregistered translation";
    }
    return {
        statusCode: StatusCodes.CREATED,
        message: StatusCodes[StatusCodes.CREATED],
        data: translation,
    };
  }

  async save(request: Request, response: Response, next: NextFunction) {
    try {
      const data = request.body;

      let translation = await this.translationRepository.findOne({
        where: { locale: data.locale },
      });

      if (translation) {
        translation =  Object.assign(translation, data);
      } else {
        translation =  Object.assign(new Translation(), data);
        translation.translate = {
          button_text:'Apply',
          placeholder_text:'Discount code'
        }
      }
      translation.shopify_domain = request.headers.shopify_domain;
      const result = await  this.translationRepository.save(translation);
      return {
        statusCode: StatusCodes.CREATED,
        message: StatusCodes[StatusCodes.CREATED],
        data: result,
      }
    } catch (error) {
      next(error);
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const locale = request.params.locale;

    let translationToRemove = await this.translationRepository.findOneBy({
      locale,
    });

    if (!translationToRemove) {
      return "this translation not exist";
    }

    await this.translationRepository.remove(translationToRemove);

    return "translation has been removed";
  }
}
