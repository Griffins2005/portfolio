# Griffins Kiptanui Lelgut - Portfolio

A modern, accessible, and beautiful portfolio website showcasing my journey as a Data Science and Full-Stack Development student at Cornell University.

## 🌟 Features

- **Modern Design**: Built with Next.js 15, React 19, and Tailwind CSS 4
- **Smooth Animations**: Powered by Framer Motion for delightful user experiences
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Accessibility First**: ARIA labels, keyboard navigation, and high color contrast
- **Dark Mode Ready**: Beautiful color schemes for both light and dark preferences
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Comprehensive meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Griffins2005/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `.next`

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── public/                  # Static assets
├── node_modules/            # Dependencies
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # You are here!
```

## 🎨 Sections

1. **Hero**: Dynamic introduction with social links
2. **About**: Background, values, and core competencies
3. **Experience**: Professional timeline with key achievements
4. **Projects**: Featured work in Data Science, Full-Stack, and UX/UI
5. **Skills**: Technical stack and certifications
6. **Contact**: Get in touch section with social profiles

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for all interactive elements
- Keyboard navigation support
- High contrast color schemes
- Focus indicators for keyboard users
- Screen reader friendly content
- Alt text for all images and icons

## 🎯 Performance

- Optimized bundle size
- Lazy loading for images
- Server-side rendering (SSR)
- Static generation where possible
- Code splitting
- Fast page transitions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint (if configured)

### Customization

To customize this portfolio for your own use:

1. Update personal information in `app/page.tsx`
2. Modify colors in `app/globals.css` (currently using dark red minimalist theme)
3. Add your own projects and experience
4. Replace social media links
5. Update metadata in `app/layout.tsx`

### Color Theme

The portfolio uses a minimalist color scheme with strong contrast:
- **Primary**: Dark red (`#991b1b`, `#7f1d1d`) - Bold yet professional
- **Accent**: Red tones (`#dc2626`, `#ef4444`) - Clean emphasis
- **Neutrals**: Pure grays and white - Maximum clarity and readability
- **Design Philosophy**: Minimalist approach with high contrast, focusing on content over decoration

## 📝 License

This project is open source and available for personal use.

## 📧 Contact

**Griffins Kiptanui Lelgut**
- Email: [gkl39@cornell.edu](mailto:gkl39@cornell.edu)
- LinkedIn: [linkedin.com/in/griffins-kiptanui-374a1a277](https://www.linkedin.com/in/griffins-kiptanui-374a1a277/)
- GitHub: [github.com/Griffins2005](https://github.com/Griffins2005)

---

Built with ❤️ from Ithaca, NY | © 2025 Griffins Kiptanui Lelgut
