# Admin Panel - Editable Details Summary

## 📋 Overview
This document outlines all editable fields available in the admin panel for each section of your portfolio.

---

## 1️⃣ About Manager
**File:** `AboutManager.jsx`
**Portfolio Component:** `About.jsx`

### Editable Fields:
- **Full Name** - Your full name (e.g., "Liann Gonzales")
- **Professional Title** - Your professional description (e.g., "IT professional and digital creative")
- **Location** - Your location (e.g., "Bulacan, Philippines")
- **Paragraph 1 (Introduction)** - Opening statement about yourself
- **Paragraph 2 (Professional Focus)** - Describe your professional interests and skills
- **Paragraph 3 (Creative Work & Experience)** - Describe your creative work and professional experience
- **Paragraph 4 (Aspirations & Philosophy)** - Your future aspirations and personal philosophy

---

## 2️⃣ Contact Manager
**File:** `ContactManager.jsx`
**Portfolio Component:** `Contact.jsx`

### Editable Fields:
- **Section Title** - Heading for contact section (e.g., "Contact Me")
- **Section Description** - Introductory text for contact section
- **Email** - Your email address
- **Email Label** - Display label for email link
- **GitHub URL** - Link to your GitHub profile
- **GitHub Label** - Display label for GitHub link
- **Behance URL** - Link to your Behance portfolio
- **Behance Label** - Display label for Behance link

---

## 3️⃣ Experience Manager
**File:** `ExperienceManager.jsx`
**Portfolio Component:** `Experience.jsx`

### Editable Fields (per experience entry):
- **Job Role / Position** - Your job title (e.g., "Freelance Graphic Designer")
- **Time Period** - When you worked there (e.g., "2021 – 2022")
- **Description** - Details about what you did in this role
- **Currently Working Here** - Checkbox to mark if currently active

### Features:
- ✅ Add new experiences
- ✏️ Edit existing experiences
- 🗑️ Delete experiences

---

## 4️⃣ Projects Manager
**File:** `ProjectsManager.jsx`
**Portfolio Component:** `Projects.jsx`

### Editable Fields (per project):
- **Project Title** - Name of the project
- **Description** - What the project is about
- **Project Link** - URL to the project (GitHub, Figma, live demo, etc.)
- **Image URL** - Link to project image/preview
- **Category** - Project type:
  - Information Technology (IT projects)
  - Graphic Design (Design projects)

### Features:
- ✅ Add new projects
- ✏️ Edit existing projects
- 🗑️ Delete projects
- 🏷️ Categorize by IT or Design

### Current Projects in Portfolio:
**Information Technology:**
1. Cherry Tomato App (Pomodoro)
2. Pepe the Frog Mini Game
3. TMC Website

**Graphic Design:**
1. JPSSITE ORG SHIRT
2. Logofolio

---

## 5️⃣ Tech Stack Manager
**File:** `TechStackManager.jsx`
**Portfolio Component:** `TechStack.jsx`

### Editable Fields (per skill):
- **Skill Name** - The skill/technology (e.g., "React", "Figma", "MySQL")
- **Category** - Type of skill:
  - Programming Language (HTML, JavaScript, Python, etc.)
  - Framework / Library (React, Node.js, etc.)
  - Database (MySQL, MongoDB, etc.)
  - Tool / Software (Figma, Git, etc.)
  - Other

### Features:
- ✅ Add new skills
- ✏️ Edit existing skills with category
- 🗑️ Delete skills
- 📊 Skills grouped by category

### Default Skills in Portfolio:
- **Languages:** HTML, CSS, JavaScript, Python, C++, Java
- **Frameworks:** React, Node.js
- **Databases:** MySQL
- **Tools:** Figma, Git & GitHub, UI/UX Design

---

## 📊 Data Structure
All data is stored in Supabase with the following tables:
- `about` - About section content
- `contact` - Contact information
- `experiences` - Work experience entries
- `projects` - Project portfolio items
- `skills` - Technical skills and technologies

---

## 🔒 Authentication
Admin panel requires Supabase authentication via `/login` page.
- Access: `http://localhost:3000/dashboard`
- Login: `http://localhost:3000/login`

---

## 📝 Notes
- All manager components support full CRUD (Create, Read, Update, Delete) operations
- Changes are saved to Supabase in real-time
- Portfolio components automatically pull from the Supabase database
- Edit functionality added to Experience, Projects, and Tech Stack managers
