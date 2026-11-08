import {test} from 'node:test'
import assert from 'node:assert/strict'
import {normalize,isEmbed} from '../shared/content.mjs'
import {readFile} from 'node:fs/promises'
const baseline=JSON.parse(await readFile(new URL('../src/data/content.json',import.meta.url)))
test('현재 공개 작업물, 영상 링크와 수동 순서 보존',()=>{
 const data=normalize(baseline)
 assert.deepEqual(data.projects.slice(0,3).map(p=>p.title),['ABC UI LOOPING','vermond','Nice travel'])
 assert.ok(data.projects[0].content.some(b=>b.type==='vimeo'))
 const reversed=normalize({...baseline,projects:[...baseline.projects].reverse()})
 assert.equal(reversed.projects[0].slug,baseline.projects.at(-1).slug)
 assert.equal(reversed.projects[0].id,'01')
})
test('CMS 업로드와 기존 미디어, 문구를 혼합할 수 있음',()=>{
 const project={...baseline.projects[0],cover:{kind:'video',video:{asset:{url:'https://cdn.sanity.io/files/test/production/abc.mp4'}}},content:[{_type:'mediaBlock',media:{image:{asset:{url:'https://cdn.sanity.io/images/test/production/a.gif'}}}}, {_type:'textBlock',text:'설명'}]}
 const result=normalize({...baseline,projects:[project]}).projects[0]
 assert.ok(result.thumbnail.endsWith('.mp4'));assert.ok(result.content[0].src.endsWith('.gif'));assert.equal(result.content[1].type,'text')
})
test('잘못된 문서, 중복 주소, 악성 iframe 주소를 거부',()=>{
 assert.throws(()=>normalize(null))
 assert.throws(()=>normalize({...baseline,projects:[baseline.projects[0],baseline.projects[0]]}))
 assert.throws(()=>normalize({...baseline,projects:[{...baseline.projects[0],content:[{type:'vimeo',url:'javascript:alert(1)'}]}]}))
 assert.equal(isEmbed('https://player.vimeo.com/video/1106134318?autopause=0'),true)
 assert.equal(isEmbed('https://www.youtube-nocookie.com/embed/abc-def'),true)
 assert.equal(isEmbed('https://player.vimeo.com.evil.test/video/123'),false)
})
test('초기 스냅샷은 모든 기존 작업과 아카이브를 포함',()=>{
 assert.equal(baseline.projects.length,12);assert.ok(baseline.archiveItems.length>0)
 assert.equal(baseline.siteInfo.name,'HANBEE JANG')
})
test('이미 계정에 있는 관리 화면의 문서 형식을 읽음',()=>{
 const item={...baseline.projects[0],slug:{current:'existing-project'},thumbnail:undefined,thumbnailImage:{asset:{url:'https://cdn.sanity.io/images/p/production/cover.jpg'}},content:[{_type:'portfolioBlock',type:'vimeo',url:'https://player.vimeo.com/video/123'},{_type:'portfolioBlock',type:'image',image:{asset:{url:'https://cdn.sanity.io/images/p/production/block.jpg'}}}]}
 const result=normalize({...baseline,projects:[item]}).projects[0]
 assert.equal(result.slug,'existing-project');assert.ok(result.thumbnail.endsWith('cover.jpg'));assert.equal(result.content[0].type,'vimeo');assert.ok(result.content[1].src.endsWith('block.jpg'))
})
test('드래그 정렬 문서의 순서와 새 작업의 후순위 유지',()=>{
 const last=baseline.projects.at(-1)
 const data=normalize({...baseline,order:{work:[last.slug]}})
 assert.equal(data.projects[0].slug,last.slug)
 assert.equal(data.projects[1].slug,baseline.projects[0].slug)
})
test('썸네일 영상 형식과 숨겨진 예전 파일을 구분',()=>{
 const item={...baseline.projects[0],thumbnailType:'video',thumbnailVideo:{asset:{url:'https://cdn.sanity.io/files/p/production/loop.mp4'}},content:[{_type:'portfolioBlock',type:'image',video:{asset:{url:'https://cdn.sanity.io/files/p/production/old.mp4'}},image:{asset:{url:'https://cdn.sanity.io/images/p/production/current.jpg'}}}]}
 const result=normalize({...baseline,projects:[item]}).projects[0]
 assert.ok(result.thumbnail.endsWith('loop.mp4'));assert.ok(result.content[0].src.endsWith('current.jpg'))
})
test('유튜브 일반 주소·공유·쇼츠 링크를 영상으로 변환',async()=>{
 const {embedUrl}=await import('../shared/content.mjs')
 assert.equal(embedUrl('https://youtu.be/dQw4w9WgXcQ?si=abc'),'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ')
 assert.equal(embedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1m30s'),'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?start=90')
 assert.equal(embedUrl('https://youtube.com/shorts/dQw4w9WgXcQ'),'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ')
 assert.equal(embedUrl('https://youtube.com.evil.test/watch?v=dQw4w9WgXcQ'),null)
 assert.equal(embedUrl('https://vimeo.com/1106134318'),'https://player.vimeo.com/video/1106134318')
})
