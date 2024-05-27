const { createMenu, getAllMenus, getSingleMenu, updateSingleMenu, deleteSingleMenu } = require("./lunch-options.service")

const createMenuController = async (req, res) => {
    try {
        const lunchOptions = req?.body
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


const updateMenuController = async (req, res) => {
    try {
        const { lunchOptionId } = req.params
        const data = req.body
        const result = await updateSingleMenu(lunchOptionId, data)
        res.status(200).json({
            success: true,
            message: "Menu updated successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Menu update failed!",
            error: err
        })
    }

}
const deleteMenuController = async (req, res) => {
    try {
        const { lunchOptionId } = req.params
        const result = await deleteSingleMenu(lunchOptionId)
        res.status(200).json({
            success: true,
            message: "Menu deleted successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err?.message || "Menu delete failed!",
            error: err
        })
    }

}



module.exports = {
    createMenuController,
    getAllMenusController,
    getSingleMenuController,
    updateMenuController,
    deleteMenuController
}