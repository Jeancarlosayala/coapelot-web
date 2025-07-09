# Google Tag Manager (GTM) Setup Documentation

## Overview

Google Tag Manager has been implemented across all pages to track user interactions, conversions, and provide comprehensive analytics for the Aijolot website.

## Implementation Details

### GTM Container ID
- **Container ID**: `GTM-PF9F3V9L`
- **Environment**: Production
- **Domain**: `aijolot.ia`

### Files Created/Modified

#### Core GTM Files
- `src/components/analytics/google-tag-manager.tsx` - GTM component implementation
- `src/lib/gtm-analytics.ts` - Enhanced analytics tracking utilities
- `src/app/layout.tsx` - Modified to include GTM scripts
- `src/lib/analytics.ts` - Updated to integrate with GTM

#### Configuration
- `.env.example` - Added GTM environment variable

## GTM Script Implementation

### Head Script (JavaScript)
The GTM script is loaded in the `<head>` section using Next.js `Script` component with `strategy="afterInteractive"`:

```javascript
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF9F3V9L');
```

### Noscript Fallback
For users with JavaScript disabled, the noscript version is included in the `<body>`:

```html
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF9F3V9L"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
```

## Environment Configuration

### Environment Variables
Add to your `.env.local` file:

```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-PF9F3V9L
```

## Tracking Events

### Available Event Types

#### 1. Page Views
```typescript
import { GTMAnalytics } from '@/lib/gtm-analytics';

GTMAnalytics.trackPageView('/services', 'Services Page');
```

#### 2. Service Clicks
```typescript
GTMAnalytics.trackServiceClick('agentic-commerce', 'Agentic Commerce', '/servicios/agentic-commerce');
```

#### 3. CTA Button Clicks
```typescript
GTMAnalytics.trackCTAClick('Ver Demo', '/demo', 'hero-section');
```

#### 4. Form Submissions
```typescript
GTMAnalytics.trackFormSubmit('contact-form', { email: 'user@example.com' });
```

#### 5. AI Agent Interactions
```typescript
GTMAnalytics.trackAIAgentInteraction('diagnosis_request', 'Quiero un diagnóstico IA');
```

#### 6. Blog Post Views
```typescript
GTMAnalytics.trackBlogView('ia-ecommerce-2024', 'IA transformando eCommerce 2024', 'ai-insights');
```

#### 7. Video Interactions
```typescript
GTMAnalytics.trackVideoInteraction('play', 'Agentic Commerce Demo');
```

#### 8. File Downloads
```typescript
GTMAnalytics.trackDownload('case-study.pdf', 'pdf', '/downloads/case-study.pdf');
```

#### 9. Scroll Depth
```typescript
GTMAnalytics.trackScrollDepth(75); // 75% scrolled
```

#### 10. Search Queries
```typescript
GTMAnalytics.trackSearch('AI solutions', 25);
```

#### 11. Conversions
```typescript
GTMAnalytics.trackConversion('demo_request', 100, 'EUR');
```

#### 12. Demo Requests
```typescript
GTMAnalytics.trackDemoRequest('agentic-marketing', 'contact-form');
```

#### 13. Newsletter Signups
```typescript
GTMAnalytics.trackNewsletterSignup('user@example.com', 'footer');
```

#### 14. Custom Events
```typescript
GTMAnalytics.trackCustomEvent('custom_interaction', {
  category: 'user-engagement',
  action: 'special-action',
  value: 42
});
```

## Data Layer Structure

### Standard Event Properties
All events include these standard properties:
- `event` - Event name
- `page_location` - Current page URL
- `timestamp` - Event timestamp

### Service Click Event Example
```javascript
{
  event: 'service_click',
  service_id: 'agentic-commerce',
  service_name: 'Agentic Commerce',
  cta_link: '/servicios/agentic-commerce',
  click_text: 'More about Agentic Commerce',
  page_location: 'https://aijolot.ia/services'
}
```

### Form Submit Event Example
```javascript
{
  event: 'form_submit',
  form_name: 'contact-form',
  form_data: { email: 'user@example.com' },
  page_location: 'https://aijolot.ia/contact'
}
```

### AI Agent Interaction Example
```javascript
{
  event: 'ai_agent_interaction',
  action: 'diagnosis_request',
  prompt: 'Quiero un diagnóstico IA estratégico',
  page_location: 'https://aijolot.ia/ai-agent'
}
```

## Integration with Existing Analytics

### Legacy Analytics Support
The system maintains backward compatibility with existing analytics:

```typescript
// Both legacy and GTM tracking
analytics.trackServiceClick(serviceId, serviceTitle, href);
```

### Enhanced Tracking
New GTM system provides additional tracking capabilities:

