const { Aliens } = require("./dbConnectors");
const _ = require('lodash');
let causal = require("casual");
let resolvers = {
  Query: {
    getAliens: (parent, args) => {
      return new Promise((resolve, reject) => {
        return Aliens.findAll().then(aliens => {
          resolve(aliens);
        });
      });
    },
    getOneAlien: (parent, args) => {
      return new Promise((resolve, reject) => {
        if (args.id) {
          return Aliens.findOne({
            where: {
              id: args.id
            }
          }).then(alien => {
            if (alien) resolve(alien);
            else reject("Alien Not Found");
          });
        }
      });
    }
  },
  Mutation: {
    addAlien: (parent, args) => {
      return new Promise((resolve, reject) => {
        Aliens.create({
          firstName: args.firstName,
          lastName: args.lastName,
          planet: args.planet
        }).then((alien) => {
          resolve(alien)
        });
      })
    },
    deleteAlien(parent, args) {
      return new Promise((resolve, reject) => {
        Aliens.findOne({
          where: {
            id: args.id
          }
        })
          .then(alien => {
            return alien.destroy();
          })
          .then((arg) => {
            alienData = arg.dataValues
            let alien = {
              id: alienData.id,
              firstName: alienData.firstName,
              planet: alienData.planet
            }
            resolve(alien)
          });
      });
    },
    createRandomAliens(parent, args) {
      const newAliens = [];
      _.times(args.number, () => {
        let firstName = causal._first_name()
        let lastName = causal._last_name()
        let planet = causal._company_name()
        Aliens.create({
          firstName,
          lastName,
          planet
        })
      })
      console.log(newAliens)
      return "Created Aliens. Query to see"
    }
  }
};
module.exports = {
  resolvers
};
