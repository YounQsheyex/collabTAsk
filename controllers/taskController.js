const TASK = require("../models/taskmodel");

// create

// get all task
const getAllTask = async (req, res) => {
    try {
        const tasks = await TASK.find()

        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            data: tasks
        })
    } catch (error) {
        console.error("Error fetching:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error while fetching tasks",
            error: error.message
        })
    }

}

// get single task

// edit task

// delete task
module.exports = { getAllTask };
