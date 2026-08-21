# Devika N — Portfolio

A responsive personal portfolio for **Devika N**, a Software Engineer specializing in C#/.NET, Golang, REST APIs, Azure, AWS, and cloud-native backend systems.

## Live Portfolio

[View Portfolio](https://devika-portfolio-zeta.vercel.app/)

## Features

- Responsive design for desktop, tablet, and mobile
- Active navigation highlighting based on the visible section
- About, skills, selected work, experience, toolkit, and credentials sections
- Downloadable résumé
- LinkedIn, Github and email contact links
- Production-focused project metrics and achievements
- Semantic HTML and accessible mobile navigation

## Built With

- React 18
- Vite 5
- JavaScript
- CSS3
- Lucide React icons

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/Devikan19/devika-portfolio.git
cd devika-portfolio
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files are stored in the `dist` directory.

## Project Structure

```text
devika-portfolio/
├── public/
│   └── Devika_N_Resume.pdf
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Portfolio Sections

- **About** — Professional summary and core engineering strengths
- **Work** — Robotics, documentation, authentication, and IoT platforms
- **Experience** — Role, responsibilities, and key achievements
- **Toolkit** — Languages, cloud platforms, databases, security, and development tools
- **Credentials** — Education and professional certifications
- **Contact** — Email, LinkedIn, Github, location, and availability

## Customization

Most portfolio content is stored directly in `src/App.jsx`. Update the following areas there:

- Personal introduction and contact information
- Skills and technologies
- Projects and impact metrics
- Work experience and achievements
- Education and certifications

Global styling and responsive rules are located in `src/styles.css`.

To replace the résumé, add the new PDF to `public/Devika_N_Resume.pdf` so the existing download button continues to work.

## Deployment

The portfolio can be deployed to services such as Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

Use these build settings:

```text
Build command: npm run build
Output directory: dist
```

## Contact

**Devika N**

- Email: [devika192002@gmail.com](mailto:devika192002@gmail.com)
- LinkedIn: [linkedin.com/in/devika-n-36511a238](https://linkedin.com/in/devika-n-36511a238)
- GitHub: [github.com/Devikan19](https://github.com/Devikan19)
- Location: Bengaluru, India

## Usage

This repository contains the source code for my personal portfolio website.
