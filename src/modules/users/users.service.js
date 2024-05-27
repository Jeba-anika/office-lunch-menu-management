const pool = require('../../db')

const createUser = async (data) => {
    const userData = {
        email: data.email,
        password: data.password,
        role: 'employee'
    }

    const client = await pool.connect()
    try {

        await client.query('BEGIN')
        const isUserExists = await client.query('SELECT * FROM users WHERE email = $1', [userData.email])
        if (isUserExists.rows.length > 0) {
            throw new Error('User already exists! Please login!')
        }
        const userResult = await client.query(
            'INSERT INTO users (email, password,role) VALUES ($1, $2, $3) RETURNING *',
            [data?.email, data?.password, 'employee']
        );

        const userId = userResult.rows[0].id;
        const employeeResult = await client.query(
            'INSERT INTO employees (email, userId, department, designation) VALUES ($1, $2, $3,$4) RETURNING *',
            [data?.email, userId, data?.department, data?.designation]
        );

        console.log(employeeResult)
        await client.query('COMMIT');

        return employeeResult.rows[0]

    } catch (err) {
        await client.query('ROLLBACK');
        throw new Error(err.message)

    } finally {
        client.release();
    }
}


const loginUser = async (userData) => {
    const client = await pool.connect()
    const isUserExists = await client.query('SELECT * FROM users WHERE email = $1', [userData.email])
    if (isUserExists.rows.length > 0) {
        if (isUserExists.rows[0].password === userData.password) {
            return isUserExists.rows[0]
        }
    } else {
        throw new Error('User does not exist!')
    }
}

module.exports = {
    createUser,
    loginUser
}