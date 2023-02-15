const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Basket }) {
      this.hasMany(Basket, { foreignKey: 'u_id' });
      this.hasMany(Card, { foreignKey: 'owner_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.TEXT,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
