module.exports = function (sequelize, DataTypes) {
    const Gift = sequelize.define("Gift", {
      Giver: DataTypes.STRING,
      Receiver: DataTypes.STRING,
      Address: DataTypes.STRING,
      Email: DataTypes.STRING,
      Gift1: DataTypes.STRING,
      Gift2: DataTypes.STRING,
      Gift3: DataTypes.STRING,

      // TODO: Time range
    }, {
      createdAt: false,
      updatedAt: false
    });
  
    return Gift;
  };
  