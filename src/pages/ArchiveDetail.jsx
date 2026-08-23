import { useParams, Link, Navigate } from 'react-router-dom'
import ImageFrame from '../components/ImageFrame.jsx'
import ContentBlock from '../components/ContentBlock.jsx'
import { getArchiveItemBySlug } from '../data/archive.js'

// Mirrors ProjectDetail's layout so the two detail pages feel like the
// same site, but reads from archive.js — entirely independent of
// projects.js, since Archive holds personal work.
export default function ArchiveDetail() {
  const { slug } = useParams()
  const item = getArchiveItemBySlug(slug)

  if (!item) return <Navigate to="/archive" replace />

  const { id, title, category, year, heroImage, description, content, ratio } = item

  return (
    <article className="section project-detail">
      <header className="grid project-detail__header">
        <div className="col-desktop-8 col-mobile-4">
          <p className="project-detail__number">{id}</p>
          <h1 className="project-detail__title">{title}</h1>
        </div>
        <dl className="col-desktop-4 col-mobile-4 project-detail__specs">
          <div>
            <dt>CATEGORY</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt>YEAR</dt>
            <dd>{year}</dd>
          </div>
        </dl>
      </header>

      <div className="grid project-detail__hero">
        <div className="col-desktop-12 col-mobile-4">
          <ImageFrame src={heroImage} alt={title} ratio={ratio || '3/4'} />
        </div>
      </div>

      <div className="grid project-detail__description">
        <p className="col-desktop-7 col-mobile-4 col-desktop-start-6">{description}</p>
      </div>

      {(content || []).map((block, index) => (
        <ContentBlock key={index} block={block} title={title} />
      ))}

      <nav className="grid project-detail__nav">
        <Link to="/archive" className="text-link col-desktop-4 col-mobile-4">
          &larr; BACK TO ARCHIVE
        </Link>
      </nav>
    </article>
  )
}
