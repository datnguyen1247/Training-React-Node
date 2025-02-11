'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Translation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Translation.belongsTo(models.Shop, {
        foreignKey: 'shop_id', 
        as: 'shop',            
      });
    }
  }
  Translation.init({
    locale: DataTypes.STRING,
    translate: DataTypes.JSON,
    shop_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Translation',
  });
  return Translation;
};