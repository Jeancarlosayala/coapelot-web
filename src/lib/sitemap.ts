import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface SitemapPage {
  url: string;
  lastmod?: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  published: boolean;
  lastModified: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aijolot.ia';

// Static pages configuration
export const staticPages: SitemapPage[] = [
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

/**
 * Get all blog posts from markdown files
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogPosts: BlogPost[] = [];
  const contentDir = path.join(process.cwd(), 'content/blog');
  
  try {
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      
      for (const file of files) {
        if (file.endsWith('.md')) {
          const fullPath = path.join(contentDir, file);
          const fileContent = fs.readFileSync(fullPath, 'utf8');
          const { data: frontmatter } = matter(fileContent);
          const stats = fs.statSync(fullPath);
          
          const slug = file.replace('.md', '');
          
          blogPosts.push({
            slug,
            title: frontmatter.title || slug,
            date: frontmatter.date || stats.birthtime.toISOString(),
            published: frontmatter.published !== false,
            lastModified: frontmatter.date || stats.mtime.toISOString()
          });
        }
      }
    }
  } catch (error) {
    console.error('Error reading blog posts:', error);
  }
  
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get blog posts as sitemap pages
 */
export async function getBlogSitemapPages(): Promise<SitemapPage[]> {
  const blogPosts = await getBlogPosts();
  
  return blogPosts
    .filter(post => post.published)
    .map(post => ({
      url: `/blog/${post.slug}`,
      lastmod: post.lastModified,
      priority: 0.6,
      changefreq: 'monthly' as const
    }));
}

/**
 * Get all sitemap pages (static + blog)
 */
export async function getAllSitemapPages(): Promise<SitemapPage[]> {
  const blogPages = await getBlogSitemapPages();
  
  const allPages = [
    ...staticPages.map(page => ({
      ...page,
      lastmod: new Date().toISOString()
    })),
    ...blogPages
  ];
  
  // Sort by priority (descending) and then by URL
  allPages.sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    return a.url.localeCompare(b.url);
  });
  
  return allPages;
}

/**
 * Generate sitemap XML
 */
export function generateSitemapXML(pages: SitemapPage[]): string {
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

/**
 * Ping search engines to notify sitemap update
 */
export async function pingSitemapUpdate(): Promise<void> {
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  
  const searchEngines = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
  ];
  
  for (const url of searchEngines) {
    try {
      await fetch(url, { method: 'GET' });
      console.log(`Pinged: ${url}`);
    } catch (error) {
      console.error(`Failed to ping ${url}:`, error);
    }
  }
}

/**
 * Check if a blog post exists
 */
export function blogPostExists(slug: string): boolean {
  const contentDir = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(contentDir, `${slug}.md`);
  return fs.existsSync(filePath);
}

/**
 * Create a new blog post file
 */
export function createBlogPost(slug: string, content: string): boolean {
  try {
    const contentDir = path.join(process.cwd(), 'content/blog');
    
    // Ensure content directory exists
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }
    
    const filePath = path.join(contentDir, `${slug}.md`);
    fs.writeFileSync(filePath, content);
    
    console.log(`Created blog post: ${slug}`);
    return true;
  } catch (error) {
    console.error(`Error creating blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Update a blog post file
 */
export function updateBlogPost(slug: string, content: string): boolean {
  try {
    const contentDir = path.join(process.cwd(), 'content/blog');
    const filePath = path.join(contentDir, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`Blog post ${slug} does not exist`);
      return false;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated blog post: ${slug}`);
    return true;
  } catch (error) {
    console.error(`Error updating blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Delete a blog post file
 */
export function deleteBlogPost(slug: string): boolean {
  try {
    const contentDir = path.join(process.cwd(), 'content/blog');
    const filePath = path.join(contentDir, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      console.error(`Blog post ${slug} does not exist`);
      return false;
    }
    
    fs.unlinkSync(filePath);
    console.log(`Deleted blog post: ${slug}`);
    return true;
  } catch (error) {
    console.error(`Error deleting blog post ${slug}:`, error);
    return false;
  }
}