const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const path = require("path");
const Teacher = require("./modules/teacher_data");
const Admin = require("./modules/admin_data");
const Student = require("./modules/student_data");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

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

// Root Route
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Show login form at /teacher-login
app.get("/teacher-login", (req, res) => {
  res.render("teacher-login");
});

// Handle login form submission
app.post("/teacher-login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ username, password });

    if (!teacher) {
      return res.render("teacher-login", { error: "Invalid username" });
    }

    if (teacher.password !== password) {
      return res.render("teacher-login", { error: "Invalid password" });
    }

    // ✅ Login success
    res.send(`Welcome ${teacher.fullName}, you are logged in!`);
  } catch (err) {
    console.error(err);
    res.render("error", { message: "Something went wrong, please try again!" });
  }
});

// Admin Login Page
app.get("/admin-login", (req, res) => {
  res.render("admin");
});

// Admin Login POST (check credentials)
app.post("/admin-login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username, password });

    if (admin) {
      res.send(`<h2>Welcome Admin: ${admin.name}</h2>`);
    } else {
      res.render("error", { message: "Invalid Admin Credentials" });
    }
  } catch (err) {
    res.render("error", { message: "Something went wrong" });
  }
});

// Student List Page
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.render("students", { students }); // passing data to EJS
  } catch (err) {
    console.error(err);
    res.render("error", { message: "Error fetching students" });
  }
});

// Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
