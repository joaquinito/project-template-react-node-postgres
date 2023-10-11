const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Vehicle extends Model {}
Vehicle.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numberWheels: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Vehicle',
    timestamps: false, // Don't add timestamps attributes updatedAt and createdAt
    underscored: true, // Convert camelCase to snake_case for attribute names
})

module.exports = Vehicle

