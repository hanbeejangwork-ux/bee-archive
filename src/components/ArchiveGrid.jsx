import Media from './Media.jsx'
import { Link } from 'react-router-dom'

function ArchiveTile({ item }) {
  return (
    <Link to={`/archive/${item.slug}`} className="archive-tile">
      <div className="archive-tile__layer archive-tile__layer--image">
        <Media src={item.thumbnail} alt={item.title} />
      </div>

      <div
        className="archive-tile__layer archive-tile__layer--hover"
        style={{ background: item.archiveColor || '#d9d9d9' }}
      >
        <span className="archive-tile__number">{item.id}</span>
        <span className="archive-tile__title">{item.title}</span>
        <span className="archive-tile__meta">
          {item.category} / {item.year}
        </span>
      </div>
    </Link>
  )
}

export default function ArchiveGrid({ items }) {
  return (
    <div className="archive-grid">
      {items.map((item) => (
        <ArchiveTile key={item.id} item={item} />
      ))}
    </div>
  )
}
