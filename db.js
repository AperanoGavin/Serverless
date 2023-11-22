require('dotenv').config();
const { Sequelize } = require('sequelize')

const INTERNAL_DATABASE_URL = process.env.INTERNAL_DATABASE_URL

// Database
const sequelize = new Sequelize(
  INTERNAL_DATABASE_URL,
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

