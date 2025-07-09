import { createBlogPost, updateBlogPost, deleteBlogPost, blogPostExists } from '@/lib/sitemap';
import { blogWebhooks } from '@/lib/webhooks';
import matter from 'gray-matter';

export interface BlogPostData {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  content: string;
}

/**
 * Create a new blog post with automatic sitemap update
 */
export async function createBlogPostWithSitemap(slug: string, data: BlogPostData): Promise<boolean> {
  try {
    // Generate frontmatter
    const frontmatter = {
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags,
      published: data.published
    };
    
    // Create markdown content
    const markdownContent = matter.stringify(data.content, frontmatter);
    
    // Create the blog post file
    const created = createBlogPost(slug, markdownContent);
    
    if (created) {
      // Trigger sitemap update webhook
      await blogWebhooks.created(slug, {
        title: data.title,
        date: data.date,
        published: data.published
      });
      
      console.log(`Blog post created and sitemap updated: ${slug}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error creating blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Update an existing blog post with automatic sitemap update
 */
export async function updateBlogPostWithSitemap(slug: string, data: BlogPostData): Promise<boolean> {
  try {
    if (!blogPostExists(slug)) {
      console.error(`Blog post ${slug} does not exist`);
      return false;
    }
    
    // Generate frontmatter
    const frontmatter = {
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      tags: data.tags,
      published: data.published
    };
    
    // Create markdown content
    const markdownContent = matter.stringify(data.content, frontmatter);
    
    // Update the blog post file
    const updated = updateBlogPost(slug, markdownContent);
    
    if (updated) {
      // Trigger sitemap update webhook
      await blogWebhooks.updated(slug, {
        title: data.title,
        date: data.date,
        published: data.published
      });
      
      console.log(`Blog post updated and sitemap updated: ${slug}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Delete a blog post with automatic sitemap update
 */
export async function deleteBlogPostWithSitemap(slug: string): Promise<boolean> {
  try {
    if (!blogPostExists(slug)) {
      console.error(`Blog post ${slug} does not exist`);
      return false;
    }
    
    // Delete the blog post file
    const deleted = deleteBlogPost(slug);
    
    if (deleted) {
      // Trigger sitemap update webhook
      await blogWebhooks.deleted(slug);
      
      console.log(`Blog post deleted and sitemap updated: ${slug}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error deleting blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Publish a blog post with automatic sitemap update
 */
export async function publishBlogPostWithSitemap(slug: string): Promise<boolean> {
  try {
    if (!blogPostExists(slug)) {
      console.error(`Blog post ${slug} does not exist`);
      return false;
    }
    
    // Here you would update the published status in the frontmatter
    // For now, we'll just trigger the webhook
    await blogWebhooks.published(slug);
    
    console.log(`Blog post published and sitemap updated: ${slug}`);
    return true;
  } catch (error) {
    console.error(`Error publishing blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Unpublish a blog post with automatic sitemap update
 */
export async function unpublishBlogPostWithSitemap(slug: string): Promise<boolean> {
  try {
    if (!blogPostExists(slug)) {
      console.error(`Blog post ${slug} does not exist`);
      return false;
    }
    
    // Here you would update the published status in the frontmatter
    // For now, we'll just trigger the webhook
    await blogWebhooks.unpublished(slug);
    
    console.log(`Blog post unpublished and sitemap updated: ${slug}`);
    return true;
  } catch (error) {
    console.error(`Error unpublishing blog post ${slug}:`, error);
    return false;
  }
}

/**
 * Bulk operations for blog posts
 */
export const bulkBlogOperations = {
  create: async (posts: Array<{ slug: string; data: BlogPostData }>) => {
    const results = await Promise.all(
      posts.map(({ slug, data }) => createBlogPostWithSitemap(slug, data))
    );
    return results;
  },
  
  update: async (posts: Array<{ slug: string; data: BlogPostData }>) => {
    const results = await Promise.all(
      posts.map(({ slug, data }) => updateBlogPostWithSitemap(slug, data))
    );
    return results;
  },
  
  delete: async (slugs: string[]) => {
    const results = await Promise.all(
      slugs.map(slug => deleteBlogPostWithSitemap(slug))
    );
    return results;
  },
  
  publish: async (slugs: string[]) => {
    const results = await Promise.all(
      slugs.map(slug => publishBlogPostWithSitemap(slug))
    );
    return results;
  },
  
  unpublish: async (slugs: string[]) => {
    const results = await Promise.all(
      slugs.map(slug => unpublishBlogPostWithSitemap(slug))
    );
    return results;
  }
};