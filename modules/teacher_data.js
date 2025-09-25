const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  teacherId: String,
  fullName: String,
  email: String,
  username: String,
  password: String,
  phoneNumber: String,
  gender: String,
  department: String,
  designation: String,
  joiningDate: Date,
  role: String,
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
