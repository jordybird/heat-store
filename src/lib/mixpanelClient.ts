import mixpanel from 'mixpanel-browser'

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token is missing! Check your .env file.')
    return
  }

  mixpanel.init(MIXPANEL_TOKEN, {
    // @ts-expect-error: 'autocapture' is a real Mixpanel option but not in their type definitions
    autocapture: true,
  })
}

export const trackPageView = (url: string) => {
  mixpanel.track('Page View', {
    page: url,
    referrer: document.referrer,
  })
}
