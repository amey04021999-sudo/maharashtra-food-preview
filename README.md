# Maharashtra Food Spots — Preview

This is a minimal preview showing a responsive React front-end with Leaflet map and mock "local food spot" data (YouTube embeds). No backend or API keys are required for this preview.

How to run:
1. npm install
2. npm run dev
3. Open the URL printed by Vite (usually http://localhost:5173)

What you can try:
- Hover and click markers on the map.
- Click list items on the right to open the video modal.
- Resize the browser to see responsive behavior.

Notes and next steps:
- This is mock data. To produce real data from Marathi YouTubers:
  - Add a backend that queries the YouTube Data API (requires API key).
  - Extract place names, geocode them, and store lat/lng.
  - Use a POI API (Google Places / Foursquare / OSM Overpass) for "what to see nearby".
- If you want, I can:
  - Scaffold a complete repo with backend (Express), data fetching, and a refresh endpoint.
  - Or convert the map to an SVG/topojson district map of Maharashtra for district hover highlights.
  - Or provide a hosted demo link if you prefer (requires deploy).
