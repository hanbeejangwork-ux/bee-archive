import HeroMedia from '../components/HeroMedia.jsx'
import { siteInfo } from '../data/site.js'

const experience = [
  { period: '2023—NOW', role: 'Independent Motion & 3D Designer' },
  { period: '2021—2023', role: 'Motion Designer, Studio Placeholder' },
  { period: '2019—2021', role: 'Junior Designer, Studio Placeholder' },
]

const tools = [
  'Cinema 4D',
  'Redshift',
  'After Effects',
  'Premiere Pro',
  'Photoshop',
  'Illustrator',
  'Figma',
  'Midjourney',
  'Higgsfield',
]

// Duplicated once so the marquee track can loop seamlessly at -50%.
const marqueeTools = [...tools, ...tools]

export default function About() {
  return (
    <section className="section about-page">
      <div className="grid">
        <h1 className="about-page__title col-desktop-12 col-mobile-4">{siteInfo.aboutTitle}</h1>
      </div>

      <div className="grid about-page__hero">
        <div className="col-desktop-12 col-mobile-4">
          <HeroMedia src={siteInfo.aboutHeroImage} alt={siteInfo.aboutTitle} />
        </div>
      </div>

      <div className="grid about-page__body">
        <div className="col-desktop-6 col-mobile-4 about-page__block">
          <p className="about-page__eyebrow">INTRO</p>
          <p className="about-page__text">{siteInfo.aboutBody}</p>
        </div>

        <div className="col-desktop-6 col-mobile-4 about-page__block">
          <p className="about-page__eyebrow">EXPERIENCE</p>
          <ul className="about-page__list">
            {experience.map((item) => (
              <li key={item.period}>
                <span className="about-page__list-period">{item.period}</span>
                <span className="about-page__list-role">{item.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about-page__skills">
        <div className="grid">
          <p className="col-desktop-12 col-mobile-4 about-page__eyebrow">SKILLS</p>
        </div>
        <div className="marquee">
          <div className="marquee__track">
            {marqueeTools.map((tool, index) => (
              <span className="marquee__item" key={`${tool}-${index}`}>
                {tool}
                <span className="marquee__divider">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
