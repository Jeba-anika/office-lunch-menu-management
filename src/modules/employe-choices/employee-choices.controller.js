const { createEmployeeChoice } = require("./employee-choices.service")

const createEmployeeChoiceController = async (req, res) => {
    try {
        const data = req?.body
        const result = await createEmployeeChoice(data)
        res.status(200).json({
            success: true,
            message: "Menu selected successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Menu choice creation failed!",
            error: err
        })
    }
}


const getAllEmployeeChoicesController = async (req, res) => {

}

const getLunchChoiceOfSingleEmployeeController = async (req, res) => {

}

module.exports = {
    createEmployeeChoiceController,
    getAllEmployeeChoicesController,
    getLunchChoiceOfSingleEmployeeController
}