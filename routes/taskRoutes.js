const router = require("express").Router();
const {
  createTask,
  getAllTask,
  getSingleTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

router.get("/alltask", getAllTask);
router.post("/create", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id",deleteTask)
module.exports = router;
