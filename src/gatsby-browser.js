export const onRouteUpdate = ({ location }, pluginOptions = {}) => {
    if (process.env.NODE_ENV !== `production` || typeof snowplow !== `function`) {
      return null
    }
  
    // wrap inside a timeout to make sure react-helmet is done with it's changes (https://github.com/gatsbyjs/gatsby/issues/9139)
    // reactHelmet is using requestAnimationFrame: https://github.com/nfl/react-helmet/blob/5.2.0/src/HelmetUtils.js#L296-L299
    const sendPageView = () => {
      window.snowplow('trackPageView');
    }
  
    // Minimum delay for reactHelmet's requestAnimationFrame
    setTimeout(sendPageView, 32)
  
    return null
  }