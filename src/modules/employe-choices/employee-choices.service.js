const pool = require("../../db")

const createEmployeeChoice = async (data) => {
    const employee = await pool.query(`SELECT id FROM employees WHERE userid =$1`, [data?.userid])
    const lunchOption = await pool.query(`SELECT * FROM lunch_options WHERE id =$1`, [data?.lunchoptionid])
    if (employee.rows.length < 1) {
        throw new Error('No matching employee in database!')
    }
    if (lunchOption.rows.length < 1) {
        throw new Error('No matching lunch option in database!')
    }
    const result = await pool.query(`INSERT INTO employee_choices (userid ,lunchoptionid , employeeid,choice_date) VALUES ($1, $2, $3,$4) RETURNING *`, [data?.userid, data?.lunchoptionid, employee.rows[0].id, lunchOption.rows[0].date])
    return result.rows[0]
}


const getAllEmployeeChoices = async (date, lunchOptionId) => {
    let result
    if (date && lunchOptionId) {
        result = await pool.query(`SELECT * FROM employee_choices WHERE choice_date=$1 AND lunchoptionid = $2`, [date, lunchOptionId])
    } else if (date) {
        result = await pool.query(`SELECT * FROM employee_choices WHERE choice_date=$1 `, [date])
    }
    else if (lunchOptionId) {
        result = await pool.query(`SELECT * FROM employee_choices WHERE lunchoptionid = $1 `, [lunchOptionId])
    }
    else {
        result = await pool.query(`SELECT * FROM employee_choices`)
    }
    return result.rows
}

const getLunchChoiceOfSingleEmployee = async (employeeId) => {
    const result = await pool.query(`SELECT * FROM employee_choices WHERE employeeid=$1`, [employeeId])
    return result.rows
}


const updateLunchChoiceOfSingleEmployee = async (choiceId, data) => {
    const keys = Object.keys(data)
    const values = []
    const query = `UPDATE employee_choices SET ${keys.map((key, index) => {
        values.push(data[key])
        return `${key}= $${index + 1}`
    })} WHERE id=$${keys.length + 1} RETURNING *`
    const result = await pool.query(query, [...values, choiceId])
    return result.rows
}

module.exports = {
    createEmployeeChoice,
    getAllEmployeeChoices,
    getLunchChoiceOfSingleEmployee,
    updateLunchChoiceOfSingleEmployee
}