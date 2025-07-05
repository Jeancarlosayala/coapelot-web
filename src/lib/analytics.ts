// Analytics utility functions for data layer events

interface SelectContentParams {
  content_type: string;
  content_id: string;
  content_title?: string;
  content_category?: string;
  section?: string;
  url?: string;
}

interface UserData {
  user_id?: string;
  country?: string;
  city?: string;
}

interface GenerateLeadParams {
  currency: string;
  value: number;
  lead_source?: string;
  form_type?: string;
  campaign_source?: string;
  lead_id?: string;
}

// Utility to get user location (simplified - in production you'd use a geolocation service)
function getUserLocation(): Promise<UserData> {
  return new Promise((resolve) => {
    // Try to get location from browser geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real implementation, you'd reverse geocode these coordinates
          // For now, we'll use placeholder values
          resolve({
            user_id: generateUserId(),
            country: 'Mexico', // Would be determined from coordinates
            city: 'Mexico City' // Would be determined from coordinates
          });
        },
        () => {
          // Fallback if geolocation fails
          resolve({
            user_id: generateUserId(),
            country: 'Unknown',
            city: 'Unknown'
          });
        }
      );
    } else {
      resolve({
        user_id: generateUserId(),
        country: 'Unknown',
        city: 'Unknown'
      });
    }
  });
}

// Generate or retrieve user ID (simplified - in production use proper user management)
function generateUserId(): string {
  let userId = localStorage.getItem('aijolot_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    localStorage.setItem('aijolot_user_id', userId);
  }
  return userId;
}

// Main function to track select_content events
export async function trackSelectContent(params: SelectContentParams) {
  try {
    // Get user data
    const userData = await getUserLocation();
    
    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];
    
    // Push the select_content event
    window.dataLayer.push({
      event: 'select_content',
      content_type: params.content_type,
      content_id: params.content_id,
      content_title: params.content_title || '',
      content_category: params.content_category || '',
      section: params.section || '',
      url: params.url || window.location.href,
      user_id: userData.user_id,
      country: userData.country,
      city: userData.city,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    });

    console.log('Analytics: select_content event tracked', {
      content_type: params.content_type,
      content_id: params.content_id,
      content_title: params.content_title,
      section: params.section
    });
  } catch (error) {
    console.warn('Analytics: Failed to track select_content event', error);
  }
}

// Main function to track generate_lead events
export async function trackGenerateLead(params: GenerateLeadParams) {
  try {
    // Get user data
    const userData = await getUserLocation();
    
    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];
    
    // Push the generate_lead event
    window.dataLayer.push({
      event: 'generate_lead',
      currency: params.currency,
      value: params.value,
      lead_source: params.lead_source || 'website',
      form_type: params.form_type || 'unknown',
      campaign_source: params.campaign_source || 'organic',
      lead_id: params.lead_id || generateUserId(),
      user_id: userData.user_id,
      country: userData.country,
      city: userData.city,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    });

    console.log('Analytics: generate_lead event tracked', {
      currency: params.currency,
      value: params.value,
      lead_source: params.lead_source,
      form_type: params.form_type,
      lead_id: params.lead_id
    });
  } catch (error) {
    console.warn('Analytics: Failed to track generate_lead event', error);
  }
}

// Specific tracking functions for different content types
export const analytics = {
  // Track navigation clicks
  trackNavigation: (label: string, href: string, section: 'main_nav' | 'footer' = 'main_nav') => {
    trackSelectContent({
      content_type: 'navigation',
      content_id: `nav_${label.toLowerCase().replace(/\s+/g, '_')}`,
      content_title: label,
      content_category: 'navigation',
      section: section,
      url: href
    });
  },

  // Track service carousel clicks
  trackServiceClick: (serviceId: string, serviceTitle: string, href: string) => {
    trackSelectContent({
      content_type: 'service',
      content_id: serviceId,
      content_title: serviceTitle,
      content_category: 'agentic_solutions',
      section: 'services_carousel',
      url: href
    });
  },

  // Track blog card clicks
  trackBlogClick: (blogSlug: string, blogTitle: string, href: string, section: 'home' | 'blog_page' = 'home') => {
    trackSelectContent({
      content_type: 'blog_post',
      content_id: blogSlug,
      content_title: blogTitle,
      content_category: 'blog',
      section: section,
      url: href
    });
  },

  // Track CTA button clicks
  trackCTAClick: (ctaText: string, href: string, section: string) => {
    trackSelectContent({
      content_type: 'cta_button',
      content_id: `cta_${ctaText.toLowerCase().replace(/\s+/g, '_')}`,
      content_title: ctaText,
      content_category: 'call_to_action',
      section: section,
      url: href
    });
  },

  // Track lead generation from contact forms
  trackContactFormLead: (value: number = 50, currency: string = 'USD', leadSource?: string) => {
    trackGenerateLead({
      currency: currency,
      value: value,
      lead_source: leadSource || 'contact_form',
      form_type: 'contact_form',
      campaign_source: 'website'
    });
  },

  // Track lead generation from AI agent interactions
  trackAIAgentLead: (value: number = 75, currency: string = 'USD', interactionType?: string) => {
    trackGenerateLead({
      currency: currency,
      value: value,
      lead_source: 'ai_agent',
      form_type: 'ai_chat',
      campaign_source: interactionType || 'ai_interaction'
    });
  },

  // Track lead generation from demo requests
  trackDemoLead: (value: number = 100, currency: string = 'USD', demoType?: string) => {
    trackGenerateLead({
      currency: currency,
      value: value,
      lead_source: 'demo_request',
      form_type: 'demo_form',
      campaign_source: demoType || 'demo_request'
    });
  },

  // Generic lead tracking for custom scenarios
  trackLead: (params: GenerateLeadParams) => {
    trackGenerateLead(params);
  }
};

// Declare global dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}