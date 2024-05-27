const pool = require("../../db")

const createEmployeeChoice = async (data) => {
    const employee = await pool.query(`SELECT id FROM employees WHERE userid =$1`, [data?.userid])
    const lunchOption = await pool.query(`SELECT id FROM lunch_options WHERE id =$1`, [data?.lunchoptionid])
    if (employee.rows.length < 1) {
        throw new Error('No matching employee in database!')
    }
    if (lunchOption.rows.length < 1) {
        throw new Error('No matching lunch option in database!')
    }
    const result = await pool.query(`INSERT INTO employee_choices (userid ,lunchoptionid , employeeid) VALUES ($1, $2, $3) RETURNING *`, [data?.userid, data?.lunchoptionid, employee.rows[0].id])
    return result.rows[0]
}


const getAllEmployeeChoices = async () => {

}

const getLunchChoiceOfSingleEmployee = async () => {

}

module.exports = {
    createEmployeeChoice,
    getAllEmployeeChoices,
    getLunchChoiceOfSingleEmployee
}