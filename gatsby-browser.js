import './src/styles/global.scss'
import { RootWrapper } from "./src/utils/provider-wrappers"
export const wrapRootElement = RootWrapper

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated.` +
    `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
