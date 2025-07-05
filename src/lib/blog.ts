import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageHint?: string;
  date: string;
  category: string;
  author?: string;
  content?: string;
  published?: boolean;
}

const BLOG_CONTENT_DIR = path.join(process.cwd(), 'content/blog');

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  try {
    // Check if blog directory exists
    if (!fs.existsSync(BLOG_CONTENT_DIR)) {
      console.warn('Blog content directory does not exist, returning fallback data');
      return getFallbackBlogPosts();
    }

    const files = fs.readdirSync(BLOG_CONTENT_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    if (mdFiles.length === 0) {
      console.warn('No markdown files found in blog directory, returning fallback data');
      return getFallbackBlogPosts();
    }

    const posts = mdFiles.map(filename => {
      const filePath = path.join(BLOG_CONTENT_DIR, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const slug = filename.replace('.md', '');

      return {
        slug,
        title: data.title || 'Untitled',
        summary: data.summary || data.description || 'No summary available',
        imageUrl: data.imageUrl || data.image || '/aijolot_hero.png',
        imageHint: data.imageHint || data.hint,
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category || 'General',
        author: data.author || 'Equipo Aijolot',
        content,
        published: data.published !== false, // Default to true unless explicitly false
      } as BlogPost;
    });

    // Filter published posts and sort by date (newest first)
    return posts
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  } catch (error) {
    console.error('Error reading blog posts:', error);
    return getFallbackBlogPosts();
  }
}

// Get a specific blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || 'Untitled',
      summary: data.summary || data.description || 'No summary available',
      imageUrl: data.imageUrl || data.image || '/aijolot_hero.png',
      imageHint: data.imageHint || data.hint,
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || 'General',
      author: data.author || 'Equipo Aijolot',
      content,
      published: data.published !== false,
    } as BlogPost;

  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

// Get recent blog posts for home page
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  return allPosts.slice(0, limit);
}

// Fallback blog posts (original static data)
function getFallbackBlogPosts(): BlogPost[] {
  return [
    {
      slug: "ia-transformando-ecommerce-2024",
      title: "Cómo la IA está transformando el eCommerce en 2024",
      summary: "Descubre las últimas tendencias en inteligencia artificial y cómo están revolucionando la experiencia de compra online.",
      imageUrl: "/aijolot_hero.png",
      imageHint: "AI transforming ecommerce",
      date: "15 Mar 2024",
      category: "Innovación",
      author: "Equipo Aijolot"
    },
    {
      slug: "chatbots-inteligentes-soporte-cliente",
      title: "Chatbots Inteligentes: El Futuro del Soporte al Cliente",
      summary: "Aprende cómo los chatbots con IA generativa están mejorando la satisfacción del cliente y reduciendo costos operativos.",
      imageUrl: "/support_aijolot.png",
      imageHint: "AI chatbot customer support",
      date: "10 Mar 2024",
      category: "Automatización",
      author: "Equipo Aijolot"
    },
    {
      slug: "optimizacion-conversiones-ia",
      title: "Optimización de Conversiones con IA: Casos de Éxito",
      summary: "Conoce casos reales de empresas que han aumentado sus conversiones hasta un 28% usando inteligencia artificial.",
      imageUrl: "/conversion_aijolot.png",
      imageHint: "AI conversion optimization",
      date: "5 Mar 2024",
      category: "Resultados",
      author: "Equipo Aijolot"
    }
  ];
}

// Get all unique categories
export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = posts.map(post => post.category);
  return Array.from(new Set(categories)).sort();
}

// Get posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}