"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../database/dbConnection"));
const CharacterConst = dbConnection_1.default.define('Character', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING
    },
    universe: {
        type: sequelize_1.DataTypes.STRING
    },
    abilities: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = CharacterConst;
