// @ts-ignore
import cookieConsentScript from "./scripts/cookieConsent.inline"
import styles from "./styles/cookieConsent.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CookieConsent: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div id="cookie-consent-banner" class={classNames(displayClass, "cookie-consent-banner")}>
      <div class="cookie-content">
        <div class="cookie-message">
          <p>
            Esta página web utiliza Google Analytics para analizar el tráfico del sitio y mejorar tu experiencia. 
            Al hacer clic en "Aceptar", consientes el uso de estas cookies.
          </p>
        </div>
        <div class="cookie-actions">
          <button id="cookie-accept" class="cookie-btn cookie-accept">
            Aceptar
          </button>
          <button id="cookie-reject" class="cookie-btn cookie-reject">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}

CookieConsent.beforeDOMLoaded = cookieConsentScript
CookieConsent.css = styles

export default (() => CookieConsent) satisfies QuartzComponentConstructor