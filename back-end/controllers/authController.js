const {StatusCodes} =  require("http-status-codes");
const jwt = require("jsonwebtoken");


const fakeLogin = async (req, res, next) => {
    const shop = {
        id:1,
        shopify_domain:'dat-nt2.myshopify.com',
        shop_owner:'DAT NT2'
    }
    try {
        const accessToken = jwt.sign(
            {
              shopId: shop.id,
              shopify_domain: shop.shopify_domain,
            },
            shop.shop_owner,
            { expiresIn: "30d" }
        );
        res.status(StatusCodes.OK).json({
            statusCode: StatusCodes.OK,
            message: StatusCodes[StatusCodes.OK],
            data: shop,
            token: accessToken,
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {fakeLogin}