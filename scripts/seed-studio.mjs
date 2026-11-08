import {readFile} from 'node:fs/promises'
import {DOCUMENT_ID} from '../shared/content.mjs'
const {SANITY_PROJECT_ID:project,SANITY_WRITE_TOKEN:token} = process.env
const dataset = process.env.SANITY_DATASET || 'production'
if (!/^[a-z0-9]+$/.test(project || '') || !/^[\w-]+$/.test(dataset) || !token) throw Error('프로젝트 ID와 초기 이관용 쓰기 토큰이 필요합니다.')
const source=JSON.parse(await readFile(new URL('../src/data/content.json',import.meta.url),'utf8'))
const list=items=>items.map((item,i)=>({...item,_type:'workItem',_key:`item-${i}`,content:(item.content || []).map((b,j)=>({...b,_key:`block-${j}`,_type:b.type==='vimeo'?'vimeo':b.type==='text'?'textBlock':'legacyImage'}))}))
const document={_id:DOCUMENT_ID,_type:'portfolio',siteInfo:{...source.siteInfo,_type:'siteSettings'},projects:list(source.projects),archiveItems:list(source.archiveItems)}
const res=await fetch(`https://${project}.api.sanity.io/v2025-02-19/data/mutate/${dataset}`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({mutations:[{createIfNotExists:document}]}),signal:AbortSignal.timeout(30000)})
if (!res.ok) throw Error(`초기 이관 실패 (${res.status})`)
console.log('기존 게시물을 보존하며 초기 콘텐츠를 준비했습니다. 쓰기 토큰은 이제 폐기하세요.')
