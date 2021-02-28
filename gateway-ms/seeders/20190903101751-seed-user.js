const User = {
  first_name: "'test user'",
  last_name: "'test user'",
  username: "'test user'",
  email: "'testuser@test.com'",
  password: "'test-password'",
  type: "'1'",
  is_active : true
};
const TestUserQuery = `INSERT INTO User (${Object.keys(User)}) VALUES (${Object.values(User)})`;
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query(
    TestUserQuery,
    { type: queryInterface.sequelize.QueryTypes.INSERT }
  ).catch(err => {
    console.log(err);
  }),
  down: (queryInterface, Sequelize) => {}
};
