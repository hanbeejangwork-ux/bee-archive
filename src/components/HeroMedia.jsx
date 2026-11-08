import Media from './Media.jsx'
export default function HeroMedia({src,alt='HERO IMAGE'}) {
  return <div className="hero-media"><Media src={src} alt={alt} eager/></div>
}
