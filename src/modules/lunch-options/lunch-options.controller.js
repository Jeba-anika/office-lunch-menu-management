const { createMenu, getAllMenus, getSingleMenu } = require("./lunch-options.service")

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
        const { date } = req.query
        const result = await getAllMenus(date)
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
const getSingleMenuController = async (req, res) => {
    try {
        const { lunchOptionId } = req.params
        console.log(lunchOptionId)
        const result = await getSingleMenu(lunchOptionId)
        res.status(200).json({
            success: true,
            message: "Menu fetched successfully!",
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
    getAllMenusController,
    getSingleMenuController
}