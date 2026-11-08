import content from './content.json'
export const projects = content.projects
export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
export const getSortedProjects = (order = 'newest') => order === 'oldest' ? [...projects].reverse() : [...projects]
