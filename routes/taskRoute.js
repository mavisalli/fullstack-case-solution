const express = require("express");
const {
  createTask,
  updateTask,
  getTasks,
  updateStatus,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/tasks").post(createTask);
router.route("/tasks/:id").put(updateTask);
router.route("/tasks/status/:id").put(updateStatus);
router.route("/tasks").get(getTasks);

module.exports = router;
