import ArchiveGrid from '../components/ArchiveGrid.jsx'
import { archiveItems } from '../data/archive.js'

// Independent from projects.js on purpose — Archive holds personal work
// and is never affected by adding/editing entries in projects.js.
export default function Archive() {
  return (
    <section className="archive-page">
      <ArchiveGrid items={archiveItems} />
    </section>
  )
}
