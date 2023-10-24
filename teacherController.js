import { Teacher } from './teacherSchema.js';

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    console.log(teacher);
    return res.status(200).json(teacher);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getTeacher = async () => {
  try {
    const teacherId = req.params.id;
    const teacher = await Teacher.findById(teacherId);
    return teacher
      ? res.status(200).json(teacher)
      : res.status(404).json({ msg: `teacher with id ${teacherId} not found` });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
