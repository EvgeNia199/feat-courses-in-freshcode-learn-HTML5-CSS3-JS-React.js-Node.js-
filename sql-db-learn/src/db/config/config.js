require('dotenv/config');
module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "product",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
      decimalNumbers: true,
      parseFloat: true,
    }
  },
  test: {},
  production: {}
}