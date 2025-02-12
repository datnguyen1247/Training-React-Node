const db = require('../models/index.js')
const getOne = async (shopId = 1) => {
    try {
        const data = await db.Shop.findOne({
            where: { id: shopId }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

const add = async (data) => {
    try {
        console.log(data)
        const shop = await db.Shop.create(data);
        return shop;
    } catch (error) {
        throw error;
    }
}; 


module.exports = {getOne, add}
