import { DataTypes } from "sequelize";
import sequelizeDb from "../database/dbConnection";

const CharacterConst = sequelizeDb.define('Character', {//DB Table model
    name: {
        type: DataTypes.STRING
    },
    nickname: {
        type: DataTypes.STRING
    },
    universe: {
        type: DataTypes.STRING
    },
    abilities: {
        type: DataTypes.STRING
    }
},{//Db solution
    createdAt: false,
    updatedAt: false
});

export default CharacterConst;