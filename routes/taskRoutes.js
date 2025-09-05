const router = require("express").Router();
const { createTask,getAllTask } = require("../controllers/taskController");

router.get("/", getAllTask)
router.post("/create", createTask);

module.exports = router;
