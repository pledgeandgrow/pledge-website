# Analytics Implementation Guide

This guide explains how to implement and use analytics tracking throughout the Pledge & Grow website.

## Setup

The website uses Google Analytics 4 (GA4) for tracking user interactions and page views. The implementation consists of:

1. **Google Analytics Component**: Loads the GA4 tracking script and handles page view tracking
2. **Analytics Provider**: Provides analytics context throughout the application
3. **Analytics Utility**: Contains helper functions for tracking different types of events
4. **useAnalytics Hook**: React hook for easy access to tracking functions in components

## Environment Variables

Make sure the following environment variable is set in your `.env.local` file:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Google Analytics measurement ID.

## How to Track Events

### Page Views

Page views are automatically tracked when using the `useAnalytics` hook in your components. The hook uses Next.js's `usePathname` and `useSearchParams` to detect route changes and track page views.

### Button Clicks

```tsx
import { useAnalytics } from "@/hooks/useAnalytics";

export function MyComponent() {
  const { trackButtonClick } = useAnalytics();
  
  return (
    <button 
      onClick={() => {
        trackButtonClick('signup_button', 'homepage');
        // Your click handler logic
      }}
    >
      Sign Up
    </button>
  );
}
```

Alternatively, use the higher-order component for buttons:

```tsx
import { withButtonTracking } from "@/hooks/useAnalytics";
import { Button } from "@/components/ui/button";

const TrackableButton = withButtonTracking(Button, 'signup_button', 'homepage');

export function MyComponent() {
  return (
    <TrackableButton onClick={yourHandler}>
      Sign Up
    </TrackableButton>
  );
}
```

### Form Submissions

```tsx
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventCategory, EventAction } from "@/lib/analytics";

export function MyForm() {
  const { trackEvent, trackFormSubmission } = useAnalytics();
  
  async function handleSubmit(values) {
    // Track form submission attempt
    trackEvent(EventCategory.FORM, EventAction.FORM_SUBMIT, 'contact_form');
    
    try {
      // Submit form logic
      await submitForm(values);
      
      // Track successful submission
      trackFormSubmission('contact_form', true);
    } catch (error) {
      // Track failed submission
      trackFormSubmission('contact_form', false, error.message);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

Alternatively, use the higher-order component for forms:

```tsx
import { withFormTracking } from "@/hooks/useAnalytics";

const TrackableForm = withFormTracking(YourFormComponent, 'contact_form');

export function MyComponent() {
  return <TrackableForm />;
}
```

### Authentication Events

```tsx
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventAction } from "@/lib/analytics";

export function LoginComponent() {
  const { trackAuth } = useAnalytics();
  
  async function handleLogin(credentials) {
    try {
      await login(credentials);
      trackAuth(EventAction.LOGIN, 'email');
    } catch (error) {
      // Handle error
    }
  }
  
  return (
    <form onSubmit={handleLogin}>
      {/* Login form fields */}
    </form>
  );
}
```

### Feature Usage

```tsx
import { useAnalytics } from "@/hooks/useAnalytics";

export function FeatureComponent() {
  const { trackFeatureUse } = useAnalytics();
  
  function handleFeatureUse() {
    trackFeatureUse('dark_mode_toggle', 'enabled');
    // Feature logic
  }
  
  return (
    <button onClick={handleFeatureUse}>
      Toggle Dark Mode
    </button>
  );
}
```

## Event Categories and Actions

### Categories

- `engagement`: User interactions with the site (clicks, scrolls, etc.)
- `conversion`: Actions that lead to business goals (sign-ups, purchases, etc.)
- `navigation`: Page views and navigation between pages
- `form`: Form interactions (starts, submissions, errors)
- `authentication`: Authentication-related events (sign-up, login, logout)
- `feature`: Feature usage events

### Actions

#### Navigation
- `page_view`: User views a page
- `click`: User clicks on an element
- `scroll`: User scrolls the page

#### Form
- `form_start`: User starts filling out a form
- `form_submit`: User submits a form
- `form_error`: Form submission results in an error
- `form_success`: Form submission is successful

#### Authentication
- `sign_up`: User creates a new account
- `login`: User logs in
- `logout`: User logs out
- `password_reset`: User resets their password

#### Feature
- `feature_use`: User uses a specific feature

#### Conversion
- `contact_request`: User submits a contact form
- `project_start`: User starts a new project

## Best Practices

1. **Be Consistent**: Use the same event names and parameters across similar components
2. **Be Descriptive**: Use clear and descriptive event names and labels
3. **Don't Over-Track**: Only track meaningful events that provide actionable insights
4. **Respect Privacy**: Don't track personally identifiable information (PII)
5. **Test Your Tracking**: Verify that events are being sent correctly using the GA4 DebugView

## Testing Analytics Implementation

To verify that your analytics implementation is working correctly:

1. Enable GA4 DebugView in Google Analytics
2. Add `?debug_mode=1` to your local development URL
3. Interact with the tracked elements and check that events appear in DebugView
4. Verify that all expected parameters are included in the events

## Common Issues and Troubleshooting

- **Events not showing up**: Make sure the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable is set correctly
- **Duplicate events**: Check that you're not tracking the same event multiple times
- **Missing parameters**: Verify that all required parameters are included in the event
- **Console errors**: Check the browser console for any errors related to analytics
