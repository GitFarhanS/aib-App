# SynShaikh - Enterprise AI Platform

A modern, responsive web application showcasing enterprise AI solutions with secure, on-premises deployment capabilities. Built with React, Tailwind CSS, and Vite.

## 🌟 Features

### Core Features

- **On-Premises Deployment** - Keep your data within your infrastructure
- **Custom Model Training** - Train AI models on your proprietary data
- **Full Data Privacy** - Zero data leakage with complete control
- **Enterprise Performance** - High-throughput, low-latency inference

### Technical Features

- **Multi-page Application** - Home, About, and Estimate pages
- **Interactive Cost Calculator** - Real-time pricing estimates
- **Responsive Design** - Works on all devices
- **Modern UI/UX** - Beautiful gradients and animations
- **Professional Branding** - Custom logos and consistent design

## 🚀 Pages

### Home Page (`/`)

- Hero section with animated background
- Feature showcase with custom icons
- How it works process
- Client testimonials
- Contact form

### About Page (`/about`)

- Company mission and values
- Team profiles
- Company statistics
- Contact information

### Estimate Page (`/estimate`)

- Interactive cost calculator
- Pricing tiers
- Detailed quote request form
- Real-time cost estimation

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: Vite 7.0.3
- **Routing**: React Router DOM
- **Icons**: Custom PNG assets
- **Animations**: CSS animations and transitions

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GitFarhanS/aib-App.git
   cd aib-App
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Start the development server**

   ```bash
   npm run dev
   ```
4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
aib-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── locked.png      # Security icon
│   │   ├── shield.png      # Privacy icon
│   │   ├── wrench.png      # Custom training icon
│   │   ├── flash.png       # Performance icon
│   │   └── react.svg
│   ├── App.jsx             # Main app with routing
│   ├── About.jsx           # About page component
│   ├── Estimate.jsx        # Estimate page component
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (`from-blue-600 to-indigo-600`)
- **Secondary**: Purple accents
- **Background**: Light gray (`bg-gray-50`)
- **Text**: Dark gray (`text-gray-900`)

### Components

- **Cards**: White background with shadow and hover effects
- **Buttons**: Gradient primary buttons and outlined secondary buttons
- **Forms**: Clean input fields with focus states
- **Navigation**: Glass effect with backdrop blur

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/`
2. Add the route in `App.jsx`
3. Update navigation links

### Modifying Styles

- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `@layer` sections in `index.css`

### Updating Content

- Text content is in the component files
- Images are in `src/assets/`
- Icons can be replaced in the assets folder

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms

The built application can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Farhan Shaikh** - [GitHub](https://github.com/GitFarhanS) | [LinkedIn](https://linkedin.com/in/farhanshaikh18) | [Website](https://farhanshaikh.uk)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons designed for enterprise AI solutions
- Inspired by modern SaaS landing pages

---

**SynShaikh** - Enterprise AI Made Simple
