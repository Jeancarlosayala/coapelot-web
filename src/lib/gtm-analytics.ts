import { gtmPush } from '@/components/analytics/google-tag-manager';

// Enhanced analytics tracking with Google Tag Manager
export class GTMAnalytics {
  private static gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PF9F3V9L';
  
  // Track page views
  static trackPageView(path: string, title?: string) {
    gtmPush({
      event: 'page_view',
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href
    });
  }

  // Track service clicks (existing functionality)
  static trackServiceClick(serviceId: string, serviceName: string, ctaLink: string) {
    gtmPush({
      event: 'service_click',
      service_id: serviceId,
      service_name: serviceName,
      cta_link: ctaLink,
      click_text: `More about ${serviceName}`
    });
  }

  // Track CTA button clicks
  static trackCTAClick(ctaText: string, ctaLink: string, section?: string) {
    gtmPush({
      event: 'cta_click',
      cta_text: ctaText,
      cta_link: ctaLink,
      section: section || 'unknown',
      click_location: window.location.pathname
    });
  }

  // Track form submissions
  static trackFormSubmit(formName: string, formData?: Record<string, any>) {
    gtmPush({
      event: 'form_submit',
      form_name: formName,
      form_data: formData,
      page_location: window.location.href
    });
  }

  // Track AI agent interactions
  static trackAIAgentInteraction(action: string, prompt?: string) {
    gtmPush({
      event: 'ai_agent_interaction',
      action: action,
      prompt: prompt,
      page_location: window.location.href
    });
  }

  // Track blog post views
  static trackBlogView(postSlug: string, postTitle: string, category?: string) {
    gtmPush({
      event: 'blog_view',
      post_slug: postSlug,
      post_title: postTitle,
      category: category || 'blog',
      page_location: window.location.href
    });
  }

  // Track video interactions
  static trackVideoInteraction(action: 'play' | 'pause' | 'complete', videoTitle: string) {
    gtmPush({
      event: 'video_interaction',
      action: action,
      video_title: videoTitle,
      page_location: window.location.href
    });
  }

  // Track downloads
  static trackDownload(fileName: string, fileType: string, downloadLink: string) {
    gtmPush({
      event: 'file_download',
      file_name: fileName,
      file_type: fileType,
      download_link: downloadLink,
      page_location: window.location.href
    });
  }

  // Track scroll depth
  static trackScrollDepth(percentage: number) {
    gtmPush({
      event: 'scroll_depth',
      scroll_percentage: percentage,
      page_location: window.location.href
    });
  }

  // Track outbound links
  static trackOutboundLink(linkUrl: string, linkText: string) {
    gtmPush({
      event: 'outbound_link',
      link_url: linkUrl,
      link_text: linkText,
      page_location: window.location.href
    });
  }

  // Track search queries
  static trackSearch(query: string, results?: number) {
    gtmPush({
      event: 'search',
      search_query: query,
      search_results: results,
      page_location: window.location.href
    });
  }

  // Track custom events
  static trackCustomEvent(eventName: string, eventData: Record<string, any>) {
    gtmPush({
      event: eventName,
      ...eventData,
      page_location: window.location.href,
      timestamp: new Date().toISOString()
    });
  }

  // Track user engagement
  static trackEngagement(action: string, value?: number) {
    gtmPush({
      event: 'engagement',
      engagement_action: action,
      engagement_value: value,
      page_location: window.location.href
    });
  }

  // Track eCommerce events (for future use)
  static trackEcommerce(action: string, eventData: Record<string, any>) {
    gtmPush({
      event: 'ecommerce',
      ecommerce_action: action,
      ...eventData,
      page_location: window.location.href
    });
  }

  // Enhanced conversion tracking
  static trackConversion(conversionName: string, value?: number, currency?: string) {
    gtmPush({
      event: 'conversion',
      conversion_name: conversionName,
      conversion_value: value,
      currency: currency || 'EUR',
      page_location: window.location.href
    });
  }

  // Track demo requests
  static trackDemoRequest(serviceType: string, contactMethod: string) {
    gtmPush({
      event: 'demo_request',
      service_type: serviceType,
      contact_method: contactMethod,
      page_location: window.location.href
    });
  }

  // Track newsletter signups
  static trackNewsletterSignup(email: string, source: string) {
    gtmPush({
      event: 'newsletter_signup',
      email_hash: btoa(email), // Base64 encode for privacy
      signup_source: source,
      page_location: window.location.href
    });
  }
}

// Export individual functions for convenience
export const {
  trackPageView,
  trackServiceClick,
  trackCTAClick,
  trackFormSubmit,
  trackAIAgentInteraction,
  trackBlogView,
  trackVideoInteraction,
  trackDownload,
  trackScrollDepth,
  trackOutboundLink,
  trackSearch,
  trackCustomEvent,
  trackEngagement,
  trackEcommerce,
  trackConversion,
  trackDemoRequest,
  trackNewsletterSignup
} = GTMAnalytics;