# IMA India Website

A modern, responsive website for the Indian Medical Association (IMA) built with Next.js, featuring a professional design and comprehensive information for medical professionals.

![IMA India](https://img.shields.io/badge/IMA-India-green)
![Next.js](https://img.shields.io/badge/Next.js-15.5.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-cyan)

## 🏥 About

The Indian Medical Association (IMA) is India's premier medical association dedicated to advancing healthcare, supporting medical professionals, and improving patient care across the nation. This website serves as the official digital presence for IMA, providing information about:

- Medical news and updates
- Professional announcements
- Upcoming events and conferences
- Membership services
- Educational resources
- Office bearers information

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Hero Slider**: Dynamic image carousel with auto-play functionality
- **News Section**: Scrollable cards displaying latest medical news
- **Announcements**: Important updates and policy changes
- **Events**: Upcoming medical conferences and workshops
- **Member Services**: Access to IMA membership benefits and database
- **Office Bearers**: Current leadership information
- **Modern UI**: Clean, professional design with emerald theme
- **SEO Optimized**: Built-in SEO best practices
- **Performance**: Optimized for fast loading with Next.js

## 🛠️ Technology Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/)
- **React**: [React 19.1.0](https://reactjs.org/)
- **Icons**: Custom SVG icons
- **Images**: Next.js Image optimization
- **Fonts**: Geist font family
- **Build Tool**: Turbopack (Next.js 15 default)

## 📁 Project Structure

```
ima-web/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   └── HeroSlider.tsx  # Hero slider component
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
│   ├── imalogo.png         # IMA logo
│   ├── slider1.jpg         # Hero slider images
│   └── slider2.jpg
├── package.json            # Dependencies
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🏃‍♂️ Quick Start

### Prerequisites

- **Node.js**: 18.0 or later
- **npm**: 9.0 or later (or yarn/pnpm/bun)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ima-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🚀 Production Deployment

### Build Commands

```bash
# Install dependencies
npm ci --production

# Build the application
npm run build

# Start production server
npm run start
```

### Environment Configuration

Create environment files for different stages:

```bash
# .env.local (development)
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development

# .env.production (production)
NEXT_PUBLIC_API_URL=https://your-domain.com
NODE_ENV=production
```

### �� Deployment Platforms

#### 1. Vercel (Recommended)

**One-click deployment:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ima-web)

**Manual deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

#### 2. Netlify

```bash
# Build command
npm run build

# Publish directory
out (if using static export) or .next
```

**Netlify configuration (`netlify.toml`):**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3. AWS Amplify

```bash
# Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

#### 4. Docker Deployment

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Docker commands:**
```bash
# Build Docker image
docker build -t ima-web .

# Run container
docker run -p 3000:3000 ima-web

# Docker Compose
docker-compose up -d
```

#### 5. GitHub Pages (Static Export)

**next.config.ts for static export:**
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

**GitHub Actions workflow:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

#### 6. Traditional Web Server (Apache/Nginx)

**Build for static hosting:**
```bash
# Configure next.config.ts for static export
npm run build

# Copy the 'out' directory to web server
cp -r out/* /var/www/html/
```

**Nginx configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

### 🔧 Production Optimization

#### Performance Optimizations

```bash
# Enable compression
npm install compression

# Bundle analyzer
npm install @next/bundle-analyzer
```

#### Security Headers

**next.config.ts:**
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}
```

#### Environment Variables

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=GA-XXXXX-X (Google Analytics)
```

## 🔍 SEO & Analytics

- **Meta Tags**: Configured for social media sharing
- **Open Graph**: Facebook and LinkedIn optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine directives

## 🎨 Customization

### Theme Colors

The website uses a professional emerald color palette:
- Primary: Emerald (emerald-500 to emerald-800)
- Secondary: Green (green-500 to green-700)
- Accent: Teal (teal-400 to teal-600)

### Modifying Content

1. **Hero Slider**: Edit `slides` array in `app/page.tsx`
2. **News/Announcements**: Update card data in respective sections
3. **Office Bearers**: Modify the office bearers section
4. **Contact Information**: Update header contact details

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For technical support or questions:

- **Email**: hsg@ima-india.org
- **Phone**: +91-11-23370009
- **Website**: [https://www.ima-india.org](https://www.ima-india.org)

## 🏆 Acknowledgments

- Indian Medical Association for project requirements
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- All contributors who helped build this website

---

**© 2020 Indian Medical Association. All Rights Reserved.**

*Built with ❤️ for the medical community of India*
