'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookings.init({
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false
      },
    flightId: {
      type:DataTypes.INTEGER,
      allowNull: false
      },
    status: {
      type:DataTypes.ENUM,
      allowNull: false,
      defaultValue: 'InProcess',
      values: ["InProcess","Booked","Cancelled"]
      }
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};