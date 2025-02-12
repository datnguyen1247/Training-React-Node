
const db = require('../models/index.js')


const add = async (data) => {
    try {
        const translation = await db.Translation.create(data);
        return translation;
    } catch (error) {
        throw error;
    }
}; 

const remove = async (locale) => {
    try {
        const result = await db.Translation.destroy({
            where: {
                locale:locale
            }
        });
        return result
    } catch (error) {
        throw error;
    }
}; 

const update = async (data,id) => {
    try {
        const translation = await db.Translation.update(
            { ...data},
            {
                where: {
                    id:id
                },
            },
        );
        return translation
    } catch (error) {
        next(error);
    }
};

const getAll = async (shopId = 1) => {
    try {
        const data = await db.Translation.findAll({
            where: { shop_id: shopId }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

const getOne = async (shopId = 1,locale) => {
    try {
        const data = await db.Translation.findOne({
            where: { shop_id: shopId, locale  }
        });
        return data;
    } catch (error) {
        throw error;
    }
};
module.exports = {remove, add, update, getAll,getOne}
