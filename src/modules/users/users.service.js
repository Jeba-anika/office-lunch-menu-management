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
        console.log(err)
        throw new Error('Error during transaction',)

    } finally {
        client.release();
    }
}

module.exports = {
    createUser
}