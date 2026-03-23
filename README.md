# 🎬 Cloudinary Showcase — Video Upload & Management SaaS

A full-stack web application that allows users to upload, manage, and optimize videos using **Cloudinary**, with authentication via **Clerk**, and a scalable backend powered by **Next.js**, **Prisma**, and **PostgreSQL (Docker)**.

This project demonstrates real-world SaaS architecture, including authentication, media processing, database integration, and API-driven workflows.

---

## 🚀 Features

* 🔐 User authentication using **Clerk**
* 📤 Video upload to **Cloudinary**
* 📦 Store video metadata in **PostgreSQL**
* ⚡ API routes built with **Next.js App Router**
* 🐳 Database running in **Docker**
* 📊 Fetch and display uploaded videos dynamically
* 🎨 Responsive UI with **Tailwind CSS**
* 🧩 Modular architecture with reusable components

---

## 🧱 Tech Stack

**Frontend**

* Next.js 16 (App Router)
* React
* Tailwind CSS

**Backend**

* Next.js API Routes
* Prisma ORM
* PostgreSQL

**Infrastructure**

* Docker
* Cloudinary
* Clerk Authentication

---

## 📂 Project Structure

```
zipify/
│
├── app/                # Next.js routes and pages
│   ├── (app)/home
│   ├── social-share
│   ├── video-upload
│   └── api/
│
├── components/         # Reusable UI components
├── lib/                # Prisma client and utilities
├── prisma/             # Database schema
├── public/             # Static assets
├── types/              # TypeScript types
│
├── docker-compose.yml  # PostgreSQL container
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a file named:

```
.env.local
```

Add the following:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/zipify

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🐳 Running PostgreSQL with Docker

Start the database:

```
docker compose up -d
```

Verify containers:

```
docker ps
```

---

## 🛠️ Setup Instructions

Install dependencies:

```
npm install
```

Generate Prisma client:

```
npx prisma generate
```

Sync database schema:

```
npx prisma db push
```

Start development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Get all videos

```
GET /api/videos
```

Returns:

```
[
  {
    id,
    title,
    publicId,
    duration,
    createdAt
  }
]
```

---

## 📌 What This Project Demonstrates

* Full-stack application architecture
* REST API design
* Database integration with ORM
* Authentication and authorization
* Media storage and processing
* Dockerized services
* Production-ready project structure

---

## 🧪 Future Improvements

* Video compression and optimization
* Pagination and search
* Video analytics dashboard
* Background job processing
* File size comparison metrics
* Deployment to AWS / Vercel

---

## 👨‍💻 Author

**Aditya Tomar**

GitHub:
https://github.com/Adityatomar28

---

## ⭐ If you found this project useful

Give it a star on GitHub!
