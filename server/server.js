require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const authRoutes = require("./routes/auth-routes/index");
const mediaRoutes = require("./routes/instructor-routes/media-routes");
const instructorCourseRoutes = require("./routes/instructor-routes/course-routes");
const studentViewCourseRoutes = require("./routes/student-routes/course-routes");
const studentViewOrderRoutes = require("./routes/student-routes/order-routes");
const studentCoursesRoutes = require("./routes/student-routes/student-courses-routes");
const studentCourseProgressRoutes = require("./routes/student-routes/course-progress-routes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 requests per 15 minutes
  message: {
    success: false,
    message: "Too many attempts. Please try again after 15 minutes.",
  },
});

app.use(
  cors({
    origin: [
      "https://lms-client-vert.vercel.app",
      "https://mern-lms-platform-tau.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

// Routes configuration
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/instructor/course", instructorCourseRoutes);
app.use("/api/student/course", studentViewCourseRoutes);
app.use("/api/student/order", studentViewOrderRoutes);
app.use("/api/student/courses-bought", studentCoursesRoutes);
app.use("/api/student/course-progress", studentCourseProgressRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is now running on port ${PORT}`);
});