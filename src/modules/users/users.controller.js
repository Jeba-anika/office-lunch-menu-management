const { createUser } = require("./users.service");

const createUserController = async (req, res) => {
    try {
        const employeeResult = await createUser(req.body)
        res.status(200).json({
            success: true,
            message: 'User and Employee registered successfully',
            data: employeeResult
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err
        })
    }
}

module.exports = {
    createUserController
}