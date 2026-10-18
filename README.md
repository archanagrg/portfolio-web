#Archana Gurung — Personal Portfolio

Welcome to my personal portfolio website! This project showcases my profile, skills, projects, and experience through a modern, responsive, and interactive web design.

Live Website: www.archanagrg.com.np

#Features
- Modern and clean user interface
- Responsive design for desktop, tablet, and mobile devices
- Interactive animations and smooth scrolling
- Personal introduction and profile section
- Skills and project showcase
- Reusable React components
- Lucide icons for a clean visual experience
- Optimized production build using Vite

#Tech Stack
- React — UI development
- TypeScript — Type-safe JavaScript
- Vite — Development server and build tool
- CSS — Styling and responsive layouts
- GSAP — Animations
- Lenis — Smooth scrolling
- Lucide React — Icons
- Git and GitHub — Version control and source code hosting
- GitHub Pages — Website hosting

#Getting Started
Follow these steps to run the project locally.

#Prerequisites
Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### 1. Clone the repository

```bash
git clone https://github.com/archanagrg/portfolio-web.git
```

### 2. Navigate to the project folder

```bash
cd portfolio-web
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Build for Production

To generate the production-ready website files, run:

```bash
npm run build
```

The production files are generated in the `docs/` directory for GitHub Pages deployment.

To preview the production build locally, run:

```bash
npm run preview
```

## 📁 Project Structure

```text
portfolio-web/
├── components/       # Reusable React components
├── docs/             # Production build for GitHub Pages
│   ├── assets/        # Optimized CSS and JavaScript
│   ├── image/         # Deployed website images
│   ├── CNAME          # Custom domain configuration
│   └── index.html     # Production entry point
├── public/            # Static public assets
├── utils/             # Utility functions
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
├── index.html         # HTML template
├── styles.css         # Global styles
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

#Deployment

This portfolio is deployed using GitHub Pages and uses a custom domain.

**Website:** [https://www.archanagrg.com.np](https://www.archanagrg.com.np)

To publish updates:

1. Make your changes to the source code.
2. Build the project using `npm run build`.
3. Review the changes and commit them to Git.
4. Push the changes to the `main` branch.
5. Confirm the deployment and check the live website.

The `docs/` directory contains the production files served by GitHub Pages.

#Security

- Do not commit API keys, passwords, tokens, or other secrets.
- Keep local environment files such as `.env` out of version control.
- Remember that variables embedded into a frontend build can be visible to website visitors.

#Author
Archana Gurung

- Portfolio: [archanagrg.com.np](https://www.archanagrg.com.np)
- GitHub: [@archanagrg](https://github.com/archanagrg)

