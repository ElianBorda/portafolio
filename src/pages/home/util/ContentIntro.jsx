import React from 'react'
import vid2 from '../../../assets/videos/video2.mp4'

const ContentIntro = () => {
  return (
        <>
          <div className='block-vid'>
            {/* <VideoCarrousel videos={videos} /> */}
            <video autoPlay loop muted playsInline>
              <source src={vid2} type='video/mp4'></source>
            </video>
          </div>
          <div className='block-intro'>
            <h1>ELIAN BORDA</h1>
            <p>Desarrollador profesional</p>
          </div>
        </>
    )
}

export default ContentIntro