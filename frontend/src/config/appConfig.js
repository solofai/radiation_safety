// frontend/src/config/appConfig.js

const appConfig = {
  // Feature flags
  features: {
    enablePaywall: false,  // Toggle this to enable/disable paywall
    enableDownloads: false,  // Toggle for PDF downloads
    enableAIChat: false,  // For future AI integration
    showDebugPanel: false,  // Toggle debug panel
  },
  
  // Content access rules
  freeContent: {
    manual: {
      chapters: [1, 2],  // Free preview chapters
      fullAccess: false
    },
    simulations: {
      available: ['survey-meter'],  // Free simulation IDs
      fullAccess: false
    },
    quizzes: {
      available: ['fundamentals-preview'],  // Free quiz IDs
      fullAccess: false
    },
    virtualLab: {
      available: [],  // No free lab exercises
      fullAccess: false
    }
  },
  
  // Paywall messages
  paywallMessages: {
    default: "Upgrade to access all content",
    manual: "This chapter is available for registered users",
    simulation: "Unlock all simulations with full access",
    quiz: "Complete assessments require registration",
    lab: "Virtual lab exercises are premium content"
  },
  
  // Download settings
  downloads: {
    allowChapterPDF: true,
    allowFullBookPDF: true,
    allowQuizPDF: false,
    requireAuth: true
  },
  
  // Branding
  branding: {
    appName: "Radiation Safety Training",
    author: "John J. Pickering",
    authorEmail: "john@solofai.com",
    supportEmail: "sol@solofai.com",
    copyrightYear: 2025
  }
};

// Helper functions
export const isContentFree = (contentType, contentId) => {
  if (!appConfig.features.enablePaywall) return true;
  
  const freeContent = appConfig.freeContent[contentType];
  if (!freeContent) return false;
  
  if (freeContent.fullAccess) return true;
  
  switch(contentType) {
    case 'manual':
      return freeContent.chapters.includes(contentId);
    case 'simulations':
    case 'quizzes':
    case 'virtualLab':
      return freeContent.available.includes(contentId);
    default:
      return false;
  }
};

export const getPaywallMessage = (contentType) => {
  return appConfig.paywallMessages[contentType] || appConfig.paywallMessages.default;
};

export default appConfig;

