import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In a production environment, you would use the Google Places API
    // This requires an API key and should be kept secure on the server side
    // Example API endpoint: https://maps.googleapis.com/maps/api/place/details/json
    
    // The Place ID for your business can be found in Google Maps or Google Business Profile
    const placeId = process.env.GOOGLE_PLACE_ID || 'your-place-id';
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    
    // Check if API key is available
    if (!apiKey) {
      console.warn('Google Maps API key is not configured');
      // Return sample data for development
      return NextResponse.json({ 
        reviews: sampleReviews,
        source: 'sample'
      });
    }
    
    // Make the API request to Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Google Places API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Extract and format the reviews
    const reviews = data.result?.reviews || [];
    
    return NextResponse.json({ 
      reviews,
      source: 'google'
    });
    
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return sample data in case of error
    return NextResponse.json({ 
      reviews: sampleReviews,
      source: 'sample',
      error: 'Failed to fetch reviews from Google'
    });
  }
}

// Sample reviews for development and fallback
const sampleReviews = [
  {
    author_name: "Jean Dupont",
    rating: 5,
    text: "Excellent travail! L'équipe de Pledge a complètement transformé notre présence en ligne. Notre nouveau site web est non seulement magnifique, mais il génère également beaucoup plus de leads pour notre entreprise.",
    time: 1714503600, // May 1, 2024
    profile_photo_url: "https://lh3.googleusercontent.com/a-/sample-photo-url-1"
  },
  {
    author_name: "Marie Lambert",
    rating: 5,
    text: "Je recommande vivement Pledge pour tout projet de développement web. Leur expertise technique et leur sens du design ont permis de créer un site qui dépasse toutes nos attentes. Très professionnels et à l'écoute.",
    time: 1712084400, // April 3, 2024
    profile_photo_url: "https://lh3.googleusercontent.com/a-/sample-photo-url-2"
  },
  {
    author_name: "Thomas Martin",
    rating: 4,
    text: "Très bonne expérience avec Pledge. L'équipe est réactive et professionnelle. Notre application mobile fonctionne parfaitement et les retours de nos utilisateurs sont excellents.",
    time: 1709492400, // March 4, 2024
    profile_photo_url: "https://lh3.googleusercontent.com/a-/sample-photo-url-3"
  },
  {
    author_name: "Sophie Dubois",
    rating: 5,
    text: "Un grand merci à toute l'équipe de Pledge pour leur excellent travail sur notre projet e-commerce. Le site est rapide, facile à utiliser et nos ventes ont augmenté de 35% depuis le lancement!",
    time: 1706900400, // February 3, 2024
    profile_photo_url: "https://lh3.googleusercontent.com/a-/sample-photo-url-4"
  },
  {
    author_name: "Pierre Moreau",
    rating: 5,
    text: "Pledge a développé une solution sur mesure pour notre entreprise qui a considérablement amélioré notre efficacité. Leur approche méthodique et leur communication claire ont rendu le processus très fluide.",
    time: 1704308400, // January 4, 2024
    profile_photo_url: "https://lh3.googleusercontent.com/a-/sample-photo-url-5"
  }
];
