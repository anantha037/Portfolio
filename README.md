# Anantha Krishnan K. - Portfolio Website

A production-grade personal portfolio website for an AI/ML Engineer, built with React, Vite, Tailwind CSS, and Framer Motion. Featuring a dark futuristic glassmorphism aesthetic.

## Quick Start

To run this project locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## How to Update Content

- **Projects:** Open `src/data/projects.js` to add, remove, or edit project entries.
- **Skills:** Open `src/data/skills.js` to modify the skills and categories.
- **Experience:** Edit the `experiences` array directly inside `src/components/Experience.jsx`.
- **Contact Details:** Edit the `contactLinks` array inside `src/components/Contact.jsx`.

## How to Add a Resume PDF

1. Place your resume PDF inside the `public/` folder (e.g., `public/resume.pdf`).
2. Open `src/components/Hero.jsx` and change the "Download Resume" link `<motion.a href="#">` to `<motion.a href="/resume.pdf" download>`.
3. Do the same in `src/components/Contact.jsx` for the bottom CTA button.

## Deployment

This project is configured for direct deployment on **Vercel**. 
Simply link your GitHub repository to Vercel, and it will automatically detect the Vite framework and use the `vercel.json` provided for clean client-side routing.
