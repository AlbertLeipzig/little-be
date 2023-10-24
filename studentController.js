import { Student } from './studentSchema.js';

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate('teacher')
      .exec();
    return student
      ? res.status(200).json(student)
      : res.status(404).json({ msg: 'Student not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return students
      ? res.status(200).json(students)
      : res.status(404).json({ msg: 'students not found' });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const updateSingleStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return student
      ? res.status(200).json(student)
      : res
          .status(404)
          .json({ msg: `student with id : ${req.params.id} not found` });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deleteSingleStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    return student
      ? res.status(200).json(student)
      : res
          .status(404)
          .json({ msg: `student with id : ${req.params.id} not found` });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
