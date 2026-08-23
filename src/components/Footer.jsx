import { siteInfo } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="grid footer__grid">
        <div className="footer__col">
          <span className="footer__eyebrow">EMAIL</span>
          <a href={`mailto:${siteInfo.email}`} className="footer__link">
            {siteInfo.email}
          </a>
        </div>
        <div className="footer__col">
          <span className="footer__eyebrow">SOCIAL</span>
          <a href={siteInfo.instagram} target="_blank" rel="noreferrer" className="footer__link">
            INSTAGRAM
          </a>
          <a href={siteInfo.behance} target="_blank" rel="noreferrer" className="footer__link">
            BEHANCE
          </a>
        </div>
        <div className="footer__col footer__col--end">
          <span className="footer__meta">&copy; {year} {siteInfo.name}</span>
        </div>
      </div>
    </footer>
  )
}
