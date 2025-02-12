const db = require('../models/index.js')


const store = async (data) => {
    try {
        const customization = await db.Customization.findOne({
            where: { shop_id: data.shop_id },
        });
        
        if (customization) {
            await customization.update(data);
            return customization;
        } else {
            const customization = await db.Customization.create(data);  
            return customization;
          }
    } catch (error) {
        throw error;
    }
}; 


module.exports = {store}
