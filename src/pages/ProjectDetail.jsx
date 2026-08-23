import { useParams, Link, Navigate } from 'react-router-dom'
import ImageFrame from '../components/ImageFrame.jsx'
import ContentBlock from '../components/ContentBlock.jsx'
import { getProjectBySlug } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/work" replace />

  const { id, title, category, year, role, tools, heroImage, description, content, ratio } =
    project
  console.log(content)

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
          <div>
            <dt>ROLE</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>TOOLS</dt>
            <dd>{tools.join(', ')}</dd>
          </div>
        </dl>
      </header>

      <div className="grid project-detail__hero">
        <div className="col-desktop-12 col-mobile-4">
          <ImageFrame src={heroImage} alt={title} ratio={ratio || '16/9'} />
        </div>
      </div>

      <div className="grid project-detail__description">
        <p className="col-desktop-7 col-mobile-4 col-desktop-start-6">{description}</p>
      </div>

      {(content || []).map((block, index) => (
        <ContentBlock key={index} block={block} title={title} />
      ))}

      <nav className="grid project-detail__nav">
        <Link to="/work" className="text-link col-desktop-4 col-mobile-4">
          &larr; BACK TO WORK
        </Link>
      </nav>
    </article>
  )
}
