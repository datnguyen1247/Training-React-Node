const {StatusCodes} =  require("http-status-codes");
const shopService = require("../services/shopService.js")

const get = async (req, res, next) => {
    try {
        const shop = await shopService.getOne();
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: shop.dataValues,
        });
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const shop = await shopService.getAll();
        console.log(shop)
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: shop,
        });
    } catch (error) {
        next(error);
    }
};
const add = async (req, res, next) => {
    try {
        const shop = await shopService.add(req.body);
        res.status(StatusCodes.CREATED).json({
            statusCode: StatusCodes.CREATED,
            message: StatusCodes[StatusCodes.CREATED],
            data: shop,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {get,add,getAll}