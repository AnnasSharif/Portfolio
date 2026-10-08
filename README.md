<div align="center">

# ✨ Annas Sharif — Developer Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**, featuring stunning glassmorphism design, smooth animations, and a dark-themed UI with vibrant gradient accents.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-8B5CF6?style=for-the-badge&logoColor=white)](https://annassharif.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-AnnasSharif-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AnnasSharif)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

<br />

**🔗 Live Website: [https://annassharif.github.io/Portfolio/](https://annassharif.github.io/Portfolio/)**

</div>

---

## 📸 Preview

<div align="center">

| Hero Section | Projects Showcase |
|:---:|:---:|
| Animated typewriter effect with floating orbs | Interactive slider with auto-rotation |

| About & Skills | Contact Form |
|:---:|:---:|
| Glassmorphism cards with scroll animations | Functional email form with mailto integration |

</div>

---

## 🚀 Features

- **🎨 Glassmorphism UI** — Frosted glass cards with backdrop blur and subtle borders
- **⌨️ Typewriter Animation** — Dynamic role cycling with realistic typing/deleting effect
- **🌀 Animated Background** — Floating gradient orbs and grid overlays for visual depth
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop viewports
- **🎯 Smooth Scrolling** — Section-based navigation with active link highlighting
- **🖼️ Project Showcase** — Interactive slider with auto-rotation, dot navigation, and grid cards
- **📩 Contact Form** — Functional form with mailto integration and success feedback
- **🔤 Custom Typography** — Google Fonts (Inter, Outfit, JetBrains Mono) for a premium feel
- **⚡ Fast Performance** — Powered by Vite for instant HMR and optimized builds
- **🌙 Dark Theme** — Sleek dark color scheme with vibrant purple/cyan accent gradients

---

## 🛠️ Tech Stack

| Category | Technologies |
|:---|:---|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Routing** | React Router DOM v7 |
| **Icons** | React Icons (Feather) |
| **Fonts** | Inter · Outfit · JetBrains Mono |
| **Email** | EmailJS |
| **Deployment** | GitHub Pages (`gh-pages`) |
| **Styling** | Vanilla CSS with custom properties |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── images/              # Project screenshots & profile photo
│   ├── favicon.svg          # Site favicon
│   └── icons.svg            # SVG icon sprites
├── src/
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx         # Hero section with typewriter effect
│   │   ├── Hero.css
│   │   ├── About.jsx        # About me with highlight cards
│   │   ├── About.css
│   │   ├── Skills.jsx       # Technical skills showcase
│   │   ├── Skills.css
│   │   ├── Projects.jsx     # Featured projects slider
│   │   ├── Projects.css
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Education.css
│   │   ├── Contact.jsx      # Contact form & info
│   │   ├── Contact.css
│   │   ├── Footer.jsx       # Site footer
│   │   └── Footer.css
│   ├── context/             # React context providers
│   ├── App.jsx              # Root application component
│   ├── App.css              # App-level styles
│   ├── index.css            # Global styles & design tokens
│   └── main.jsx             # Application entry point
├── index.html               # HTML template with SEO meta tags
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies & scripts
└── README.md
```

---

## 🚀 Featured Projects

### 1. **DocInsight AI** - RAG-Based Intelligent Chatbot
- Upload PDF documents and ask questions directly related to their contents
- Uses Retrieval-Augmented Generation (RAG) with high-speed LLMs
- **Tech:** Python, Gradio, Groq API, PyPDF2
- **GitHub:** [View Project](https://github.com/AnnasSharif)

### 2. **ConceptBridge AI** - Educational AI Mentor
- AI tutor for mastering DSA, OOP, and AI concepts step-by-step
- Adjustable explanation depth, automated logging, and context-aware guidance
- **Tech:** Python, Gradio, Groq API, Llama 3
- **GitHub:** [View Project](https://github.com/AnnasSharif)

### 3. **Air Quality Analysis** - Data Science & Environmental Modeling
- Multi-variable environmental dataset analysis and predictive insights
- Automated data cleaning, transformation, and interactive visualizations
- **Tech:** Python, Pandas, Data Visualization, Analytics
- **GitHub:** [View Project](https://github.com/AnnasSharif)

### 4. **Holy Grain** - Premium Bakery Web Platform
- High-end web experience designed for Holy Grain Manchester
- Smooth scrolling via Lenis & GSAP, fluid transitions with Framer Motion
- **Tech:** React, TypeScript, Tailwind CSS, GSAP, Framer Motion
- **GitHub:** [View Project](https://github.com/AnnasSharif/Holy-Grain)

---

## 📚 Technical Competencies

- **Backend & Languages:** Python, Django, Django REST Framework, JavaScript, TypeScript, SQL
- **AI & Machine Learning:** Machine Learning (Scikit-learn, NumPy), RAG Architecture, LLM Integrations (Groq, LLaMA), Pandas
- **Systems & Core CS:** Operating Systems (Process Scheduling, Memory Management, Concurrency), DSA, OOP, Linux / Shell
- **Frontend Engineering:** React 19, Vite, HTML5, CSS3, Tailwind CSS, GSAP, Framer Motion
- **DevOps & Tools:** Git, GitHub, VS Code, REST APIs, CI/CD with GitHub Pages

---

## 🎯 Quick Start

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AnnasSharif/Portfolio.git

# 2. Navigate to the project directory
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

### Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code analysis |
| `npm run deploy` | Build & deploy to GitHub Pages |

---

## 🚀 Deployment

This project is deployed to **GitHub Pages** using the `gh-pages` package.

```bash
# Deploy to GitHub Pages
npm run deploy
```

This runs `vite build` and publishes the `dist/` folder to the `gh-pages` branch automatically.

**Live URL:** [https://annassharif.github.io/Portfolio/](https://annassharif.github.io/Portfolio/)

---

## 🎨 Sections Overview

| Section | Description |
|:---|:---|
| **Hero** | Introduction with typewriter animation, profile image, animated orbs, and quick stats |
| **About** | Personal background, education details, and four highlight cards (Web Dev, Data Science, AI/ML, Learning) |
| **Skills** | Technical skills categorized with visual proficiency indicators |
| **Projects** | Interactive showcase slider featuring DocInsight-AI, ConceptBridge AI, Air Quality Analysis, and Holy Grain |
| **Education** | Academic timeline with institution details |
| **Contact** | Contact information cards and a functional message form |
| **Footer** | Quick navigation links, social connections, and copyright |

---

## 📬 Contact

<div align="center">

| Channel | Details |
|:---:|:---|
| 📧 **Email** | [annassharif.dev@gmail.com](mailto:annassharif.dev@gmail.com) |
| 🐙 **GitHub** | [github.com/AnnasSharif](https://github.com/AnnasSharif) |
| 📍 **Location** | Lahore, Pakistan |

</div>

---

<div align="center">

Made with ❤️ by **Annas Sharif**

© 2025 Annas Sharif. All rights reserved.

</div>
