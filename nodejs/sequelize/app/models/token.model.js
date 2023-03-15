module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define(
    "Token",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );

  Token.associate = function (models) {
    Token.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Token;
};
