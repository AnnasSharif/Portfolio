# Annas Sharif - Software Developer Portfolio

Welcome to the source code for my professional portfolio website! This project is built using React and Vite, featuring a modern glassmorphism design, dark/light mode, and smooth animations.

## 🚀 Quick Start

To run this project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## 📧 How the Contact Form Works

Currently, the contact form uses a standard `mailto:` link. When a visitor fills out the form and clicks "Send Message", it will automatically open their default email application (like Outlook, Apple Mail, or Gmail) with your email address (`sharifannas92@gmail.com`), the subject, and the message body pre-filled.

**Want to receive emails directly without opening the user's email client?**
You can easily swap the `mailto:` method with a free service like [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/). 

*To use Web3Forms (Recommended & Free):*
1. Go to [Web3Forms](https://web3forms.com/) and get your free Access Key.
2. In `src/components/Contact.jsx`, change the `<form>` tag to:
   ```jsx
   <form action="https://api.web3forms.com/submit" method="POST" className="contact__form glass-card">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
     {/* Keep the rest of your inputs */}
   </form>
   ```

## 🌐 How to Deploy to GitHub Pages

I have already configured this project to make deploying to GitHub Pages incredibly easy. Follow these steps:

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and create a new repository (e.g., named `portfolio`).
2. Do not initialize it with a README, .gitignore, or license.

### Step 2: Push Your Code
Open your terminal in the portfolio folder and run:
```bash
git init
git add .
git commit -m "Initial commit - Portfolio release"
git branch -M main
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
