const TASK = require("../models/taskmodel");

// create
  const createTask = async (req,res)=>{
  
   const {title,description,priority} = req.body

    if( !title || !description || !priority ){
    return res.status(400).json({message:"invalid creadential"})
   } 
   try {
    const task = await TASK.create({title,description,priority})
    res.status(200).json({success:true,task})
   } catch (error) {
    res.status(500).json({message:'bad request'})
   }
  }
// get all task

// get single task

// edit task

// delete task
module.exports = {createTask};
