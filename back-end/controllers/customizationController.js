const {StatusCodes} =  require("http-status-codes");
const customizationService = require("../services/customizationService.js")



const store = async (req, res, next) => {
    try {
        const result = await customizationService.store(req.body);
        res.status(StatusCodes.CREATED).json({
            statusCode: StatusCodes.CREATED,
            message: StatusCodes[StatusCodes.CREATED],
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {store}