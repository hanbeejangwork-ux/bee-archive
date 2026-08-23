import ImageFrame from './ImageFrame.jsx'

// Renders one entry from a `content` array
export default function ContentBlock({ block, title }) {
  if (block.type === 'vimeo') {
    return (
      <div className="grid project-detail__block">
        <div className="col-desktop-12 col-mobile-4">
          <div className="video-frame">
            <iframe
              src={block.url}
              title={`${title} video`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    )
  }

  if (block.size === 'medium') {
    return (
      <div className="grid project-detail__block">
        <div className="col-desktop-7 col-mobile-4 col-desktop-start-6">
          <ImageFrame
            src={block.src}
            alt={title}
            ratio={block.ratio || '4/5'}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="grid project-detail__block">
      <div className="col-desktop-12 col-mobile-4">
        <ImageFrame
          src={block.src}
          alt={title}
          ratio={block.ratio || '16/9'}
        />
      </div>
    </div>
  )
}
