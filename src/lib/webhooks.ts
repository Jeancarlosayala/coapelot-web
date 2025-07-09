interface WebhookPayload {
  action: 'create' | 'update' | 'delete' | 'publish' | 'unpublish';
  type: 'blog' | 'page';
  slug?: string;
  metadata?: Record<string, any>;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aijolot.ia';
const webhookSecret = process.env.SITEMAP_WEBHOOK_SECRET;

/**
 * Trigger sitemap update webhook
 */
export async function triggerSitemapUpdate(payload: WebhookPayload): Promise<boolean> {
  try {
    const response = await fetch(`${baseUrl}/api/sitemap/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(webhookSecret && { 'x-webhook-secret': webhookSecret })
      },
      body: JSON.stringify({
        ...payload,
        timestamp: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Sitemap update webhook failed:', error);
      return false;
    }
    
    const result = await response.json();
    console.log('Sitemap update webhook successful:', result);
    return true;
  } catch (error) {
    console.error('Error triggering sitemap update webhook:', error);
    return false;
  }
}

/**
 * Blog post webhook helpers
 */
export const blogWebhooks = {
  created: (slug: string, metadata?: Record<string, any>) => 
    triggerSitemapUpdate({ action: 'create', type: 'blog', slug, metadata }),
  
  updated: (slug: string, metadata?: Record<string, any>) => 
    triggerSitemapUpdate({ action: 'update', type: 'blog', slug, metadata }),
  
  deleted: (slug: string) => 
    triggerSitemapUpdate({ action: 'delete', type: 'blog', slug }),
  
  published: (slug: string, metadata?: Record<string, any>) => 
    triggerSitemapUpdate({ action: 'publish', type: 'blog', slug, metadata }),
  
  unpublished: (slug: string) => 
    triggerSitemapUpdate({ action: 'unpublish', type: 'blog', slug })
};

/**
 * Page webhook helpers
 */
export const pageWebhooks = {
  created: (slug: string, metadata?: Record<string, any>) => 
    triggerSitemapUpdate({ action: 'create', type: 'page', slug, metadata }),
  
  updated: (slug: string, metadata?: Record<string, any>) => 
    triggerSitemapUpdate({ action: 'update', type: 'page', slug, metadata }),
  
  deleted: (slug: string) => 
    triggerSitemapUpdate({ action: 'delete', type: 'page', slug })
};

/**
 * Batch webhook updates
 */
export async function batchSitemapUpdate(payloads: WebhookPayload[]): Promise<boolean[]> {
  const results = await Promise.all(
    payloads.map(payload => triggerSitemapUpdate(payload))
  );
  
  return results;
}

/**
 * Schedule sitemap regeneration (useful for regular maintenance)
 */
export async function schedulePeriodicSitemapUpdate(): Promise<boolean> {
  return triggerSitemapUpdate({ 
    action: 'update', 
    type: 'page', 
    metadata: { 
      type: 'periodic_update',
      reason: 'scheduled_maintenance'
    }
  });
}