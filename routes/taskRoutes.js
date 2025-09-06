const router = require("express").Router();
const {
  createTask,
  getAllTask,
  getSingleTask,
} = require("../controllers/taskController");

router.get("/alltask", getAllTask);
router.post("/create", createTask);
router.get("/:id", getSingleTask);
module.exports = router;
