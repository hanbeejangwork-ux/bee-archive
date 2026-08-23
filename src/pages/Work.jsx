import { useState, useMemo } from 'react'
import ProjectGrid from '../components/ProjectGrid.jsx'
import { getSortedProjects } from '../data/projects.js'

export default function Work() {
  const [order, setOrder] = useState('newest')
  const projects = useMemo(() => getSortedProjects(order), [order])

  return (
    <section className="section work-archive">
      <div className="grid work-archive__heading">
        <div className="col-desktop-4 col-mobile-4">
          <h1 className="work-archive__title">WORK</h1>
          <p className="work-archive__count">ALL PROJECTS ({projects.length})</p>
        </div>

        <p className="col-desktop-4 col-mobile-4 col-desktop-start-5 work-archive__intro">
          Selected motion, 3D and visual design projects created between 2023–2026.
        </p>

        <div
          className="col-desktop-3 col-mobile-4 col-desktop-start-10 work-archive__sort"
          role="group"
          aria-label="Sort projects"
        >
          <button
            type="button"
            className={`sort-link ${order === 'newest' ? 'is-active' : ''}`}
            onClick={() => setOrder('newest')}
          >
            NEWEST
          </button>
          <button
            type="button"
            className={`sort-link ${order === 'oldest' ? 'is-active' : ''}`}
            onClick={() => setOrder('oldest')}
          >
            OLDEST
          </button>
        </div>
      </div>

      <div className="work-grid-wrap">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}
