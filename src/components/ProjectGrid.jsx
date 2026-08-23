import { useState } from 'react'
import { Link } from 'react-router-dom'

const tones = ['#d9d9d9', '#d6d6d6', '#dcdcdc', '#d4d4d4']

function WorkThumb({ project, tone }) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !project.thumbnail || failed

  return (
    <div className="work-grid__image">
      {showPlaceholder ? (
        <div className="work-grid__placeholder" style={{ background: tone }} />
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function ProjectGrid({ projects }) {
  return (
    <div className="work-grid">
      {projects.map((project, index) => (
        <Link key={project.id} to={`/work/${project.slug}`} className="work-grid__item">
          <WorkThumb project={project} tone={tones[index % tones.length]} />
          <div className="work-grid__caption">
            <span className="work-grid__number">{project.id}</span>
            <span className="work-grid__title">{project.title}</span>
            <span className="work-grid__meta">{project.category}</span>
            <span className="work-grid__meta">{project.year}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
