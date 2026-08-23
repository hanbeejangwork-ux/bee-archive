import { Link } from 'react-router-dom'
import ImageFrame from './ImageFrame.jsx'

/**
 * span: number of grid columns this card occupies on desktop (out of 12).
 * Defaults to a 3-across archive card (4 columns).
 */
export default function ProjectCard({ project, span = 4, showNumber = true }) {
  return (
    <Link to={`/work/${project.slug}`} className={`project-card col-desktop-${span} col-mobile-4`}>
      <div className="project-card__image">
        <ImageFrame src={project.thumbnail} alt={project.title} ratio={project.ratio || '4/3'} />
      </div>
      <div className="project-card__meta">
        {showNumber && <span className="project-card__number">{project.id}</span>}
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__category">
          {project.category} / {project.year}
        </span>
      </div>
    </Link>
  )
}
