import {writeFile, mkdir, rename, readFile} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {normalize, DOCUMENT_ID} from '../shared/content.mjs'
const config = JSON.parse(await readFile(new URL('../cms.config.json', import.meta.url),'utf8'))
const project = process.env.SANITY_PROJECT_ID || config.projectId
const dataset = process.env.SANITY_DATASET || config.dataset || 'production'
const token = process.env.SANITY_READ_TOKEN
if (!project) { console.log('CMS 미연결: 저장소의 기존 콘텐츠로 빌드합니다.'); process.exit(0) }
if (!/^[a-z0-9]+$/.test(project) || !/^[\w-]+$/.test(dataset)) throw Error('CMS 설정을 확인해주세요. 기존 배포는 유지됩니다.')
const mediaProjection = `...,image{asset->},video{asset->}`
const singletonItem = `...,cover{${mediaProjection}},hero{${mediaProjection}},content[]{...,media{${mediaProjection}}}`
const existingItem = `...,thumbnailImage{asset->},heroImageAsset{asset->},content[]{...,image{asset->},video{asset->}}`
const query = (process.env.SANITY_DOCUMENT_MODE || config.documentMode) === 'singleton'
 ? `*[_id == "${DOCUMENT_ID}"][0]{...,siteInfo{...,hero{${mediaProjection}},aboutHero{${mediaProjection}}},projects[]{${singletonItem}},archiveItems[]{${singletonItem}}}`
 : `{"siteInfo": *[_type == "siteSettings"][0]{...,heroImageAsset{asset->},aboutHeroImageAsset{asset->}},"projects": (*[_type == "project"] | order(sortOrder asc, id asc))[]{${existingItem}},"archiveItems": (*[_type == "archiveItem"] | order(sortOrder asc, id asc))[]{${existingItem}}}`

const response = await fetch(`https://${project}.api.sanity.io/v2025-02-19/data/query/${dataset}?perspective=published&query=${encodeURIComponent(query)}`, {headers:token ? {Authorization:`Bearer ${token}`} : {},signal:AbortSignal.timeout(30000)})
if (!response.ok) {const detail = await response.json().catch(()=>({})); throw Error(`CMS 읽기 실패 (${response.status}): ${detail.error?.description || "연결 실패"}. 기존 배포는 유지됩니다.`)}
const payload = await response.json()
const data = normalize(payload.result)
// CMS의 파일도 배포에 복사해서 방문 시 CMS API/스토리지에 의존하지 않습니다.
await mkdir('public/cms', {recursive:true})
const cache = new Map()
async function localize(url) {
  if (!url || url.startsWith('/')) return url
  if (cache.has(url)) return cache.get(url)
  const parsed = new URL(url)
  if (parsed.hostname !== 'cdn.sanity.io' || !parsed.pathname.startsWith(`/`) || !parsed.pathname.includes(`/${project}/${dataset}/`)) throw Error('업로드한 파일 또는 기존 /images/ 경로만 사용해주세요.')
  const ext = parsed.pathname.split('.').pop().toLowerCase()
  if (!['jpg','jpeg','png','webp','gif','avif','mp4','webm'].includes(ext)) throw Error('지원하지 않는 미디어 형식입니다.')
  const res = await fetch(url,{redirect:'error',signal:AbortSignal.timeout(60000)})
  if (!res.ok) throw Error(`미디어 다운로드 실패 (${res.status})`)
  const chunks = []; let size = 0
  for await (const chunk of res.body) {size += chunk.length; if (size > 25*1024*1024) throw Error('파일은 25MB 이하로 줄여주세요.'); chunks.push(chunk)}
  const bytes = Buffer.concat(chunks)
  const path = `/cms/${createHash('sha256').update(bytes).digest('hex')}.${ext}`
  await writeFile(`public${path}`,bytes); cache.set(url,path); return path
}
data.siteInfo.heroImage = await localize(data.siteInfo.heroImage)
data.siteInfo.aboutHeroImage = await localize(data.siteInfo.aboutHeroImage)
for (const item of [...data.projects,...data.archiveItems]) {
  item.thumbnail = await localize(item.thumbnail); item.heroImage = await localize(item.heroImage)
  for (const block of item.content) if (block.type === 'image') block.src = await localize(block.src)
}
// 민감한 설정이나 Sanity 원본 문서는 공개 번들에 넣지 않습니다.
const cleanItem = p => Object.fromEntries(['id','slug','title','category','year','role','tools','archiveColor','thumbnail','heroImage','ratio','description','content'].map(k => [k,p[k]]))
const {hero,aboutHero,...siteInfo} = data.siteInfo
const snapshot = {siteInfo,projects:data.projects.map(cleanItem),archiveItems:data.archiveItems.map(cleanItem)}
await writeFile('src/data/content.json.tmp',JSON.stringify(snapshot,null,2))
await rename('src/data/content.json.tmp','src/data/content.json')
console.log('게시된 콘텐츠와 미디어를 배포본에 저장했습니다.')
