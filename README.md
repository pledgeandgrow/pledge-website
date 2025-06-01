# Pledge & Grow Website

A modern web platform for Pledge & Grow, built with Next.js, React, Tailwind CSS, and Supabase.

## 🚀 Features

- Responsive design optimized for all devices
- User authentication and profile management
- Project creation and management
- Contact form with email notifications
- Real-time chat functionality
- Analytics tracking
- Admin dashboard

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.1, React 19, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS, Lucide icons
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4
- **Error Tracking**: Sentry

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account
- Google Analytics account (for production)

## 🔧 Local Development

1. Clone the repository

```bash
git clone https://github.com/pledgeandgrow/pledge-website.git
cd pledge-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚢 Deployment

### Production Deployment on Vercel

1. Create a new project on [Vercel](https://vercel.com)

2. Connect your GitHub repository

3. Configure environment variables in the Vercel dashboard:
   - See `PRODUCTION_ENV_SETUP.md` for the complete list of required variables

4. Deploy the project

5. Set up custom domain and SSL certificate

### Post-Deployment Checklist

1. Verify all pages and functionality work correctly
2. Check analytics tracking is working
3. Test forms and email notifications
4. Verify authentication flows
5. Check mobile responsiveness

## 📚 Documentation

- `ANALYTICS_IMPLEMENTATION.md` - Guide for implementing analytics tracking
- `FORM_TESTING.md` - Test cases for all forms
- `BROWSER_TESTING.md` - Cross-browser and device testing guide
- `SECURITY_AUDIT.md` - Security audit report
- `PRODUCTION_ENV_SETUP.md` - Production environment configuration

## 🧪 Testing

Run tests with:

```bash
npm run test
# or
yarn test
```

## 🔒 Security

This project follows security best practices including:

- HTTPS enforcement
- Secure authentication flows
- Input validation and sanitization
- Security headers
- Regular dependency updates

See `SECURITY_AUDIT.md` for the complete security audit report.

## 📈 Performance

The website is optimized for performance with:

- Image optimization
- Code splitting
- Lazy loading
- Font optimization
- Caching strategies

## 📞 Support

For support or questions, please contact support@pledgeandgrow.com
