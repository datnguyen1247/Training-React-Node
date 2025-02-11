'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shop.hasOne(models.Customization,{
        foreignKey: 'shop_id',
        as: 'customization',
      })
      Shop.hasMany(models.Translation, {
        foreignKey: 'shop_id',
        as: 'translations', 
      });
    }
  }
  Shop.init({
    shopify_domain: DataTypes.STRING,
    shop_owner: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};