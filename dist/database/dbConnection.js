"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeDb = new sequelize_1.Sequelize('list', 'root', 'joseJOAQUIN2225', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelizeDb;
