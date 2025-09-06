const TASK = require("../models/taskmodel");

// create by seyi
const createTask = async (req, res) => {
  try {
    const newTask = new TASK(req.body);
    const { title, description } = newTask;
    const taskExist = await TASK.findOne({ title });
    if (taskExist) {
      return res.status(400).json({ message: "Task Already Exist" });
    }
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }
    const saveTask = await newTask.save();
    res.status(201).json({ message: "Task Created Successfully", saveTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all task
const getAllTask = async (req, res) => {
  try {
    const tasks = await TASK.find();

    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    console.error("Error fetching:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while fetching tasks",
      error: error.message,
    });
  }
};

// get single task
/*---------------------------------------
======= BY EZEKIEL ===============
----------------------------------------*/

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TASK.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Task found successfully", task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// edit task

// delete task

module.exports = { createTask, getAllTask, getSingleTask };
