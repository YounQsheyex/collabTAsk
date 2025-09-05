const TASK = require("../models/taskmodel");

// create by seyi
const createTask = async (req, res) => {
  try {
    const newTask = new TASK(req.body);
    const { title } = newTask;
    const taskExist = await TASK.findOne({ title });
    if (taskExist) {
      res.status(400).json({ message: "Task Already Exist" });
    }
    const saveTask = await newTask.save();
    res.status(201).json({ message: "Task Created Successfully", saveTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all task

// get single task

// edit task

// delete task
module.exports = { createTask };
