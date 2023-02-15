const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ Card, User }) {
      this.belongsTo(Card, { foreignKey: 'c_id' });
      this.belongsTo(User, { foreignKey: 'u_id' });
    }
  }
  Basket.init({
    u_id: DataTypes.INTEGER,
    c_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
