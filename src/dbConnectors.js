let Sequelize = require("sequelize");

let _ = require("lodash");
const sequelize = new Sequelize("database", null, null, {
  dialect: "sqlite",
  storage: "./aliens.sqlite"
});

const Aliens = sequelize.define("aliens", {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  planet: { type: Sequelize.STRING }
});

module.exports = {
  Aliens
};
