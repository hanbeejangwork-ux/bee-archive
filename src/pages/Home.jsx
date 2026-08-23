import { Link } from 'react-router-dom'
import HeroMedia from '../components/HeroMedia.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { getSortedProjects } from '../data/projects.js'
import { siteInfo } from '../data/site.js'

// siteInfo.homeIntro's first line is the small eyebrow label;
// remaining lines become the large headline (see src/data/site.js).
const introLines = siteInfo.homeIntro.split('\n')
const eyebrow = introLines[0]
const headline = introLines.slice(1)

const selected = getSortedProjects('newest').slice(0, 4)
const heroProject = selected[0]

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="section intro">
        <div className="grid">
          <p className="intro__eyebrow col-desktop-4 col-mobile-4">{eyebrow}</p>
          <h1 className="intro__headline col-desktop-8 col-mobile-4">
            {headline.map((line) => (
              <span key={line} className="intro__headline-line">
                {line}
              </span>
            ))}
          </h1>
        </div>
        <div className="grid intro__sub">
          <div className="col-desktop-4 col-mobile-4">
            <p className="intro__label">SELECTED WORK</p>
            <p className="intro__label intro__label--muted">2023—2026</p>
          </div>
          <p className="intro__paragraph col-desktop-6 col-mobile-4 col-desktop-start-6">
            {siteInfo.homeDescription}
          </p>
        </div>
      </section>

      {/* Hero image — always visible; falls back to a gray placeholder,
          never conditionally hidden when the real asset is missing. */}
      <section className="section hero-image">
        <div className="grid">
          <div className="col-desktop-12 col-mobile-4">
            <HeroMedia src={siteInfo.heroImage} alt={heroProject?.title} />
          </div>
        </div>
        {heroProject && (
          <div className="grid hero-image__meta">
            <span className="col-desktop-4 col-mobile-4">{heroProject.title}</span>
            <span className="col-desktop-4 col-mobile-2 col-desktop-start-5">{heroProject.year}</span>
            <span className="col-desktop-4 col-mobile-2 col-desktop-start-9">{heroProject.category}</span>
          </div>
        )}
      </section>

      {/* Selected projects */}
      <section className="section selected-work">
        <div className="grid section-heading">
          <p className="col-desktop-4 col-mobile-4 section-heading__label">SELECTED WORK</p>
          <p className="col-desktop-4 col-mobile-4 col-desktop-start-9 section-heading__label section-heading__label--right">
            <Link to="/work" className="text-link">
              VIEW ALL WORK &rarr;
            </Link>
          </p>
        </div>

        {selected[0] && (
          <div className="grid project-row">
            <ProjectCard project={selected[0]} span={8} />
            {selected[1] && <ProjectCard project={selected[1]} span={4} />}
          </div>
        )}

        {selected[2] && (
          <div className="grid project-row">
            <ProjectCard project={selected[2]} span={5} />
            {selected[3] && <ProjectCard project={selected[3]} span={7} />}
          </div>
        )}
      </section>

      {/* About preview */}
      <section className="section about-preview">
        <div className="grid">
          <p className="col-desktop-3 col-mobile-4 about-preview__label">ABOUT</p>
          <p className="col-desktop-6 col-mobile-4 about-preview__text">
            Based between studio and screen — working with brands and directors on motion,
            3D and still image.
          </p>
          <p className="col-desktop-3 col-mobile-4 about-preview__link">
            <Link to="/about" className="text-link">
              MORE ABOUT &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
