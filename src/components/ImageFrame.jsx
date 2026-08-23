import { useState } from 'react'

/**
 * Renders an image at a fixed aspect ratio. If `src` is missing or
 * fails to load (e.g. the real asset hasn't been added to
 * public/images/ yet), falls back to a quiet CSS placeholder that
 * shows the expected file path — so the layout is always complete,
 * even before real photography exists.
 */
export default function ImageFrame({ src, alt = '', ratio = '4/3', className = '' }) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <div className={`image-frame ${className}`} style={{ aspectRatio: ratio }}>
      {showPlaceholder ? (
        <div className="image-placeholder">
          <span className="image-placeholder__label">{alt || 'IMAGE'}</span>
          {src && <span className="image-placeholder__path">{src}</span>}
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  )
}
