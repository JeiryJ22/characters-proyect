import { Sequelize } from "sequelize";

const sequelizeDb = new Sequelize('list', 'root', 'joseJOAQUIN2225', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelizeDb;

