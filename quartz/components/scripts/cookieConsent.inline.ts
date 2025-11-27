// Cookie consent management
const COOKIE_CONSENT_KEY = 'cookie-consent-analytics'
const COOKIE_EXPIRY_DAYS = 365

// Check if consent has been given
function hasAnalyticsConsent(): boolean {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  return consent === 'accepted'
}

// Check if consent has been decided (accepted or rejected)
function hasConsentDecision(): boolean {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  return consent === 'accepted' || consent === 'rejected'
}

// Set consent preference
function setAnalyticsConsent(accepted: boolean): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? 'accepted' : 'rejected')
  
  // Set expiry date in localStorage
  const expiryDate = new Date()
  expiryDate.setTime(expiryDate.getTime() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000))
  localStorage.setItem(`${COOKIE_CONSENT_KEY}-expiry`, expiryDate.getTime().toString())
}

// Check if consent has expired
function isConsentExpired(): boolean {
  const expiryString = localStorage.getItem(`${COOKIE_CONSENT_KEY}-expiry`)
  if (!expiryString) return true
  
  const expiryTime = parseInt(expiryString, 10)
  return Date.now() > expiryTime
}

// Initialize Google Analytics if consent is given
function initializeAnalytics(): void {
  if (hasAnalyticsConsent()) {
    // Trigger analytics initialization event
    const event = new CustomEvent('analyticsConsentGiven')
    document.dispatchEvent(event)
  }
}

// Hide cookie consent banner
function hideCookieBanner(): void {
  const banner = document.getElementById('cookie-consent-banner')
  if (banner) {
    banner.style.display = 'none'
  }
}

// Show cookie consent banner
function showCookieBanner(): void {
  const banner = document.getElementById('cookie-consent-banner')
  if (banner) {
    banner.style.display = 'block'
  }
}

document.addEventListener('nav', () => {
  // Check if we need to show the consent banner
  if (!hasConsentDecision() || isConsentExpired()) {
    showCookieBanner()
  } else {
    hideCookieBanner()
    initializeAnalytics()
  }

  // Set up button event listeners
  const acceptButton = document.getElementById('cookie-accept')
  const rejectButton = document.getElementById('cookie-reject')

  if (acceptButton) {
    acceptButton.addEventListener('click', () => {
      setAnalyticsConsent(true)
      hideCookieBanner()
      initializeAnalytics()
    })
  }

  if (rejectButton) {
    rejectButton.addEventListener('click', () => {
      setAnalyticsConsent(false)
      hideCookieBanner()
    })
  }

  // Add cleanup for event listeners
  window.addCleanup(() => {
    if (acceptButton) {
      acceptButton.removeEventListener('click', () => {})
    }
    if (rejectButton) {
      rejectButton.removeEventListener('click', () => {})
    }
  })
})

// Initial check on page load
if (typeof window !== 'undefined') {
  if (!hasConsentDecision() || isConsentExpired()) {
    // Will be shown when 'nav' event fires
  } else if (hasAnalyticsConsent()) {
    initializeAnalytics()
  }
}