const Sequelize = require("sequelize");

const config = {
    username: "root",
    password: "123456789",
    database: "training",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const close = async () => {
    await sequelize.close();
};

module.exports = {connection, close}

