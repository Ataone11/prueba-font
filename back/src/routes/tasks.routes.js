import { Router } from "express";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

// create a task

router.post("/tasks", createTask);

//get tasks
router.get("/tasks", getAllTasks);

//get a single tasks
router.get("/tasks/:id", getTask);

//update task
router.put("/tasks/:id", updateTask);

//deleted task
router.delete("/tasks/:id", deleteTask);

export default router;
