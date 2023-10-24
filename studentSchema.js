import mongoose, { Schema } from 'mongoose';
import { Teacher } from './teacherSchema.js';
const { ObjectId } = mongoose.Types;

// student collection
// teacher collection ?

const studentSchema = new Schema(
  {
    teacher : { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    studentName: String,
    geburtstag: { type: Date, default: Date.now() },
  },
  {
    collection: 'students',
  }
);

export const Student = new mongoose.model('Student', studentSchema);
