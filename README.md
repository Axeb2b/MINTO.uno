# Minto.uno - Premium DeFi Platform

A modern, production-ready DeFi platform built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium Glass-morphism Design** - Modern UI with smooth animations
- **Dark/Light Mode Toggle** - Seamless theme switching
- **Particle Background** - Interactive canvas-based particles
- **Animated Statistics** - Counter animations with scroll detection
- **Mobile Responsive** - Fully optimized for all devices
- **Smooth Scroll Animations** - Section animations on scroll
- **Hamburger Mobile Menu** - Animated navigation menu
- **SEO Optimized** - Meta tags and structured data
- **Performance Optimized** - Next.js 14 optimization

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Icons**: Lucide React & React Icons
- **Font**: Inter from Google Fonts

## 📁 Project Structure

```
minto-uno/
├── public/                 # Static files
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout with theme provider
│   │   ├── page.js         # Home page
│   │   ├── globals.css     # Global styles
│   │   └── loading.js      # Loading skeleton
│   ├── components/
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── Hero.js         # Hero section
│   │   ├── HowItWorks.js   # Process steps
│   │   ├── Products.js     # Products showcase
│   │   ├── FAQ.js          # FAQ accordion
│   │   ├── Footer.js       # Footer
│   │   ├── Particles.js    # Particle background
│   │   ├── StatsCounter.js # Animated stats
│   │   ├── ThemeToggle.js  # Theme switch button
│   │   ├── MobileMenu.js   # Mobile navigation
│   │   ├── AnimatedSection.js # Scroll animations
│   │   └── LoadingSkeleton.js  # Loading state
│   ├── context/
│   │   └── ThemeContext.js # Theme provider
│   ├── hooks/
│   │   └── useTheme.js     # Theme hook
│   │   └── useScroll.js    # Scroll hooks
│   └── utils/
│       └── constants.js    # Data and constants
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS config
├── next.config.js          # Next.js config
└── package.json            # Dependencies
```

## 🎨 Color Scheme

- **Primary**: Cyan (#06b6d4)
- **Secondary**: Blue (#3b82f6)
- **Background**: Dark (#0f172a)
- **Text**: Light (#e2e8f0)

## 🛠️ Installation

1. **Clone or extract the project**
```bash
cd minto-uno
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Manual Deployment
```bash
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Dark/Light Mode
- Toggle between themes with persistent storage
- Automatic system preference detection
- Smooth transitions

### Particle Background
- Canvas-based interactive particles
- Responsive to viewport size
- Fade in/out animations

### Animated Stats
- Counter animation on scroll
- Intersection Observer API
- Smooth transitions

### Mobile Menu
- Hamburger menu on mobile
- Smooth animations with Framer Motion
- Click outside to close

### SEO Optimization
- Meta tags and descriptions
- Open Graph protocol
- Twitter Card support
- Robots and viewport configuration

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js` colors section:
```js
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Modify Content
Edit `src/utils/constants.js` to update:
- Navigation links
- Statistics
- Steps
- Products
- FAQ
- Social links

### Add New Sections
1. Create component in `src/components/`
2. Import in `src/app/page.js`
3. Add to render

## 📱 Responsive Breakpoints

- Mobile: 0px - 640px (sm)
- Tablet: 641px - 1024px (md)
- Desktop: 1025px+ (lg)

## 🎨 Animation Classes

Available Tailwind animation classes:
- `animate-fade-in` - Fade in animation
- `animate-fade-up` - Fade up animation
- `animate-scale-in` - Scale in animation
- `animate-float` - Floating animation
- `animate-glow` - Glow effect
- `hover-lift` - Lift on hover
- `hover-glow` - Glow on hover

## ⚡ Performance Tips

1. **Image Optimization** - Use Next.js Image component
2. **Code Splitting** - Components are auto-split
3. **Lazy Loading** - Scroll animations are lazy
4. **CSS Purging** - Unused styles are removed

## 🔐 Security

- No API keys exposed
- CSP headers recommended
- Sanitized user input
- HTTPS recommended

## 📄 License

MIT License - Feel free to use for personal and commercial projects

## 🤝 Support

For issues or questions, contact: hello@minto.uno

## 🎉 Credits

Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion

---

**Happy Coding! 🚀**
