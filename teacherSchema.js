import mongoose, { Schema } from 'mongoose';

const teacherSchema = new Schema(
  {
    name: String,
  },
  {
    collection: 'teachers',
  }
);

export const Teacher = new mongoose.model('Teacher', teacherSchema);
