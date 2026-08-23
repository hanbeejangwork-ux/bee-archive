import { NavLink } from 'react-router-dom'
import { siteInfo } from '../data/site.js'

export default function Header() {
  return (
    <header className="header">
      <div className="grid header__grid">
        <div className="header__name">
          <NavLink to="/" className="header__logo">
            {siteInfo.name}
          </NavLink>
        </div>

        <nav className="header__nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `header__nav-link ${isActive ? 'is-active' : ''}`}
          >
            {siteInfo.navigation.home}
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) => `header__nav-link ${isActive ? 'is-active' : ''}`}
          >
            {siteInfo.navigation.work}
          </NavLink>
          <NavLink
            to="/archive"
            className={({ isActive }) => `header__nav-link ${isActive ? 'is-active' : ''}`}
          >
            {siteInfo.navigation.archive}
          </NavLink>
        </nav>

        <div className="header__contact">
          <NavLink to="/contact" className="header__message-link">
            SEND ME A MESSAGE
          </NavLink>
          <ul className="header__social">
            <li>
              <a href={siteInfo.instagram} target="_blank" rel="noreferrer">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a href={siteInfo.behance} target="_blank" rel="noreferrer">
                BEHANCE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
