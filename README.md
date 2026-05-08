# bethel-radio-redirect-resolver

**Bethel Radio Redirect Resolver - Serverless Proxy API**

A lightweight serverless function designed to resolve HTTP redirects server-side. This utility was built specifically for the Bethel Radio Brandon web player to overcome CORS restrictions when fetching dynamically redirected artwork URLs.
The Problem
Many media APIs and CDNs use redirect chains (302/301 responses) to serve content from optimized CDN locations. When a browser-based web app tries to follow these redirects directly, it often encounters CORS (Cross-Origin Resource Sharing) errors, preventing the app from accessing the final resolved URL.
The Solution
This serverless function acts as a proxy that:
1. Accepts any URL as a query parameter
2. Performs a server-side fetch with redirect: 'follow'
3. Follows all redirects internally
4. Returns the final resolved URL in JSON format
Example Usage
// Request
GET /api/resolve?url=https://artwork.rcast.net/73642
// Response
{
  "finalUrl": "https://cdn.rcast.net/cache/artists/eb18ba662d172903c7a9f5886fedf5e9.png"
}

**Tech Stack**
- Node.js
- Vercel Serverless Functions
- Native fetch API with redirect following
Use Cases
- Resolving redirected media URLs
- Bypassing CORS restrictions for image CDN URLs
- Extracting final URLs from redirect chains
- Proxy service for web applications with restricted client-side fetch

**Deployment
Deployed on Vercel's edge network for global low-latency access. 
Can be deployed to any Node.js-compatible serverless platform.
