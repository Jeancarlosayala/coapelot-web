import { NextRequest, NextResponse } from 'next/server';
import { generateAITxtContent, updateAITxtConfig } from '@/lib/ai-txt';

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret for security
    const webhookSecret = process.env.SITEMAP_WEBHOOK_SECRET;
    const providedSecret = request.headers.get('x-webhook-secret');
    
    if (webhookSecret && providedSecret !== webhookSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const { action, config } = body;
    
    console.log(`AI.txt update webhook triggered - Action: ${action}`);
    
    // Validate required fields
    if (!action) {
      return NextResponse.json({ 
        error: 'Missing required field: action' 
      }, { status: 400 });
    }
    
    // Valid actions: update, regenerate
    const validActions = ['update', 'regenerate'];
    if (!validActions.includes(action)) {
      return NextResponse.json({ 
        error: `Invalid action. Must be one of: ${validActions.join(', ')}` 
      }, { status: 400 });
    }
    
    // Log the ai.txt update trigger
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] AI.txt update triggered:`, {
      action,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    });
    
    // Generate updated AI.txt content
    let updatedConfig;
    if (action === 'update' && config) {
      updatedConfig = updateAITxtConfig(config);
    }
    
    const aiTxtContent = await generateAITxtContent(updatedConfig);
    
    // Return success response with preview
    return NextResponse.json({
      success: true,
      message: `AI.txt ${action} completed successfully`,
      timestamp,
      preview: aiTxtContent.substring(0, 500) + '...',
      data: {
        action,
        contentLength: aiTxtContent.length,
        sectionsCount: (aiTxtContent.match(/Section:/g) || []).length
      }
    });
    
  } catch (error) {
    console.error('Error in AI.txt update webhook:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

// Handle GET requests for webhook verification
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'AI.txt update webhook endpoint',
    methods: ['POST'],
    description: 'Trigger AI.txt updates when content changes',
    timestamp: new Date().toISOString()
  });
}