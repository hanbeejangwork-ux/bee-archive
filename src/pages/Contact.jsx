import { useState } from 'react'
import { siteInfo } from '../data/site.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (event) => {
    event.preventDefault()
    try {
      await navigator.clipboard.writeText(siteInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${siteInfo.email}`
    }
  }

  return (
    <section className="section contact-page">
      <div className="grid">
        <h1 className="contact-page__headline col-desktop-10 col-mobile-4">
          LET&rsquo;S WORK
          <br />
          TOGETHER.
        </h1>
      </div>

      <div className="grid contact-page__links">
        <div className="col-desktop-4 col-mobile-4">
          <p className="contact-page__eyebrow">EMAIL</p>
          <a href={`mailto:${siteInfo.email}`} onClick={handleCopy} className="contact-page__link">
            {siteInfo.email}
          </a>
          <span className="contact-page__hint">{copied ? 'COPIED' : 'CLICK TO COPY'}</span>
        </div>
        <div className="col-desktop-4 col-mobile-4">
          <p className="contact-page__eyebrow">INSTAGRAM</p>
          <a href={siteInfo.instagram} target="_blank" rel="noreferrer" className="contact-page__link">
            @hanbeejang
          </a>
        </div>
        <div className="col-desktop-4 col-mobile-4">
          <p className="contact-page__eyebrow">BEHANCE</p>
          <a href={siteInfo.behance} target="_blank" rel="noreferrer" className="contact-page__link">
            behance.net/hanbeejang
          </a>
        </div>
      </div>
    </section>
  )
}
