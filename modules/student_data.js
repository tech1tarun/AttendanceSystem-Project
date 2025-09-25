const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
  },
  class: {
    type: String,
  },
  department: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  address: {
    type: String,
  },

  // Optional: Store QR code for each student
  qrCode: {
    type: String, // base64 image string from "qrcode" package
  },

  // Attendance records
  attendance: [
    {
      date: { type: Date, default: Date.now },
      status: { type: String, enum: ["Present", "Absent"], default: "Absent" },
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
