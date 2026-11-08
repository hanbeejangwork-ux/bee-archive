import {useState,useEffect,useRef} from 'react'
export default function Media({src,alt='',eager=false}) {
  const [failed,setFailed]=useState(false)
  const [visible,setVisible]=useState(eager)
  const ref=useRef(null)
  useEffect(()=>{setFailed(false)},[src])
  useEffect(()=>{
    if (eager || !ref.current || typeof IntersectionObserver==='undefined') {setVisible(true); return}
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{rootMargin:'150px'})
    observer.observe(ref.current);return ()=>observer.disconnect()
  },[eager])
  const video=/\.(mp4|webm)(\?|$)/i.test(src || '')
  useEffect(()=>{
    if (!video || !ref.current) return
    const media=ref.current.querySelector('video')
    if (visible) media?.play()?.catch(()=>{})
    else media?.pause()
  },[visible,video,src])
  return <div ref={ref} style={{width:'100%',height:'100%'}}>
    {!src || failed ? <div className="image-placeholder"><span className="image-placeholder__label">{alt || 'IMAGE'}</span></div> : video ?
      <video src={visible?src:undefined} muted loop autoPlay playsInline controls preload="none" aria-label={alt} onError={()=>setFailed(true)} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/> :
      <img src={src} alt={alt} loading={eager?'eager':'lazy'} onError={()=>setFailed(true)} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>}
  </div>
}
