import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './dbConnection.js';
import { studentRouter } from './studentRouter.js';
import { teacherRouter } from './teacherRouter.js';
dotenv.config();

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

const serverUrl = '/api/v1';

app.use(express.json());
app.use(`${serverUrl}/students`, studentRouter);
app.use(`${serverUrl}/teachers`, teacherRouter);

const startServer = async () => {
  try {
    dbConnection(MONGO_URL);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
};

startServer();
