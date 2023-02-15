const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Basket }) {
      this.belongsTo(User, { foreignKey: 'owner_id' });
      this.hasMany(Basket, { foreignKey: 'c_id' });
    }
  }
  Card.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    price: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    owner_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
