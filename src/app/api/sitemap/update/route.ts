import { NextRequest, NextResponse } from 'next/server';
import { pingSitemapUpdate } from '@/lib/sitemap';

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret for security
    const webhookSecret = process.env.SITEMAP_WEBHOOK_SECRET;
    const providedSecret = request.headers.get('x-webhook-secret');
    
    if (webhookSecret && providedSecret !== webhookSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const { action, slug, type } = body;
    
    console.log(`Sitemap update webhook triggered - Action: ${action}, Type: ${type}, Slug: ${slug}`);
    
    // Validate required fields
    if (!action || !type) {
      return NextResponse.json({ 
        error: 'Missing required fields: action, type' 
      }, { status: 400 });
    }
    
    // For blog posts, slug is required
    if (type === 'blog' && !slug) {
      return NextResponse.json({ 
        error: 'Missing required field: slug for blog posts' 
      }, { status: 400 });
    }
    
    // Valid actions: create, update, delete, publish, unpublish
    const validActions = ['create', 'update', 'delete', 'publish', 'unpublish'];
    if (!validActions.includes(action)) {
      return NextResponse.json({ 
        error: `Invalid action. Must be one of: ${validActions.join(', ')}` 
      }, { status: 400 });
    }
    
    // Valid types: blog, page
    const validTypes = ['blog', 'page'];
    if (!validTypes.includes(type)) {
      return NextResponse.json({ 
        error: `Invalid type. Must be one of: ${validTypes.join(', ')}` 
      }, { status: 400 });
    }
    
    // Log the sitemap update trigger
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Sitemap update triggered:`, {
      action,
      type,
      slug,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    });
    
    // Ping search engines about the sitemap update
    await pingSitemapUpdate();
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: `Sitemap updated successfully for ${type} ${action}`,
      timestamp,
      data: {
        action,
        type,
        slug
      }
    });
    
  } catch (error) {
    console.error('Error in sitemap update webhook:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

// Handle GET requests for webhook verification
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Sitemap update webhook endpoint',
    methods: ['POST'],
    description: 'Trigger sitemap updates when content changes',
    timestamp: new Date().toISOString()
  });
}