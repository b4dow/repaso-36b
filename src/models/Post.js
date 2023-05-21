const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER, // es alfanumerico con numero y letras
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body : {
            type: DataTypes.STRING,
            allowNUll: false
        }
    },{freezeTableName: true, timestamps: true})
}