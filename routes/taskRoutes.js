const router = require("express").Router();
const { createTask, getAllTask } = require("../controllers/taskController");

router.get("/alltask", getAllTask)
router.post("/create", createTask);

module.exports = router;
