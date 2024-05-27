const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    jwt_expires_in: process.env.JWT_EXPIRES_IN,
    jwt_secret: process.env.JWT_SECRET
}