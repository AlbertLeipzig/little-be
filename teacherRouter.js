import express from "express"

import { createTeacher } from "./teacherController.js"

export const teacherRouter = express.Router()

teacherRouter.post("/", createTeacher)