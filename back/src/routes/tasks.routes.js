import { Router } from "express";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  prueba,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

// create a task
router.get('/task', prueba)

router.post("/tasks", createTask);

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
