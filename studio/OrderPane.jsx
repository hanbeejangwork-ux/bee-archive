import React from 'react'
import {useClient} from 'sanity'
export default function OrderPane() {
 const client=useClient({apiVersion:'2025-02-19'}).withConfig({perspective:'published'})
 const [rows,setRows]=React.useState({work:[],archive:[]}),[rev,setRev]=React.useState(null),[message,setMessage]=React.useState('불러오는 중…'),[busy,setBusy]=React.useState(false)
 const dragged=React.useRef(null)
 React.useEffect(()=>{let active=true;client.fetch('{"work":(*[_type=="project"]|order(sortOrder asc,id asc))[]{_id,title,"slug":slug.current},"archive":(*[_type=="archiveItem"]|order(sortOrder asc,id asc))[]{_id,title,"slug":slug.current},"order":*[_id=="portfolio-order"][0]}').then(data=>{
 if(!active)return
 const sort=(list,order=[])=>[...list].sort((a,b)=>{const rank=x=>{const i=order.indexOf(x.slug);return i<0?order.length+list.indexOf(x):i};return rank(a)-rank(b)})
 setRows({work:sort(data.work,data.order?.work),archive:sort(data.archive,data.order?.archive)});setRev(data.order?._rev || null);setMessage('카드를 끌거나 ↑ ↓ 버튼으로 정렬한 뒤 순서 게시를 눌러주세요.')
 }).catch(()=>{if(active)setMessage('목록을 불러오지 못했어요. 새로고침해주세요.')});return()=>{active=false}},[])
 const move=(key,from,to)=>{if(to<0 || to>=rows[key].length || from===to)return;setRows(prev=>{const list=[...prev[key]];list.splice(to,0,list.splice(from,1)[0]);return {...prev,[key]:list}})}
 const save=async()=>{setBusy(true);try{
 const fields={work:rows.work.map(x=>x.slug),archive:rows.archive.map(x=>x.slug)}
 const result=rev?await client.patch('portfolio-order').ifRevisionId(rev).set(fields).commit():await client.create({_id:'portfolio-order',_type:'portfolioOrder',...fields})
 setRev(result._rev);setMessage('순서를 게시했어요. 자동 배포가 완료되면 포폴에 반영됩니다.')
 }catch{setMessage('저장하지 못했어요. 다른 창에서 수정했거나 연결이 끊겼을 수 있어요. 새로고침 후 다시 시도해주세요.')}finally{setBusy(false)}}
 return <div style={{padding:24,height:'100%',overflow:'auto',background:'#faf9f6',color:'#111',fontFamily:'sans-serif'}}><h1>작업물 순서</h1><p role="status">{message}</p><button disabled={busy || (!rows.work.length && !rows.archive.length)} onClick={save} style={{padding:'12px 22px',background:'#111',color:'white',border:0,cursor:'pointer'}}>{busy?'저장 중…':'순서 게시'}</button>
 {Object.entries(rows).map(([key,list])=><section key={key}><h2>{key==='work'?'WORK · 앞의 4개는 홈에 표시':'ARCHIVE'}</h2>{list.map((row,index)=><div key={row._id} draggable={!busy} onDragStart={()=>{dragged.current={key,index}}} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();if(dragged.current?.key===key)move(key,dragged.current.index,index);dragged.current=null}} style={{display:'flex',alignItems:'center',gap:12,borderTop:'1px solid #ccc',padding:'16px 0',cursor:'grab'}}><span aria-hidden>⠿</span><span>{String(index+1).padStart(2,'0')}</span><strong style={{flex:1}}>{row.title}</strong><button disabled={busy||index===0} aria-label={`${row.title} 위로`} onClick={()=>move(key,index,index-1)}>↑</button><button disabled={busy||index===list.length-1} aria-label={`${row.title} 아래로`} onClick={()=>move(key,index,index+1)}>↓</button></div>)}</section>)}</div>
}
