const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mariadb_crud', 'root', 'root', {
  host: 'localhost',
  port: 3307,
  dialect: 'mariadb'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MariaDB with Sequelize.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
