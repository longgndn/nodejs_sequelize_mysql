module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.TINYINT,
      },
      rate: {
        type: Sequelize.TINYINT,
      },
      image: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: true }
  );

  return Product;
};
