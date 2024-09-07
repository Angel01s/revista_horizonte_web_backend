const Sequelize = require("sequelize");
const db = new Sequelize('base_horizonte','root', '',
{
    host:'localhost',
    dialect:'mysql'
}
);
module.exports = db;