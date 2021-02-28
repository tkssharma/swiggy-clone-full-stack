module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface
      .createTable('User', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        first_name: { type: Sequelize.STRING(45) },
        last_name: { type: Sequelize.STRING(45) },
        username: { type: Sequelize.STRING(45) },
        email: {
          type: Sequelize.STRING(45),
          unique: true,
          allowNull: false,
          validate: { isEmail: true },
        },
        mobile_no: { type: Sequelize.STRING(20), allowNull: true },
        password: { type: Sequelize.STRING, allowNull: false },
        address: { type: Sequelize.STRING, allowNull: true },
        type: { type: Sequelize.STRING(45), allowNull: true },
        is_active: { type: Sequelize.BOOLEAN, defaultValue: false },
        created_at: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
        updated_at: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      })
      .then(() => queryInterface.addIndex('User', ['username'])),
  down: queryInterface => queryInterface.dropTable('User'),
};
