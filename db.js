require('dotenv').config();
const { Sequelize } = require('sequelize')


// Database
const sequelize = new Sequelize(
  process.env.INTERNAL_DATABASE_URL,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize

