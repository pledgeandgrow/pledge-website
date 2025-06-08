# Production Environment Setup

## Required Environment Variables

When deploying to production, ensure the following environment variables are set in your Vercel project settings or other deployment platform:

### Google Maps Configuration
```
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
GOOGLE_PLACE_ID=your_google_place_id_here
```

### Email SMTP Configuration
```
SMTP_HOST=ssl0.ovh.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SMTP_FROM=your_from_email
```

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Sentry Error Tracking (Optional but recommended)
```
SENTRY_DSN=your_sentry_dsn
```

### Node Environment
```
NODE_ENV=production
```

## Setting Up in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each of the variables above with their corresponding values
4. Deploy your application to apply the changes

## Important Notes

- Never commit `.env` files containing sensitive information to your repository
- Ensure all API keys have appropriate restrictions (domain limitations, etc.)
- Regularly rotate credentials for security
- Use Vercel's encrypted environment variables for sensitive information
