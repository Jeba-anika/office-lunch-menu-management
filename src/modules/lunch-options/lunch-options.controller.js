const { createMenu, getAllMenus } = require("./lunch-options.service")

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
const getAllMenusController = async (req, res) => {
    try {
        const result = await getAllMenus(lunchOptions)
        res.status(200).json({
            success: true,
            message: "All menus fetched successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Menu fetch failed!",
            error: err
        })
    }

}

module.exports = {
    createMenuController,
    getAllMenusController
}