# SkillForge LMS 🎓
# Learning Management System Project using MERN Stack

A full-stack Learning Management System (LMS) built with the MERN stack. Instructors can create and manage courses, and students can browse, purchase, and track their learning progress.

---

<!-- ## 📸 Screenshots

### Login & Sign Up
![Login Page](./screenshots/login.png)
![Sign Up Page](./screenshots/signup.png)

### Student View
![Home Page](./screenshots/home.png)
![All Courses](./screenshots/courses.png)
![Course Details](./screenshots/course-details.png)

### Instructor View
![Instructor Dashboard](./screenshots/instructor-dashboard.png)
![All Courses](./screenshots/instructor-courses.png)

--- -->

## 🛠️ Tech Stack

**Frontend:** React.js · Vite · Tailwind CSS · Shadcn UI · React Router DOM · Axios

**Backend:** Node.js · Express.js · JWT(JSON Web Tokens) · Multer

**Database:** MongoDB · Mongoose

**Payment:** Cloudinary · PayPal SDK

**Deployment:** Vercel (Frontend) · Render (Backend)
---

## ✨ Features

### Student
- 🔐 Register & Login with JWT Authentication
- 🏠 Home page with Featured Courses & Categories
- 🔍 Browse & Filter Courses by Category, Level, Language
- 📖 Course Details with Curriculum Preview
- 💳 PayPal Payment Integration
- 🎥 Video Player with Progress Tracking
- 🎉 Course Completion Confetti
- 📱 Fully Responsive — Mobile & Desktop

### Instructor
- 📊 Dashboard with Total Students & Revenue
- 📚 Create, Edit & Delete Courses
- 🎬 Bulk Video Upload via Cloudinary
- 📋 Course Curriculum Management
- 🖼️ Course Landing Page with Image Upload
- ⚙️ Course Settings (Pricing, Level, Language)
- 👥 Students List per Course

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas Account
- Cloudinary Account
- PayPal Developer Account

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/MERN-LMS.git
cd MERN-LMS
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create `server/.env` file:
```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET_ID=your_paypal_secret
```

Start the server:
```bash
node server.js
# or with nodemon
nodemon server.js
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Start the frontend:
```bash
npm run dev
```

## 🔒 Security Features

- ✅ JWT Authentication
- ✅ Password Hashing with Bcrypt
- ✅ Rate Limiting on Auth Routes (20 req/15min)
- ✅ CORS Protection
- ✅ Environment Variables for sensitive data
- ✅ Input Validation

---

## 👨‍💻 Author

**Jenil Butani**

## 📄 License

This project is licensed under the MIT License.