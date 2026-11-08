import {test} from 'node:test'
import assert from 'node:assert/strict'
import {mkdtemp,mkdir,copyFile,writeFile,readFile,rm} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import {join} from 'node:path'
import {spawnSync} from 'node:child_process'
const root=new URL('../',import.meta.url)
async function fixture(mode) {
 const dir=await mkdtemp(join(tmpdir(),'hanbee-sync-'))
 for(const name of ['scripts','shared','src/data']) await mkdir(join(dir,name),{recursive:true})
 for(const file of ['scripts/sync-content.mjs','shared/content.mjs','cms.config.json']) await copyFile(new URL(file,root),join(dir,file))
 await writeFile(join(dir,'src/data/content.json'),'LAST_GOOD_SNAPSHOT')
 const data=JSON.parse(await readFile(new URL('src/data/content.json',root)))
 data.projects=[{...data.projects[0],thumbnail:'https://cdn.sanity.io/images/2skavp89/production/test.jpg',heroImage:'',content:[]}];data.archiveItems=[]
 await writeFile(join(dir,'mock.mjs'),`globalThis.fetch=async(url)=>{if(String(url).includes('/data/query/')) return new Response(JSON.stringify(${JSON.stringify(mode==='error'?{error:{description:'Unavailable'}}:{result:data})}),{status:${mode==='error'?503:200}});return new Response('broken',{status:503})}`)
 const result=spawnSync(process.execPath,['--import',join(dir,'mock.mjs'),'scripts/sync-content.mjs'],{cwd:dir,env:{...process.env,SANITY_PROJECT_ID:'2skavp89'}})
 const snapshot=await readFile(join(dir,'src/data/content.json'),'utf8');await rm(dir,{recursive:true,force:true});return {result,snapshot}
}
test('CMS 장애 시 실패하며 마지막 스냅샷을 덮어쓰지 않음',async()=>{const {result,snapshot}=await fixture('error');assert.notEqual(result.status,0);assert.equal(snapshot,'LAST_GOOD_SNAPSHOT')})
test('파일 다운로드 장애 시도 기존 스냅샷 보존',async()=>{const {result,snapshot}=await fixture('asset-error');assert.notEqual(result.status,0);assert.equal(snapshot,'LAST_GOOD_SNAPSHOT')})
