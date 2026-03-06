# 🚀 AI-Powered Online Resume Builder (MERN Stack)

An **AI-powered Online Resume Builder** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This application allows users to create professional resumes, manage multiple resumes, share live resume links, and optimize resumes using **Google Gemini AI API**.

The platform provides a **modern UI, live preview, AI optimization, and multiple templates** to help users create job-ready resumes quickly.

---

# ✨ Features

## 🔐 User Authentication

* User **Sign Up / Sign In**
* Secure authentication using **JWT**
* Personalized dashboard for each user

---

## 📝 Resume Management

Users can manage multiple resumes easily.

* Create a **new resume**
* **Edit** resume details
* **Delete** existing resumes
* Store and manage multiple resumes in the dashboard

---

## 👀 Live Resume Preview

* Real-time **resume preview**
* Instantly view changes while editing
* Switch between different templates

---

## 🔗 Share Resume with Live Link

* Each resume can generate a **public shareable link**
* Share your resume with **recruiters or companies**
* No login required to view the shared resume


```

---

## 🤖 AI Resume Optimization (Gemini API)

Users can upload an existing resume and improve it using **Google Gemini AI**.

Features include:

* Resume content analysis
* Keyword improvement suggestions
* Better formatting recommendations
* Job description based optimization

---

## 📄 Resume Upload & Optimization

* Upload your existing resume
* AI analyzes the content
* Provides suggestions for improving:

  * clarity
  * keywords
  * structure

---

## 🖼 Profile Image Upload

* Upload profile photo for resume
* **Automatic background removal**
* Clean professional profile images

---

## 🎨 Multiple Resume Templates

* Choose from **multiple modern resume templates**
* Easily switch between templates
* Professional designs optimized for hiring managers

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## AI Integration

* **Google Gemini API**

## Other Features

* Image Upload Handling
* Background Removal API
* RESTful API Architecture

---

# 📂 Project Structure

```
resume-builder/
│
├── frontend/                # React frontend
│   ├── components
│   ├── pages
│   ├── context
│   └── assets
│
├── backend/                 # Node + Express backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── utils
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## 3️⃣ Environment Variables

Create `.env` file in backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## 4️⃣ Run the Project

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
npm run dev
```

---

# 📸 Screenshots

(Add screenshots of your application here)

* Dashboard
* Resume Editor
* Resume Templates
* AI Resume Optimization

---

# 🌟 Future Improvements

* ATS Score Checker
* Resume PDF Export
* Cover Letter Generator
* Portfolio Integration
* Job Description Based Resume Generator
* Drag and Drop Resume Sections

---

# 👨‍💻 Author

**Ayush Surya**

BTech IT Student | MERN Stack Developer
Interested in **Full Stack Development, AI Integrations, and Scalable Web Applications**

---

# 📜 License

This project is open-source and available under the **MIT License**.