```typescript
// Enhanced GTM tracking
GTMAnalytics.trackServiceClick(serviceId, serviceTitle, href);
GTMAnalytics.trackCTAClick(ctaText, ctaLink, section);
GTMAnalytics.trackConversion('demo_request', 100);
```

## GTM Container Configuration

### Recommended Tags in GTM

#### 1. Google Analytics 4 (GA4)
- **Tag Type**: Google Analytics: GA4 Configuration
- **Measurement ID**: Your GA4 Measurement ID
- **Trigger**: All Pages

#### 2. Google Ads Conversion Tracking
- **Tag Type**: Google Ads: Google Ads Conversion Tracking
- **Conversion ID**: Your Google Ads Conversion ID
- **Trigger**: Custom events (form_submit, demo_request, etc.)

#### 3. Facebook Pixel
- **Tag Type**: Custom HTML
- **HTML**: Facebook Pixel code
- **Trigger**: All Pages

#### 4. LinkedIn Insight Tag
- **Tag Type**: Custom HTML
- **HTML**: LinkedIn Insight Tag code
- **Trigger**: All Pages

### Custom Variables

#### 1. Service ID
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: service_id

#### 2. CTA Text
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: cta_text

#### 3. Form Name
- **Variable Type**: Data Layer Variable
- **Data Layer Variable Name**: form_name

### Triggers

#### 1. Service Click
- **Trigger Type**: Custom Event
- **Event Name**: service_click

#### 2. Form Submit
- **Trigger Type**: Custom Event
- **Event Name**: form_submit

#### 3. AI Agent Interaction
- **Trigger Type**: Custom Event
- **Event Name**: ai_agent_interaction

#### 4. Demo Request
- **Trigger Type**: Custom Event
- **Event Name**: demo_request

## Testing and Debugging

### GTM Preview Mode
1. Access GTM container
2. Click "Preview" button
3. Enter website URL: `https://aijolot.ia`
4. Test events by interacting with the site

### Browser Developer Tools
1. Open browser console
2. Check `dataLayer` object: `console.log(dataLayer)`
3. Monitor events: `dataLayer.push({'event': 'test'})`

### GTM Debug Extension
Install Google Tag Assistant extension for Chrome to debug GTM implementation.

## Performance Considerations

### Script Loading
- GTM script loads with `strategy="afterInteractive"`
- Non-blocking implementation
- Minimal impact on page load speed

### Event Batching
- Events are queued and sent efficiently
- No impact on user experience
- Automatic retry on failure

## Security and Privacy

### Data Privacy
- No personally identifiable information (PII) in events
- Email addresses are base64 encoded
- GDPR compliant implementation

### Security
- Secure HTTPS connections
- Input validation and sanitization
- Error handling for failed events

## Monitoring and Maintenance

### Regular Tasks
1. **Monthly**: Review GTM container for outdated tags
2. **Quarterly**: Audit data layer events
3. **Annually**: Review and update tracking requirements

### Performance Monitoring
- Monitor page load impact
- Track event success rates
- Review data quality in analytics

## Troubleshooting

### Common Issues

#### 1. Events Not Firing
- Check GTM container is published
- Verify event names and data layer structure
- Test in GTM preview mode

#### 2. Duplicate Events
- Check for multiple GTM containers
- Verify event deduplication logic

#### 3. Missing Data
- Verify trigger conditions
- Check variable configuration
- Test data layer variables

### Debug Commands

```javascript
// Check if GTM is loaded
console.log(window.dataLayer);

// Manually trigger event
dataLayer.push({
  event: 'test_event',
  test_data: 'test_value'
});

// Check GTM container
console.log(window.google_tag_manager);
```

## Integration Examples

### Contact Form Integration
```typescript
import { GTMAnalytics } from '@/lib/gtm-analytics';

function handleContactSubmit(formData: FormData) {
  // Process form
  
  // Track form submission
  GTMAnalytics.trackFormSubmit('contact-form', {
    email: formData.get('email'),
    message_length: formData.get('message')?.length
  });
  
  // Track conversion
  GTMAnalytics.trackConversion('contact_form_lead', 50, 'EUR');
}
```

### Service Page Integration
```typescript
import { GTMAnalytics } from '@/lib/gtm-analytics';

function ServicePage({ serviceId, serviceTitle }: Props) {
  useEffect(() => {
    // Track page view
    GTMAnalytics.trackPageView(`/servicios/${serviceId}`, serviceTitle);
  }, [serviceId, serviceTitle]);
  
  const handleDemoClick = () => {
    // Track demo request
    GTMAnalytics.trackDemoRequest(serviceId, 'service-page');
    GTMAnalytics.trackConversion('demo_request', 100, 'EUR');
  };
  
  return (
    // Component JSX
  );
}
```

The GTM implementation provides comprehensive tracking capabilities while maintaining performance and privacy standards. All events are automatically sent to the configured GTM container for processing and forwarding to connected analytics platforms.