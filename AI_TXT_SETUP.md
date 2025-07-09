# AI.txt System Documentation

## Overview

AI.txt is a file format that helps AI models and crawlers better understand and index your website content. This implementation provides comprehensive information about Aijolot's AI services and content structure following emerging best practices.

## What is AI.txt?

AI.txt is similar to robots.txt but specifically designed for AI models. It provides:
- **Site metadata** and structure information
- **Content guidelines** for AI interpretation
- **Section descriptions** with keywords and priorities
- **Company information** and expertise areas
- **AI model permissions** and usage guidelines
- **Content quality indicators** and freshness data

## Files Created

### Core AI.txt Files
- `src/app/ai.txt/route.ts` - AI.txt API route
- `src/lib/ai-txt.ts` - AI.txt generation utilities
- `src/app/api/ai-txt/update/route.ts` - Webhook for AI.txt updates

### Integration
- Updated `src/app/robots.txt/route.ts` - Added AI.txt reference

## Setup Instructions

### 1. Access

Your AI.txt file will be available at:
- `https://aijolot.ia/ai.txt`

### 2. Robots.txt Integration

The AI.txt file is automatically referenced in robots.txt:
```
AI: https://aijolot.ia/ai.txt
```

## AI.txt Content Structure

### Basic Site Information
```
Site-Name: Aijolot
Site-URL: https://aijolot.ia
Site-Description: Soluciones IA de próxima generación para eCommerce
Site-Language: es-ES
Site-Category: AI Technology, eCommerce Solutions, Business Intelligence
Site-Contact: info@aijolot.ia
```

### Content Guidelines
```
Content-Type: Business Website
Content-Focus: AI solutions, eCommerce optimization, business intelligence
Content-Audience: eCommerce businesses, marketing teams, product managers
Content-Purpose: Commercial, Educational, Informational
```

### Key Topics and Expertise
```
Topics: Artificial Intelligence, eCommerce, Marketing Automation, Business Intelligence
Expertise: Agentic AI, eCommerce Solutions, Marketing Analytics
Services: Agentic Commerce, Agentic Marketing, Agentic Product, Agentic Analytics & Ops
```

### Content Sections
Each page/section includes:
- **Path**: URL path
- **Description**: Clear description of content
- **Keywords**: Relevant keywords for AI understanding
- **Priority**: High/Medium/Low priority for indexing

Example:
```
Section: /servicios/agentic-commerce
  Description: Personal shopping AI, automated B2B orders, intelligent search solutions
  Keywords: AI shopping, eCommerce automation, B2B solutions, intelligent search
  Priority: High
```

### AI Model Permissions
```
AI-Model-Access: Allow
AI-Training-Data: Allow
AI-Summarization: Allow
AI-Translation: Allow
AI-Indexing: Allow
```

### Company Information
```
Company-Name: Aijolot
Company-Type: AI Technology Company
Company-Founded: 2024
Company-Location: Spain
Company-Industry: Artificial Intelligence, eCommerce Technology
```

### Content Quality Indicators
```
Content-Quality: High
Content-Accuracy: Verified
Content-Timeliness: Current
Content-Relevance: High for target audience
Content-Originality: Original content and insights
```

### Preferred AI Model Behavior
```
Tone: Professional, knowledgeable, approachable
Style: Clear, concise, technical when appropriate
Approach: Solution-focused, results-oriented
Perspective: Business-centric with technical depth
```

## Usage

### Manual AI.txt Update

To manually trigger an AI.txt update:

```typescript
import { generateAITxtContent } from '@/lib/ai-txt';

// Generate updated AI.txt content
const aiTxtContent = await generateAITxtContent();
```

### Webhook Integration

For external systems to trigger AI.txt updates:

```bash
# POST to webhook endpoint
curl -X POST https://aijolot.ia/api/ai-txt/update \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: your-webhook-secret" \
  -d '{
    "action": "regenerate"
  }'
```

### Custom Configuration

```typescript
import { updateAITxtConfig, addAITxtSection } from '@/lib/ai-txt';

// Update configuration
const newConfig = updateAITxtConfig({
  siteDescription: 'New description',
  topics: 'Updated topics list'
});

// Add new section
const newSection = {
  path: '/new-page',
  description: 'New page description',
  keywords: 'new, page, keywords',
  priority: 'Medium' as const
};

const configWithNewSection = addAITxtSection(newSection);
```

## Best Practices Implemented

### 1. Comprehensive Site Information
- ✅ Clear site description and purpose
- ✅ Target audience identification
- ✅ Content type and focus areas
- ✅ Company information and expertise

### 2. Structured Content Sections
- ✅ All major pages included
- ✅ Clear descriptions and keywords
- ✅ Priority levels for AI indexing
- ✅ Dynamic blog post inclusion

### 3. AI Model Guidelines
- ✅ Permission settings for AI usage
- ✅ Preferred tone and style
- ✅ Content quality indicators
- ✅ Specific instructions for AI models

### 4. Technical Information
- ✅ Sitemap and robots.txt references
- ✅ API endpoints
- ✅ Update frequency information
- ✅ Last modified timestamps

### 5. Business Context
- ✅ Company information
- ✅ Industry and expertise areas
- ✅ Key differentiators
- ✅ Contact information

## Benefits for AI Indexing

### 1. Better Understanding
- AI models get clear context about your business
- Proper categorization of content and services
- Understanding of target audience and purpose

### 2. Improved Search Results
- More accurate AI-generated summaries
- Better matching with user queries
- Improved content recommendations

### 3. Enhanced Discoverability
- AI models can better identify relevant content
- Improved classification in AI training data
- Better representation in AI-powered search

### 4. Brand Consistency
- Consistent messaging across AI interactions
- Proper company representation
- Accurate expertise attribution

## Monitoring and Maintenance

### Check AI.txt Status
```bash
curl https://aijolot.ia/ai.txt
```

### Webhook Endpoint Status
```bash
curl https://aijolot.ia/api/ai-txt/update
```

### Update Frequency
The AI.txt file is automatically updated when:
- New blog posts are published
- Site configuration changes
- Manual webhook triggers
- Regular maintenance updates

## AI Model Compliance

### Supported AI Models
- OpenAI GPT models
- Google Bard/Gemini
- Anthropic Claude
- Microsoft Copilot
- Meta LLaMA
- Other major AI crawlers

### Data Usage Permissions
- ✅ Training data usage allowed
- ✅ Summarization permitted
- ✅ Translation allowed
- ✅ Indexing authorized

### Content Guidelines
- Professional and accurate representation
- Business-focused content emphasis
- Technical depth when appropriate
- Solution-oriented approach

## Security and Privacy

### Data Protection
- ✅ GDPR compliance indicated
- ✅ Privacy policy referenced
- ✅ Data protection standards specified
- ✅ Contact information for data queries

### Webhook Security
- ✅ Secret-based authentication
- ✅ Input validation
- ✅ Error handling
- ✅ Logging for monitoring

## Future Enhancements

Potential improvements:
- AI model-specific instructions
- Dynamic content scoring
- Advanced analytics integration
- Multi-language AI.txt versions
- Real-time content freshness tracking

## Integration with Other Systems

### Sitemap Integration
- AI.txt sections automatically include sitemap pages
- Blog posts dynamically added to AI.txt
- Consistent priority and freshness indicators

### CMS Integration
- Webhook triggers for content updates
- Automatic section generation
- Content quality scoring

The AI.txt system provides comprehensive guidance for AI models to better understand and represent Aijolot's content and services across various AI-powered platforms and search systems.