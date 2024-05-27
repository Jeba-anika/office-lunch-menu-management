const { createMenu } = require("./lunch-options.service")

const createMenuController = async (req, res) => {
    try {
        const lunchOptions = req?.body
        console.log(lunchOptions)
        const result = await createMenu(lunchOptions)
        res.status(200).json({
            success: true,
            message: "Menu creation successful!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Menu creation failed!",
            error: err
        })
    }

}

module.exports = {
    createMenuController
}