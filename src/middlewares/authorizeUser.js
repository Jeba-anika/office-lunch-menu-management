const jwt = require('jsonwebtoken');
const config = require('../config');
const pool = require('../db');

const authorizeUser = async (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(403).json({ success: false, message: 'No token provided', err: '' });
    }

    try {
        const { userId, role } = jwt.decode(token, config.jwt_secret)
        const isUserExists = await pool.query(`SELECT * FROM users WHERE id=$1`, [userId])
        if (isUserExists.rows.length > 0) {
            next()
        } else {
            throw new Error('User does not exists!')
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'User is not authorized!',
            error: err
        })
    }
}

module.exports = authorizeUser