# PeakFitness

> **Your journey to a healthier and stronger lifestyle starts here.**

PeakFitness is a full-stack fitness and wellness web application designed to help users improve their fitness journey through **exercise guidance, nutrition plans, fitness calculators, educational articles, and personalized fitness data**.

The platform provides an interactive and user-friendly experience for people who want to build healthier habits, understand their bodies, and make better fitness and nutrition decisions.

---

## Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Fitness Calculators](#-fitness-calculators)
- [Food Plans](#-food-plans)
- [Pro Tips](#-pro-tips)
- [Articles](#-articles)
- [Comments](#-comments)
- [Authentication & Authorization](#-authentication--authorization)
- [Admin Dashboard](#-admin-dashboard)
- [Main Pages](#-main-pages)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [How The System Works](#-how-the-system-works)
- [API Overview](#-api-overview)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running The Project](#-running-the-project)
- [Responsive Design](#-responsive-design)
- [User Experience](#-user-experience)
- [Future Improvements](#-future-improvements)
- [Social Impact](#-social-impact)
- [Contributors](#-contributors)
- [License](#-license)

---

## About The Project

PeakFitness was developed as a comprehensive fitness platform that combines **workouts, nutrition, body measurements, and educational content** in one place.

Instead of searching across multiple websites for workout exercises, nutrition information, and fitness calculations, users can access these features through a single platform.

### Project Goals

- Help users understand their fitness needs.
- Provide exercise instructions for different muscle groups.
- Help users calculate important body measurements.
- Provide nutrition plans based on fitness goals.
- Increase awareness about healthy lifestyles.
- Provide educational fitness and nutrition articles.
- Allow users to save useful articles.
- Create an interactive fitness community through comments.
- Provide administrators with tools to manage platform content.

---

## Features

### User Features

- User registration and login.
- Secure password hashing using bcrypt.
- JWT-based authentication.
- Logout functionality.
- Forgot password and password reset.
- User profile.
- Store personal fitness information.
- Save favorite articles.
- Like and unlike articles.
- Add comments.
- Edit personal comments.
- Delete personal comments.

### Exercise Features

PeakFitness provides exercises organized according to different muscle groups. Users can explore exercises and learn how to perform them correctly through instructional videos.

**Available exercise categories include:**

- Chest
- Biceps
- Triceps
- Shoulders
- Back
- Glutes
- Legs
- Calves
- Forearms
- And more

**Each exercise section can provide:**

- Exercise demonstrations.
- Front and side videos.
- Exercise information.
- Different exercise variations.
- Stretching exercises.
- Exercise-related guidance.

---

## Fitness Calculators

PeakFitness includes several calculators that help users understand their body and daily fitness needs.

| Calculator | Description |
|---|---|
| **BMI Calculator** | Calculates the user's Body Mass Index (BMI) based on height and weight. |
| **Body Fat Calculator** | Estimates body fat percentage using personal body measurements. |
| **Calorie Calculator** | Calculates estimated daily calorie requirements based on weight, height, age, and gender. |
| **Ideal Weight Calculator** | Provides an estimated ideal weight based on height. |

The user's fitness information can also be stored in the database for future access.

---

## 🥗 Food Plans

The Food Plans section provides nutrition guidance based on different fitness goals.

**Available plans include:**

- Weight Loss
- Muscle Gain
- Weight Gain

Each plan contains multiple sections that explain nutrition recommendations and provide useful information to help users work toward their selected goal.

---

## Pro Tips

The Pro Tips section provides practical fitness and lifestyle recommendations.

Tips are organized according to different fitness goals, including:

- Weight Loss
- Weight Gain
- Muscle Gain

The goal is to help users understand that achieving fitness results requires more than just exercise — it also depends on nutrition, consistency, recovery, and healthy habits.

---

## 📰 Articles

PeakFitness includes an educational Articles section covering topics related to:

- Fitness
- Exercise
- Nutrition
- Healthy lifestyle
- Training
- General wellness

**Users can:**

- Browse articles.
- Open detailed articles.
- Read structured article sections.
- Like articles.
- Save articles.
- Access saved articles from their profile.

**Articles contain:**

- Titles
- Descriptions
- Cover images
- Authors
- Paragraphs
- Section subtitles
- Images and captions
- Likes
- Publication dates

---

## 💬 Comments

The platform includes an interactive comments system.

**Authenticated users can:**

- Add comments.
- Edit their own comments.
- Delete their own comments.

Comments are stored in MongoDB and associated with the corresponding user. The home page also displays user comments through an interactive carousel.

---

## Authentication & Authorization

PeakFitness uses authentication to protect user-specific features.

**Authentication technologies:**

- JSON Web Tokens (JWT)
- bcrypt.js
- HTTP cookies
- Authentication middleware

The application supports two main roles:

- `user`
- `admin`

**Regular users can:**

- Manage their profile.
- Save articles.
- Like articles.
- Add and manage their comments.
- Store fitness information.

**Administrators can:**

- Access the admin dashboard.
- Manage users.
- Manage articles and platform content.

---

## Admin Dashboard

PeakFitness includes an Admin Dashboard for managing the platform.

The dashboard provides administrative functionality for managing users and content. Admin access is protected using an authorization middleware that checks the user's role.

---

## Main Pages

The application contains several main sections.

| Page | Description |
|---|---|
| Home | Introduction to PeakFitness and quick access to features |
| Exercises | Browse exercises by muscle group |
| Calculators | BMI, calories, body fat and ideal weight |
| Food Plans | Nutrition plans for different fitness goals |
| Pro Tips | Fitness and lifestyle tips |
| Articles | Educational fitness and nutrition content |
| Profile | User profile and personal information |
| Saved Articles | Articles saved by the user |
| About | Information about PeakFitness |
| Login / Sign Up | User authentication |
| Admin Dashboard | Administrative management |

---

## Technology Stack

### Frontend

- React 19
- Vite
- React Router
- React Bootstrap
- Bootstrap 5
- Axios
- React Icons
- Font Awesome
- GSAP
- Framer Motion
- Nuka Carousel
- React Player
- React Toastify
- PrimeReact
- Google Model Viewer

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js
- Cookie Parser
- CORS
- dotenv
- Nodemailer
- Joi
- ioredis

---

## Project Structure

```
PeakFitness2/
│
├── backend/
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── CalculationsMiddleware.js
│   │   ├── profileMiddleware.js
│   │   ├── tokenBlacklist.js
│   │   └── verifyAdmin.js
│   │
│   ├── routes/
│   │   ├── articles.js
│   │   ├── calculations.js
│   │   ├── comments.js
│   │   ├── profileRoutes.js
│   │   └── routes.js
│   │
│   ├── models.js
│   ├── app.js
│   ├── package.json
│   └── .env
│
└── project/
    ├── public/
    │   ├── Exercise/
    │   └── afi.glb
    │
    ├── src/
    │   ├── assets/
    │   ├── pages/
    │   │   ├── aboutFolder/
    │   │   ├── AdminDashboard.jsx
    │   │   ├── ArticlesList.jsx
    │   │   ├── ArticleDetail.jsx
    │   │   ├── Auth/
    │   │   ├── calcsFolder/
    │   │   ├── exercisesFolder/
    │   │   ├── FoodPlansFolder/
    │   │   ├── homeFolder/
    │   │   ├── proTipsFolder/
    │   │   └── user_pages/
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    │
    ├── public/
    ├── package.json
    └── vite.config.js
```

---

## How The System Works

PeakFitness follows a client-server architecture.

```
             ┌─────────────────────┐
             │        User         │
             └──────────┬──────────┘
                        │
                        ▼
             ┌─────────────────────┐
             │   React Frontend    │
             │       + Vite        │
             └──────────┬──────────┘
                        │
                     Axios
                        │
                        ▼
             ┌─────────────────────┐
             │   Express Backend   │
             │      REST API       │
             └──────────┬──────────┘
                        │
                        ▼
             ┌─────────────────────┐
             │      MongoDB        │
             │     + Mongoose      │
             └─────────────────────┘
```

The frontend handles the user interface and interactions, while the backend manages authentication, business logic, calculations, articles, comments, profiles, and database operations.

---

##  API Overview

The backend runs on port `5000` by default.

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/forgot-password
POST /api/auth/reset-password/:token
```

### Users

```
GET    /api/auth/users
GET    /api/auth/users/:id
DELETE /api/auth/users/:id
```

### Saved Articles

```
POST /api/auth/users/:id/saved-articles
```

### Fitness Data

```
GET    /api/calculations
POST   /api/calculations
PUT    /api/calculations/:id
DELETE /api/calculations/:id
```

### Comments

```
GET    /api/comments
POST   /api/comments
PUT    /api/comments/:id
DELETE /api/comments/:id
```

### Articles

```
GET    /api/article
GET    /api/article/:id
POST   /api/article
POST   /api/article/:id/like
DELETE /api/article/:id
```

The Articles API also provides endpoints for updating individual sections, paragraphs, images, cover images, descriptions, and authors.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd PeakFitness2
```

### 2. Install Frontend Dependencies

```bash
cd project
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

##  Environment Variables

Create a `.env` file inside the `backend` folder.

**Example:**

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> **Important:** Do not upload your real `.env` file or database credentials to GitHub. Instead, add `.env` to your `.gitignore`.

---

##  Running The Project

### Start the Backend

Inside the `backend` folder:

```bash
npm start
```

For development:

```bash
npm run dev
```

The backend will normally run on:

```
http://localhost:5000
```

### Start the Frontend

Inside the `project` folder:

```bash
npm run dev
```

Vite will normally run the application on:

```
http://localhost:5173
```

---

## 📱 Responsive Design

PeakFitness is designed to provide a responsive experience across different screen sizes. The interface uses:

- Bootstrap responsive grid
- React Bootstrap
- Custom CSS
- Responsive navigation
- Responsive cards
- Responsive exercise content
- Mobile-friendly layouts

---

## User Experience

The application focuses on providing an engaging and interactive experience through:

- Smooth animations.
- Interactive cards.
- Exercise videos.
- Fitness calculators.
- Image-based content.
- Article interactions.
- Toast notifications.
- Responsive layouts.
- 3D model visualization.
- Interactive carousels.

GSAP and Framer Motion are used to enhance animations and page transitions.

---

## Future Improvements

- Personalized workout plans.
- Personalized meal plans based on user data.
- Workout progress tracking.
- Exercise history.
- More specialized plans for users with specific conditions or injuries.
- Advanced admin content management.
- More fitness statistics and charts.
- Notifications and reminders.
- Social interaction between users.
- Deployment to a production environment.
- Improved security and API validation.
- Cloud-based media storage.

---

##  Social Impact

PeakFitness aims to contribute to a healthier lifestyle by making fitness and nutrition information easier to access.

The platform encourages users to:

- Exercise regularly.
- Understand their body measurements.
- Make better nutrition choices.
- Learn about healthy habits.
- Stay consistent with their fitness goals.

By combining exercise guidance, nutrition plans, calculators, and educational content, PeakFitness provides users with a centralized platform for improving their health and fitness awareness.

---

## 👥 Contributors

This project was developed as a collaborative graduation project.

**PeakFitness Team**

- Contributor 1
- Contributor 2
- Contributor 3
- Contributor 4
- Contributor 5
- Contributor 6
- Contributor 7

*Replace the names above with the actual team members and optionally add their GitHub profiles.*

---

## 📄 License

This project was developed for educational and graduation-project purposes.

---

<p align="center">
<b>PeakFitness</b><br>
Train smarter. Eat better. Live healthier.<br><br>
<i>The journey of a thousand miles begins with a single step.</i>
</p>
