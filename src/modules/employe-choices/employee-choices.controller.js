const { createEmployeeChoice, getAllEmployeeChoices, getLunchChoiceOfSingleEmployee, updateLunchChoiceOfSingleEmployee } = require("./employee-choices.service")

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
    try {
        const { date, lunchOptionId } = req.query
        const result = await getAllEmployeeChoices(date, lunchOptionId)
        res.status(200).json({
            success: true,
            message: "All employee choice fetched successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "All employee choice fetch failed!",
            error: err
        })
    }
}

const getLunchChoiceOfSingleEmployeeController = async (req, res) => {
    try {
        const { employeeId } = req.params
        const result = await getLunchChoiceOfSingleEmployee(employeeId)
        res.status(200).json({
            success: true,
            message: "Single employee choice fetched successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Single employee choice fetch failed!",
            error: err
        })
    }
}
const updateLunchChoiceOfSingleEmployeeController = async (req, res) => {
    try {
        const { choiceId } = req.params
        const data = req.body
        const result = await updateLunchChoiceOfSingleEmployee(choiceId, data)
        res.status(200).json({
            success: true,
            message: "Single employee choice updated successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Single employee choice update failed!",
            error: err
        })
    }
}

module.exports = {
    createEmployeeChoiceController,
    getAllEmployeeChoicesController,
    getLunchChoiceOfSingleEmployeeController,
    updateLunchChoiceOfSingleEmployeeController
}