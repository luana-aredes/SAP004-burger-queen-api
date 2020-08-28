'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_x_Order = sequelize.define('Products_x_Order', {
    type_of_protein: DataTypes.BOOLEAN,
    add_option: DataTypes.BOOLEAN,
    qtd: DataTypes.INTEGER,
  }, {});
  Products_x_Order.associate = function (models) {
    Products_x_Order.belongsTo(models.Product)
    Products_x_Order.belongsTo(models.Order)
  };
  return Products_x_Order;
};