const pool = require("../../db");

const createMenu = async (data) => {
    //data =[{option_name: "menu-1", description: "rice,daal,chicken",date: '2024-05-27}]
    let values = []
    let options = data?.options.map((option, index) => {
        values.push(option.date, option.option_name, option.description);
        return `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`;
    }).join(', ')

    const result = await pool.query(`INSERT INTO lunch_options (date, option_name, description) VALUES ${options} RETURNING *`, values)
    return result.rows
}


const getAllMenus = async (date) => {
    let result
    if (date) {
        result = await pool.query(`SELECT * from lunch_options WHERE date=$1`, [date])
    } else {
        result = await pool.query(`SELECT * from lunch_options`)
    }

    return result.rows
}


const getSingleMenu = async (lunchOptionId) => {
    const result = await pool.query(`SELECT * from lunch_options WHERE id = $1`, [lunchOptionId])
    return result.rows[0]
}

module.exports = {
    createMenu,
    getAllMenus,
    getSingleMenu
}