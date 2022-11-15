<<<<<<< HEAD

require('dotenv').config();

const config = {
  username: process.env.DBUSER,
  password: process.env.DBPASS,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  dialect: process.env.DBDIALECT,
  database: process.env.DBNAME
=======
require('dotenv').config();

const config = {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: process.env.DBDIALECT,
    database: process.env.DBNAME
>>>>>>> e0a527d1511ad7501be155d8a9411c5e42bd2289
}

module.exports = config;