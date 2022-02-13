const express = require("express");
const {
  createTask,
  updateTask,
  getTasks,
  updateStatus,
} = require("../controllers/taskController");

const schemas = require("../handlers/taskValidation");
const validate = require("../middlewares/validate");

const router = express.Router();

router.route("/tasks").post(validate(schemas.taskSchema), createTask);
router.route("/tasks/:id").put(validate(schemas.taskSchema), updateTask);
router
  .route("/tasks/status/:id")
  .put(validate(schemas.updateStatusSchema), updateStatus);
router.route("/tasks").get(getTasks);

module.exports = router;
