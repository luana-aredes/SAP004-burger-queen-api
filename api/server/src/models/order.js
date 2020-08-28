'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    client: DataTypes.STRING,
    table: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    item: DataTypes.STRING,
    quantity: DataTypes.DECIMAL(10, 2),
  }, {});
  Order.associate = function (models) {
    Order.hasMany(models.Products_x_Order)
  };
  return Order;
};