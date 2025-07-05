# Blog Content Management

This folder contains all blog post content in Markdown format. Posts are automatically parsed and displayed on the `/blog` page and the home page blog section.

## Adding a New Blog Post

1. Create a new `.md` file in this directory
2. Use the following frontmatter format at the top of your file:

```markdown
---
title: "Your Blog Post Title"
summary: "A brief summary that appears in blog cards and meta descriptions"
date: "2024-03-25"
category: "Your Category"
author: "Author Name"
imageUrl: "/path/to/image.png"
imageHint: "Alt text for the image"
published: true
---

# Your Blog Post Title

Your markdown content goes here...

## Subheading

- List items
- More content
```

## Required Frontmatter Fields

- `title`: The main title of your blog post
- `summary`: Brief description for cards and SEO
- `date`: Publication date in YYYY-MM-DD format
- `category`: Category for filtering and organization
- `published`: Set to `false` to hide the post

## Optional Frontmatter Fields

- `author`: Author name (defaults to "Equipo Aijolot")
- `imageUrl`: Featured image path (defaults to "/aijolot_hero.png")
- `imageHint`: Alt text for accessibility

## File Naming Convention

Use kebab-case for filenames, which will become the URL slug:
- `my-awesome-post.md` → `/blog/my-awesome-post`

## Content Guidelines

1. **Use Markdown syntax** for formatting
2. **Include engaging headings** with `##` for better structure
3. **Add relevant images** to the `/public` folder and reference them
4. **Write compelling summaries** that encourage clicks
5. **Choose appropriate categories** for better organization

## Categories

Current categories include:
- Innovación
- Automatización
- Resultados
- Marketing

You can create new categories by simply using them in your frontmatter.

## Publishing Workflow

1. Add your `.md` file to this folder
2. Set `published: true` in frontmatter
3. The post will automatically appear on:
   - `/blog` page (all posts)
   - Home page blog section (3 most recent)
   - Individual post page at `/blog/your-slug`

## Development Notes

- Posts are sorted by date (newest first)
- Only posts with `published: true` are displayed
- The system falls back to default sample posts if no content files are found
- Images should be placed in `/public` and referenced with absolute paths (`/image.png`)

## Examples

See the existing `.md` files in this directory for formatting examples.