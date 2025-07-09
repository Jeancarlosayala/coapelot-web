import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aijolot.ia'

// Static pages configuration
const staticPages = [
  {
    url: '/',
    priority: 1.0,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/about',
    priority: 0.8,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/contact',
    priority: 0.8,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/services',
    priority: 0.9,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/blog',
    priority: 0.8,
    changeFrequency: 'weekly' as const
  },
  {
    url: '/ai-agent',
    priority: 0.7,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/how-we-start',
    priority: 0.7,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/privacy-policy',
    priority: 0.3,
    changeFrequency: 'yearly' as const
  },
  {
    url: '/terms-conditions',
    priority: 0.3,
    changeFrequency: 'yearly' as const
  },
  {
    url: '/cookie-policy',
    priority: 0.3,
    changeFrequency: 'yearly' as const
  },
  {
    url: '/servicios/agentic-analytics',
    priority: 0.8,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/servicios/agentic-commerce',
    priority: 0.8,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/servicios/agentic-marketing',
    priority: 0.8,
    changeFrequency: 'monthly' as const
  },
  {
    url: '/servicios/agentic-product',
    priority: 0.8,
    changeFrequency: 'monthly' as const
  }
]

// Function to get blog posts from markdown files
async function getBlogPosts() {
  const blogPosts: any[] = []
  const contentDir = path.join(process.cwd(), 'content/blog')
  
  try {
    // Check if blog directory exists
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir)
      
      for (const file of files) {
        if (file.endsWith('.md')) {
          const fullPath = path.join(contentDir, file)
          const fileContent = fs.readFileSync(fullPath, 'utf8')
          const { data: frontmatter } = matter(fileContent)
          
          // Only include published posts
          if (frontmatter.published !== false) {
            const slug = file.replace('.md', '')
            const stats = fs.statSync(fullPath)
            
            blogPosts.push({
              url: `/blog/${slug}`,
              lastModified: new Date(frontmatter.date || stats.mtime),
              priority: 0.6,
              changeFrequency: 'monthly' as const
            })
          }
        }
      }
    }
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }
  
  return blogPosts
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Get dynamic blog posts
    const blogPosts = await getBlogPosts()
    
    // Combine static pages with dynamic blog posts
    const allPages = [
      ...staticPages.map(page => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority
      })),
      ...blogPosts.map(post => ({
        url: `${baseUrl}${post.url}`,
        lastModified: post.lastModified,
        changeFrequency: post.changeFrequency,
        priority: post.priority
      }))
    ]
    
    // Sort by priority (descending) and then by URL
    allPages.sort((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority
      }
      return a.url.localeCompare(b.url)
    })
    
    return allPages
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return []
  }
}