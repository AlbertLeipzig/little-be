import express from 'express';

import {
  createStudent,
  getAllStudents,
  getSingleStudent,
} from './studentController.js';

export const studentRouter = express.Router();

studentRouter.post('/', createStudent).get('/', getAllStudents);
studentRouter.get('/:id', getSingleStudent);
