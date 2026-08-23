import { useState } from 'react'

/**
 * The Home page's primary hero visual. Unlike ImageFrame, this is never
 * conditionally hidden — if `src` is missing or fails to load, it shows
 * a fixed #D9D9D9 placeholder block instead of collapsing the section.
 */
export default function HeroMedia({ src, alt = 'HERO IMAGE' }) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <div className="hero-media">
      {showPlaceholder ? (
        <div className="hero-placeholder">HERO IMAGE</div>
      ) : (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  )
}
