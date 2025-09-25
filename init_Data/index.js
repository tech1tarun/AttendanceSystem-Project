const mongoose = require("mongoose");
const initData = require("./data.js");
const adminData = require("./data.js");
const studentData = require("./data.js");
const Teacher = require("../modules/teacher_data.js");
const Admin = require("../modules/admin_data.js");
const Student = require("../modules/student_data.js");
const QRCode = require("qrcode");

const MONGO_URL = "mongodb://127.0.0.1:27017/Attendance";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Teacher.deleteMany({});
  await Teacher.insertMany(initData.data1);
  console.log(" Teachers data was initialise");
};

const initAdminData = async () => {
  await Admin.deleteMany({});
  await Admin.insertMany(adminData.data2);
  console.log(" Admin data was initialise");
};

const initStudentData = async () => {
  await Student.deleteMany({});
  // await Student.insertMany(studentData.data3);
  for (let s of studentData.data3) {
    const student = new Student(s);

    // Generate QR for each studentId
    const qr = await QRCode.toDataURL(student._id.toString());
    student.qrCode = qr;

    await student.save();
  }
  console.log(" Students data was initialise");
};

initDB();
initAdminData();
initStudentData();
