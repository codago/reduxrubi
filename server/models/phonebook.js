'use strict';
module.exports = (sequelize, DataTypes) => {
  var Phonebook = sequelize.define('Phonebook', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Phonebook;
};