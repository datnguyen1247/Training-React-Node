const {StatusCodes} =  require("http-status-codes");
const translationService = require("../services/translationService")

const add = async (req, res, next) => {
    try {
        const translation = await translationService.add(req.body);
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: translation.dataValues,
        });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const translation = await translationService.update(req.body,req.params.id);
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: translation.dataValues,
        });
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const translation = await translationService.remove(req.params.locale);
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: translation.dataValues,
        });
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const translation = await translationService.getAll();
        console.log(translation)
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: translation,
        });
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const translation = await translationService.getOne(1,req.params.locale);
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: translation.dataValues,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {destroy,add,update,getAll,getOne}