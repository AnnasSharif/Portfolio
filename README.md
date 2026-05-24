# 👨‍💻 Annas Sharif - Portfolio

> A modern, responsive portfolio website showcasing my work in software development, data science, and AI. Built with React, Vite, and modern web technologies.

**Live Portfolio:** [Portfolio Link](https://github.com/AnnasSharif/Portfolio)  
**GitHub Profile:** [@AnnasSharif](https://github.com/AnnasSharif)

---

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism UI with smooth animations
- 🌓 **Dark/Light Mode** - Theme toggle for comfortable viewing
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for instant load times
- 🎯 **Interactive Sections** - Smooth scrolling and animations
- 📧 **Contact Form** - Direct messaging with email notification
- 🔍 **SEO Optimized** - Meta tags and proper structure

---

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite 8
- CSS3 with Custom Properties
- React Icons

**Tools & Services:**
- GitHub (Version Control)
- Vercel (Deployment)
- ESLint (Code Quality)

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components (Hero, About, Skills, etc.)
│   ├── context/          # Theme context for dark/light mode
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/
│   └── images/          # Project screenshots and profile image
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

---

## 🚀 Featured Projects

### 1. **DocInsight AI** - RAG-Based Chatbot
- Upload PDF documents and ask questions about their content
- Uses Retrieval-Augmented Generation (RAG) with LLMs
- **Tech:** Python, Gradio, Groq API, PyPDF2
- **GitHub:** [View Project](https://github.com/AnnasSharif)

### 2. **ConceptBridge AI** - Educational Chatbot
- AI tutor for understanding DSA, OOP, and AI concepts
- Adjustable explanation depth with step-by-step guidance
- **Tech:** Python, Gradio, Groq API, Llama 3
- **GitHub:** [View Project](https://github.com/AnnasSharif)

### 3. **Air Quality Analysis** - Data Science Project
- Multi-variable environmental dataset analysis
- Interactive visualizations and predictive insights
- **Tech:** Python, Pandas, Data Visualization
- **GitHub:** [View Project](https://github.com/AnnasSharif)

---

## 📚 Skills

**Languages:** Python, JavaScript, HTML5, CSS3, SQL  
**Frontend:** React, Vite, CSS-in-JS  
**Data Science:** Pandas, Data Analysis, Visualization  
**AI/ML:** LLMs, RAG, Groq API  
**Tools:** Git, GitHub, VS Code, ESLint

---

## 🎯 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AnnasSharif/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

---

## 📧 Contact Form

The contact form allows visitors to reach out directly:
- **Email:** sharifannas92@gmail.com
- **Phone:** +92-317-6942548
- **Location:** Bahria Town, Lahore, Pakistan

When someone fills out the contact form, it opens their default email client with the message pre-filled. They can review and send from there.

### Future Enhancement
To enable automatic email delivery without opening the email client, consider integrating:
- [Web3Forms](https://web3forms.com/) - Free email service
- [EmailJS](https://www.emailjs.com/) - Simple email API
- [Formspree](https://formspree.io/) - Form backend

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with automatic CI/CD:

1. **Repository:** [AnnasSharif/Portfolio](https://github.com/AnnasSharif/Portfolio)
2. **Deployed:** [Live Site](https://github.com/AnnasSharif/Portfolio)
3. **Auto-Deploy:** On every push to the `main` branch

### To Deploy Your Own Version

1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Vercel will automatically build and deploy on every push

---

## 🎓 About Me

I'm a **Junior Software Developer** passionate about building intelligent applications. Currently pursuing a **BS in Data Science** at the University of the Punjab.

**Expertise:**
- Web development with React and modern JavaScript
- Data analysis with Python and Pandas
- AI/ML applications with LLMs
- Full-stack development

**Currently Learning:** Advanced AI architectures, system design, and cloud deployment

---

## 📊 GitHub Stats

![GitHub followers](https://img.shields.io/github/followers/AnnasSharif?style=social)  
[![GitHub](https://img.shields.io/badge/GitHub-AnnasSharif-black?logo=github)](https://github.com/AnnasSharif)

---

## 📄 License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 🔗 Connect With Me

- **Email:** [sharifannas92@gmail.com](mailto:sharifannas92@gmail.com)
- **GitHub:** [@AnnasSharif](https://github.com/AnnasSharif)
- **LinkedIn:** [Connect on LinkedIn](https://linkedin.com)

---

## 💡 Tips for Your Own Portfolio

1. **Customize Content** - Update the projects, skills, and information to match your background
2. **Add Your Logo** - Replace the favicon in the `public` folder
3. **Update Links** - Change social media and project links to your own
4. **Optimize Images** - Compress project screenshots for faster loading
5. **SEO** - Update meta tags in `index.html` with your information

---

**Last Updated:** May 2026  
**Built with ❤️ by [Annas Sharif](https://github.com/AnnasSharif)**
git remote add origin https://github.com/AnnasSharif/YOUR_REPO_NAME.git
git push -u origin main
```
*(Make sure to replace `YOUR_REPO_NAME` with your actual repository name)*

### Step 3: Update Vite Config
Open `vite.config.js` in your project and add the `base` property matching your repository name. 
For example, if your repo is named `portfolio`, change it to:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this line! Must start and end with a slash.
})
```

### Step 4: Deploy!
Run the following command in your terminal:
```bash
npm run deploy
```
This command will automatically build your project and push it to the `gh-pages` branch. 

### Step 5: Configure GitHub Settings
1. Go to your GitHub repository in the browser.
2. Click on **Settings** > **Pages** (on the left sidebar).
3. Under "Source", select **Deploy from a branch**.
4. Under "Branch", select **gh-pages** and click **Save**.
5. Wait a minute or two, and your portfolio will be live at `https://AnnasSharif.github.io/YOUR_REPO_NAME/`!

## 🛠️ Built With

* **React 19**
* **Vite**
* **Vanilla CSS** (Custom Design System)
* **React Icons**
* **React Router Dom**

---
*Built by Annas Sharif*
