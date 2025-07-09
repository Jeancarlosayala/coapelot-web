# Sitemap System Documentation

## Overview

This system provides automated sitemap generation and updates following Google's best practices. It includes:

- **Static sitemap generation** for all pages
- **Dynamic sitemap updates** for blog posts
- **Webhook system** for automatic updates
- **Search engine pinging** to notify of changes
- **Robots.txt configuration**

## Files Created

### Core Sitemap Files
- `src/app/sitemap.ts` - Next.js sitemap function
- `src/app/sitemap.xml/route.ts` - XML sitemap API route
- `src/app/robots.txt/route.ts` - Robots.txt with sitemap and AI.txt references

### AI.txt Files
- `src/app/ai.txt/route.ts` - AI.txt API route for AI model indexing
- `src/lib/ai-txt.ts` - AI.txt generation utilities
- `src/app/api/ai-txt/update/route.ts` - Webhook for AI.txt updates

### Utilities and Webhooks
- `src/lib/sitemap.ts` - Sitemap generation utilities
- `src/lib/webhooks.ts` - Webhook trigger functions
- `src/lib/blog-manager.ts` - Blog post management with sitemap updates
- `src/app/api/sitemap/update/route.ts` - Webhook endpoint

### Configuration
- `.env.example` - Environment variables template

## Setup Instructions

### 1. Environment Variables

Add these to your `.env.local` file:

```bash
# Site configuration
NEXT_PUBLIC_SITE_URL=https://aijolot.ia

# Sitemap webhook security (generate a random secret)
SITEMAP_WEBHOOK_SECRET=your-random-secret-here
```

### 2. Sitemap Access

Your sitemap will be available at:
- `https://aijolot.ia/sitemap.xml` (XML format)
- `https://aijolot.ia/sitemap` (Next.js format)

### 3. Robots.txt

Your robots.txt will be available at:
- `https://aijolot.ia/robots.txt`

### 4. AI.txt

Your AI.txt file will be available at:
- `https://aijolot.ia/ai.txt`

This file provides comprehensive information for AI models to better understand and index your content.

## Usage

### Manual Sitemap Update

To manually trigger a sitemap update:

```typescript
import { triggerSitemapUpdate } from '@/lib/webhooks';

// Update sitemap after blog post creation
await triggerSitemapUpdate({
  action: 'create',
  type: 'blog',
  slug: 'my-new-blog-post'
});
```

### Blog Post Management

Use the blog manager for automatic sitemap updates:

```typescript
import { createBlogPostWithSitemap } from '@/lib/blog-manager';

// Create a new blog post with automatic sitemap update
const success = await createBlogPostWithSitemap('my-new-post', {
  title: 'My New Blog Post',
  description: 'This is my new blog post',
  date: new Date().toISOString(),
  author: 'Author Name',
  tags: ['ai', 'ecommerce'],
  published: true,
  content: 'Blog post content here...'
});
```

### Webhook Integration

For external systems to trigger sitemap updates:

```bash
# POST to webhook endpoint
curl -X POST https://aijolot.ia/api/sitemap/update \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: your-webhook-secret" \
  -d '{
    "action": "create",
    "type": "blog",
    "slug": "new-blog-post"
  }'
```

## Google Best Practices Implemented

### 1. XML Sitemap Standards
- ✅ Valid XML format
- ✅ UTF-8 encoding
- ✅ Proper namespace declarations
- ✅ All required fields (loc, lastmod, changefreq, priority)

### 2. Priority and Change Frequency
- **Homepage**: Priority 1.0, Weekly updates
- **Service Pages**: Priority 0.8, Monthly updates
- **Blog Posts**: Priority 0.6, Monthly updates
- **Legal Pages**: Priority 0.3, Yearly updates

### 3. URL Structure
- ✅ Absolute URLs with proper protocol
- ✅ Canonical URLs (no duplicates)
- ✅ Clean, descriptive URLs
- ✅ Proper encoding

### 4. Performance Optimizations
- ✅ Caching headers (1 hour cache)
- ✅ Efficient file reading
- ✅ Sorted by priority
- ✅ Only published content

### 5. Search Engine Notifications
- ✅ Automatic ping to Google and Bing
- ✅ Robots.txt sitemap reference
- ✅ Proper content-type headers

## Automatic Updates

The system automatically updates the sitemap when:

1. **Blog posts are created/updated/deleted**
2. **Posts are published/unpublished**
3. **New pages are added to the site**
4. **Manual webhook triggers**

## Monitoring

Check the webhook endpoint status:
```bash
curl https://aijolot.ia/api/sitemap/update
```

View current sitemap:
```bash
curl https://aijolot.ia/sitemap.xml
```

## Search Engine Submission

Submit your sitemap to search engines:

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to "Sitemaps" in the left sidebar
4. Add new sitemap: `https://aijolot.ia/sitemap.xml`

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Select your site
3. Go to "Sitemaps" section
4. Submit sitemap: `https://aijolot.ia/sitemap.xml`

## Troubleshooting

### Common Issues

1. **Sitemap not updating**: Check webhook secret configuration
2. **Missing pages**: Verify file structure and published status
3. **Webhook failures**: Check server logs and endpoint response
4. **Search engine pinging fails**: Verify NEXT_PUBLIC_SITE_URL is correct

### Debug Information

Check webhook logs:
```bash
# Check recent webhook calls
curl -H "x-webhook-secret: your-secret" https://aijolot.ia/api/sitemap/update
```

### Manual Regeneration

Force regenerate sitemap:
```typescript
import { schedulePeriodicSitemapUpdate } from '@/lib/webhooks';

// Trigger periodic update
await schedulePeriodicSitemapUpdate();
```

## Future Enhancements

Potential improvements:
- Image sitemap support
- Video sitemap support
- News sitemap for blog posts
- Sitemap index for large sites
- Database-backed sitemap management
- Advanced caching strategies

## Security Considerations

- ✅ Webhook secret validation
- ✅ Input validation and sanitization
- ✅ Rate limiting (implement as needed)
- ✅ HTTPS enforcement
- ✅ Proper error handling

The sitemap system is now ready and will automatically maintain an up-to-date sitemap as content changes!