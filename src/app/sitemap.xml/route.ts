import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aijolot.ia';

// Static pages configuration
const staticPages = [
  {
    url: '/',
    priority: 1.0,
    changefreq: 'weekly'
  },
  {
    url: '/about',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/contact',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/services',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    url: '/blog',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    url: '/ai-agent',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    url: '/how-we-start',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    url: '/privacy-policy',
    priority: 0.3,
    changefreq: 'yearly'
  },
  {
    url: '/terms-conditions',
    priority: 0.3,
    changefreq: 'yearly'
  },
  {
    url: '/cookie-policy',
    priority: 0.3,
    changefreq: 'yearly'
  },
  {
    url: '/servicios/agentic-analytics',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/servicios/agentic-commerce',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/servicios/agentic-marketing',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/servicios/agentic-product',
    priority: 0.8,
    changefreq: 'monthly'
  }
];

// Function to get blog posts from markdown files
async function getBlogPosts() {
  const blogPosts = [];
  const contentDir = path.join(process.cwd(), 'content/blog');
  
  try {
    // Check if blog directory exists
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      
      for (const file of files) {
        if (file.endsWith('.md')) {
          const fullPath = path.join(contentDir, file);
          const fileContent = fs.readFileSync(fullPath, 'utf8');
          const { data: frontmatter } = matter(fileContent);
          
          // Only include published posts
          if (frontmatter.published !== false) {
            const slug = file.replace('.md', '');
            const stats = fs.statSync(fullPath);
            
            blogPosts.push({
              url: `/blog/${slug}`,
              lastmod: frontmatter.date || stats.mtime.toISOString(),
              priority: 0.6,
              changefreq: 'monthly'
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error reading blog posts:', error);
  }
  
  return blogPosts;
}

// Function to generate sitemap XML
function generateSitemapXML(pages: any[]) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return xml;
}

export async function GET() {
  try {
    // Get dynamic blog posts
    const blogPosts = await getBlogPosts();
    
    // Combine static pages with dynamic blog posts
    const allPages = [
      ...staticPages.map(page => ({
        ...page,
        lastmod: new Date().toISOString()
      })),
      ...blogPosts
    ];
    
    // Sort by priority (descending) and then by URL
    allPages.sort((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }
      return a.url.localeCompare(b.url);
    });
    
    // Generate sitemap XML
    const sitemapXML = generateSitemapXML(allPages);
    
    return new NextResponse(sitemapXML, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, must-revalidate'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}