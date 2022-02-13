const postgresClient = require("../db/config");
const httpStatus = require("http-status");

exports.createTask = async (req, res) => {
  try {
    const text = "INSERT INTO tasklist (title, description) VALUES ($1,$2)";

    const values = [req.body.title, req.body.description];

    await postgresClient.query(text, values);

    return res.status(201).json("Task created successfully");
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await postgresClient.query(
      "SELECT * FROM tasklist WHERE id=$1",
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "task not found" });
    }

    const text =
      "UPDATE tasklist SET title = $1, description = $2 WHERE id = $3 RETURNING *";

    const values = [req.body.title, req.body.description, id];

    const { rows } = await postgresClient.query(text, values);

    return res.status(201).json({ UpdatedTask: rows[0] });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await postgresClient.query(
      "SELECT * FROM tasklist WHERE id=$1",
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "task not found" });
    }

    const text = "UPDATE tasklist SET completed = $1 WHERE id = $2 RETURNING *";

    const values = [req.body.completed, id];

    const { rows } = await postgresClient.query(text, values);

    return res.status(201).json({ UpdatedStatus: rows[0] });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const text = "SELECT * FROM tasklist ORDER BY id ASC";
    const { rows } = await postgresClient.query(text);
    return res.status(200).json(rows);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
};
