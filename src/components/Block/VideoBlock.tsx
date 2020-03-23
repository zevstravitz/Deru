import React, {useState, useEffect} from 'react'

type VCProps = {
  id: string;
  link?: string;
}

const VideoBlock: React.FC<VCProps> = (props) => {
  const [videoId, setvideoId] = useState('')
  const [type, setType] = useState('')


  useEffect(() => {
    const videoLink = props.link

    if (videoLink) {
      if (videoLink.substring(0, 16) === 'https://youtu.be') {
        setType('youtube')
        setvideoId(videoLink.substring(17, videoLink.length))
      } 
      else if (videoLink.substring(0, 23) === 'https://www.youtube.com') {
        setType('youtube')
        setvideoId(videoLink.substring(32, videoLink.length))
      }
      else if (videoLink.substring(0, 17) === 'https://vimeo.com') {
        setType('vimeo')
        setvideoId(videoLink.substring(17, videoLink.length))
      }
    }
  }, [props.link])

  if (type === 'youtube') { 
    return (
      <iframe width="560" height="315"
              src={"https://www.youtube.com/embed/" + videoId}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    )
  } else if (type === 'vimeo') {
    return (
      <React.Fragment>
        <div className="outer-youtube">
          <iframe src={'https://player.vimeo.com/video/' + videoId + '?portrait=0'}
                  className='youtube-iframe'
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </React.Fragment>
    )
  } else {
    // figure this out later
      return <div></div>
    }
  }

export default VideoBlock;