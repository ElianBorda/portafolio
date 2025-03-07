import React from 'react'
import './home.css'
import vid1 from '../../assets/videos/video1.mp4'
import vid2 from '../../assets/videos/video2.mp4'
import vid3 from '../../assets/videos/video3.mp4'
import VideoCarrousel from '../../assets/components/VideoCarrousel'
import Loading from '../../assets/components/loading/Loading'

const Home = () => {

  const videos = {vid1, vid2, vid3}

  return (
    <>
      <Loading />
      <div className='wrapper'>
        <div className='wrapper-intro'>
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
        </div>
        <div className='wrapper-tec'>
          Hola
        </div>
      </div>
    </>
  )
}

export default Home