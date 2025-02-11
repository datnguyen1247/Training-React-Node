'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customization.belongsTo(models.Shop, {
        foreignKey: 'shop_id',  
        as: 'shop',      
      });
    }
  }
  Customization.init({
    input_width: DataTypes.INTEGER,
    input_height: DataTypes.INTEGER,
    input_border: DataTypes.STRING,
    input_border_radius: DataTypes.INTEGER,
    input_background_color: DataTypes.STRING,
    button_variant: DataTypes.STRING,
    border_width: DataTypes.INTEGER,
    border_color: DataTypes.STRING,
    button_width: DataTypes.INTEGER,
    button_height: DataTypes.INTEGER,
    button_border: DataTypes.STRING,
    button_background_color: DataTypes.STRING,
    button_text_color: DataTypes.STRING,
    direction: DataTypes.STRING,
    css: DataTypes.TEXT,
    shop_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customization',
  });
  return Customization;
};