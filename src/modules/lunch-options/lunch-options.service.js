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

module.exports = {
    createMenu
}