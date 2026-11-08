import Media from './Media.jsx'
export default function ImageFrame({src,alt='',ratio='4/3',className=''}) {
  return <div className={`image-frame ${ratio==='auto'?'image-frame--natural':''} ${className}`} style={{aspectRatio:ratio}}><Media src={src} alt={alt}/></div>
}
