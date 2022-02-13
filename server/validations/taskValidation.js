const Joi = require("joi");

// All request body validation rules regarding register/login are written below with Joi.
const taskSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const updateStatusSchema = Joi.object().keys({
  completed: Joi.boolean().required(),
});

module.exports = {
  taskSchema,
  updateStatusSchema,
};
