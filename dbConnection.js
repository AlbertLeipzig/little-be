import mongoose from 'mongoose';
export const dbConnection = async (url) => {
  try {
    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error);
  }
};
