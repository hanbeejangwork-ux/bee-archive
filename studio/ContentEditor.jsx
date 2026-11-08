import React, {useEffect, useRef, useState} from 'react'
import {PatchEvent, insert, set, setIfMissing, unset, useClient} from 'sanity'
import {embedUrl} from '../shared/content.mjs'
import './content-editor.css'

const key = () => crypto.randomUUID().replaceAll('-', '')
const labels = {image:'이미지 / GIF', video:'반복 영상', vimeo:'YouTube / Vimeo', text:'설명글'}

export default function ContentEditor({value = [], onChange, readOnly}) {
  const client = useClient({apiVersion:'2025-02-19'})
  const [assets, setAssets] = useState({})
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const imageInput = useRef(null)
  const videoInput = useRef(null)
  const dragging = useRef(null)
  const references = value.map(b => b.image?.asset?._ref || b.video?.asset?._ref).filter(Boolean)
  useEffect(() => {
    let active = true
    if (references.length) client.getDocuments(references).then(docs => {
      if (active) setAssets(Object.fromEntries(docs.filter(Boolean).map(d => [d._id, d.url])))
    }).catch(() => {if (active) setMessage('이미지 미리보기를 불러오지 못했어요. 잠시 뒤 다시 열어주세요.')})
    return () => {active = false}
  }, [client, references.join('|')])
  const patch = patches => onChange(PatchEvent.from(patches))
  const add = block => patch([setIfMissing([]), insert([{_type:'portfolioBlock', _key:key(), size:'full', ratio:'auto', ...block}], 'after', [-1])])
  const update = (id, field, next) => patch([set(next, [{_key:id}, field])])
  const move = (id, target, position = 'before') => {
    if (readOnly || id === target) return
    const block = value.find(b => b._key === id)
    if (block) patch([unset([{_key:id}]), insert([block], position, [{_key:target}])])
  }
  async function upload(files, type) {
    if (!files?.length || readOnly) return
    setBusy(true); setMessage('')
    let uploaded = 0
    try {
      for (const file of files) {
        if (file.size > 25 * 1024 * 1024) throw new Error(`${file.name}: 25MB 이하 파일을 선택해주세요.`)
        const allowed = type === 'image' ? /\.(jpe?g|png|webp|gif|avif)$/i : /\.(mp4|webm)$/i
        if (!allowed.test(file.name)) throw new Error(`${file.name}: 지원하지 않는 파일 형식이에요.`)
        setMessage(`${uploaded + 1}/${files.length} 업로드 중 · ${file.name}`)
        const asset = await client.assets.upload(type === 'image' ? 'image' : 'file', file, {filename:file.name})
        add({type, [type]:{_type:type === 'image' ? 'image' : 'file', asset:{_type:'reference', _ref:asset._id}}})
        uploaded++
      }
      setMessage(`${uploaded}개를 추가했어요. 아래에서 순서를 확인하고 Publish를 눌러주세요.`)
    } catch (error) {setMessage(`${uploaded ? `${uploaded}개는 추가됐어요. ` : ''}${error.message}`)}
    finally {setBusy(false); if (imageInput.current) imageInput.current.value = ''; if (videoInput.current) videoInput.current.value = ''}
  }
  return <div className="story-editor">
    <div className="story-intro"><strong>작업물 상세 페이지</strong><p>이미지와 영상을 크게 쌓고, 사이사이에 설명을 넣으세요. 카드를 끌거나 ↑ ↓로 순서를 바꿀 수 있어요.</p><small>초안은 자동 저장돼요. 사이트에 반영하려면 Publish를 눌러주세요.</small></div>
    <div className="story-add">
      <button type="button" disabled={readOnly || busy} onClick={() => imageInput.current.click()}>＋ 이미지 / GIF 여러 장</button>
      <button type="button" disabled={readOnly || busy} onClick={() => videoInput.current.click()}>＋ 반복 영상</button>
      <button type="button" disabled={readOnly} onClick={() => add({type:'vimeo',url:''})}>＋ YouTube / Vimeo</button>
      <button type="button" disabled={readOnly} onClick={() => add({type:'text',text:''})}>＋ 설명글</button>
      <input ref={imageInput} hidden type="file" multiple accept="image/jpeg,image/png,image/webp,image/gif,image/avif" onChange={e => upload(Array.from(e.target.files), 'image')}/>
      <input ref={videoInput} hidden type="file" multiple accept="video/mp4,video/webm" onChange={e => upload(Array.from(e.target.files), 'video')}/>
    </div>
    {message && <p role="status" className="story-message">{message}</p>}
    {!value.length && <div className="story-empty">위의 ＋ 버튼으로 첫 이미지나 영상을 추가해보세요.</div>}
    {value.map((block, i) => {
      const src = assets[block.image?.asset?._ref || block.video?.asset?._ref] || (block.legacySrc ? `https://bee-archive.vercel.app${block.legacySrc}` : '')
      const player = embedUrl(block.url)
      return <section className="story-card" key={block._key} onDragOver={e => {if (dragging.current) e.preventDefault()}} onDrop={e => {e.preventDefault(); move(dragging.current, block._key); dragging.current = null}}>
        <div className="story-card-head">
          <span draggable={!readOnly} className="story-handle" onDragStart={e => {dragging.current = block._key; e.dataTransfer.setData('text/plain', block._key); e.dataTransfer.effectAllowed = 'move'}} onDragEnd={() => {dragging.current = null}} title="끌어서 순서 바꾸기">⠿</span>
          <strong>{String(i+1).padStart(2,'0')} · {labels[block.type] || '이미지'}</strong>
          <button type="button" disabled={readOnly || i === 0} aria-label={`${i+1}번째 콘텐츠 위로`} onClick={() => move(block._key, value[i-1]._key)}>↑</button>
          <button type="button" disabled={readOnly || i === value.length-1} aria-label={`${i+1}번째 콘텐츠 아래로`} onClick={() => move(block._key, value[i+1]._key,'after')}>↓</button>
          <button type="button" disabled={readOnly} onClick={() => patch([unset([{_key:block._key}])])}>제거</button>
        </div>
        <div className="story-card-body">
          {block.type === 'text' ? <label>설명글<textarea disabled={readOnly} rows={5} value={block.text || ''} placeholder="이 장면에 대한 이야기나 작업 과정을 적어주세요." onChange={e => update(block._key,'text',e.target.value)}/></label> : block.type === 'vimeo' ? <>
            <label>YouTube / Vimeo 링크<input type="url" disabled={readOnly} value={block.url || ''} placeholder="https://youtu.be/…" onChange={e => update(block._key,'url',e.target.value)}/></label>
            {player ? <iframe className="story-player" src={player} title={`영상 미리보기 ${i+1}`} allow="fullscreen; picture-in-picture" allowFullScreen/> : <p className="story-hint">일반 영상 주소를 붙여넣으면 여기에 재생 화면이 나와요.</p>}
          </> : src ? block.type === 'video' ? <video className="story-media" src={src} controls muted loop playsInline/> : <img className="story-media" src={src} alt={`상세 이미지 ${i+1}`} loading="lazy"/> : <p className="story-hint">미리보기 준비 중</p>}
          {block.type !== 'vimeo' && <div className="story-options"><label>표시 너비<select disabled={readOnly} value={block.size || 'full'} onChange={e => update(block._key,'size',e.target.value)}><option value="full">크게 · 전체 너비</option><option value="medium">작게 · 중간 너비</option></select></label>
          {block.type !== 'text' && <label>이미지 비율<select disabled={readOnly} value={block.ratio || '16/9'} onChange={e => update(block._key,'ratio',e.target.value)}><option value="auto">원본 비율 · 자르지 않기</option>{['16/9','4/3','3/4','4/5','1/1'].map(r => <option key={r} value={r}>{r}</option>)}</select></label>}</div>}
        </div>
      </section>
    })}
    {!!value.length && <p className="story-hint">다음 콘텐츠는 위의 ＋ 버튼으로 추가한 뒤 원하는 위치로 옮겨주세요. 파일은 개당 25MB 이하예요.</p>}
  </div>
}
