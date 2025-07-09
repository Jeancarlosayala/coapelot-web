import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aijolot.ia';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# AI.txt for AI model indexing
AI: ${baseUrl}/ai.txt

# Crawl delay (optional, adjust as needed)
Crawl-delay: 1

# Specific rules for different user agents
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Disallow certain paths if needed
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Allow social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Allow search console verification
Allow: /google*.html
Allow: /bing*.html
Allow: /yandex*.html

# Last modified: ${new Date().toISOString()}
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}