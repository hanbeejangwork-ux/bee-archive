import content from './content.json'
export const archiveItems = content.archiveItems
export const getArchiveItemBySlug = slug => archiveItems.find(item => item.slug === slug)
