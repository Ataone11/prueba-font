import { pool } from "../db.js";

//controlllers

export const createTask = async (req, res, next) => {
  try {
    const { title, description, userid} = req.body;

    const newTask = await pool.query(
      "INSERT INTO task (title, description, userid) VALUES($1, $2, $3) RETURNING *",
      [title, description, userid]
    );

    res.json(newTask.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description,userid } = req.body;

    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2, userid = $3 WHERE id = $4 RETURNING *",
      [title, description,userid, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

    if (result.rowCount === 0)
      return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
