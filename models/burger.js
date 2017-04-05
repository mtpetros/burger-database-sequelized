module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    devoured: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    createdAt: {
        type: DataTypes.NOW,
        allowNull: false
    }
  });
  return Burger;
};


