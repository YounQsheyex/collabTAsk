const router = require("express").Router();
const { getAllTask } = require("../controllers/taskController");


router.get("/", getAllTask)


module.exports = router;
