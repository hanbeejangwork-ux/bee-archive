export const DOCUMENT_ID = 'hanbee-portfolio'
export function mediaUrl(media, legacy = '') {
  return (media?.kind === 'video' ? media?.video?.asset?.url : media?.image?.asset?.url) || media?.url || legacy || ''
}
export function normalize(doc) {
  if (!doc || !Array.isArray(doc.projects) || !Array.isArray(doc.archiveItems) || !doc.siteInfo) throw Error('게시 문서가 올바르지 않습니다.')
  if (typeof doc.siteInfo.name !== 'string' || typeof doc.siteInfo.homeIntro !== 'string') throw Error('사이트 이름과 홈 제목을 확인해주세요.')
  const ordered = (items, order = []) => [...items].sort((a,b) => {const slug=x=>typeof x.slug==='string'?x.slug:x.slug?.current;const rank=x=>{const i=order.indexOf(slug(x));return i<0?order.length+items.indexOf(x):i};return rank(a)-rank(b)})
  const list = (items) => items.map((item, index) => ({
    ...item, slug: typeof item.slug === 'string' ? item.slug : item.slug?.current, id: String(index + 1).padStart(2, '0'), tools: item.tools || [],
    thumbnail: mediaUrl(item.cover, (item.thumbnailType==='video' ? item.thumbnailVideo?.asset?.url : '') || item.thumbnailImage?.asset?.url || item.thumbnail || item.legacyThumbnail), heroImage: mediaUrl(item.hero, (item.heroType==='video' ? item.heroVideo?.asset?.url : '') || item.heroImageAsset?.asset?.url || item.heroImage || item.legacyHeroImage),
    content: (item.content || []).map(block => {
      const type = block._type === 'portfolioBlock' ? block.type : block._type || block.type
      if (type === 'mediaBlock') return {type: 'image', src: mediaUrl(block.media), size: block.size || 'full', ratio: block.ratio || '16/9'}
      if (type === 'textBlock' || type === 'text') return {type: 'text', text: block.text || '', size: block.size || 'medium'}
      if (type === 'vimeo') return {type: 'vimeo', url: embedUrl(block.url) || block.url}
      return {type: 'image', src: (type==='video' ? block.video?.asset?.url : block.image?.asset?.url) || block.src || block.legacySrc || '', size: block.size || 'full', ratio: block.ratio || '16/9'}
    }),
  }))
  const result = {siteInfo: {...doc.siteInfo, navigation: doc.siteInfo.navigation || {home:'HOME',work:'WORK',archive:'ARCHIVE'},
    heroImage: mediaUrl(doc.siteInfo.hero, doc.siteInfo.heroImageAsset?.asset?.url || doc.siteInfo.heroImage || doc.siteInfo.legacyHeroImage),
    aboutHeroImage: mediaUrl(doc.siteInfo.aboutHero, doc.siteInfo.aboutHeroImageAsset?.asset?.url || doc.siteInfo.aboutHeroImage || doc.siteInfo.legacyAboutHeroImage)},
    projects: list(ordered(doc.projects,doc.order?.work)), archiveItems: list(ordered(doc.archiveItems,doc.order?.archive))}
  for (const items of [result.projects, result.archiveItems]) {
    const slugs = new Set()
    for (const item of items) {
      if (!item.title || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug) || slugs.has(item.slug)) throw Error('작업 제목과 중복되지 않는 영문 주소를 확인해주세요.')
      slugs.add(item.slug)
      for (const block of item.content) if (block.type === 'vimeo' && !isEmbed(block.url)) throw Error('Vimeo/YouTube 영상 주소를 확인해주세요.')
    }
  }
  for (const value of [result.siteInfo.heroImage, result.siteInfo.aboutHeroImage, ...[...result.projects, ...result.archiveItems].flatMap(p => [p.thumbnail, p.heroImage, ...p.content.filter(b => b.type === 'image').map(b => b.src)])]) {
    if (value && !(value.startsWith('/images/') || value.startsWith('/cms/') || /^https:\/\//.test(value))) throw Error('안전하지 않은 미디어 주소입니다.')
  }
  return result
}
export function embedUrl(value) {
  try {
    const u = new URL(value)
    if (u.protocol !== 'https:' && u.protocol !== 'http:') return null
    if (u.hostname === 'player.vimeo.com' && /^\/video\/\d+$/.test(u.pathname)) {u.protocol='https:';return u.href}
    if (['vimeo.com','www.vimeo.com'].includes(u.hostname) && /^\/\d+(?:\/[a-zA-Z0-9]+)?\/?$/.test(u.pathname)) {
      const [,id,hash]=u.pathname.split('/');return `https://player.vimeo.com/video/${id}${hash?'?h='+encodeURIComponent(hash):''}`
    }
    let id
    if (u.hostname === 'youtu.be') id=u.pathname.slice(1).split('/')[0]
    else if (['youtube.com','www.youtube.com','m.youtube.com','www.youtube-nocookie.com'].includes(u.hostname)) {
      id = u.pathname === '/watch' ? u.searchParams.get('v') : u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]+)\/?$/)?.[1]
    }
    if (!id || !/^[\w-]{6,}$/.test(id)) return null
    const start=u.searchParams.get('start') || u.searchParams.get('t')
    const match=start?.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/)
    const seconds=/^\d+$/.test(start || '')?Number(start):match?Number(match[1]||0)*3600+Number(match[2]||0)*60+Number(match[3]||0):0
    return `https://www.youtube-nocookie.com/embed/${id}${seconds?'?start='+seconds:''}`
  } catch {return null}
}
export function isEmbed(value) {return !!embedUrl(value)}
