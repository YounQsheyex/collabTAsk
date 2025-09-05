const router = require("express").Router();

const {createTask} = require("../controllers/taskController");

router.post('/create', createTask)

module.exports = router;
