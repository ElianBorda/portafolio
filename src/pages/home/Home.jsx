import React, { use, useRef } from 'react'
import './home.css'
import vid1 from '../../assets/videos/video1.mp4'
import vid2 from '../../assets/videos/video2.mp4'
import vid3 from '../../assets/videos/video3.mp4'
import VideoCarrousel from '../../assets/components/VideoCarrousel'
import Loading from '../../assets/components/loading/Loading'
import { motion, useScroll, useTransform } from 'motion/react'

const Home = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scaleY = useTransform(scrollYProgress, [1, 0], [0, 1])

  return (
    <>
      {/* <Loading /> */}
      <div className='wrapper' >
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

        <div className='container-lines'>
          <motion.div className='line-transition'
            initial={{
              scaleY: 0,
              transformOrigin: 'bottom'
            }}
            style={{
              scaleY: scrollYProgress
            }}
            />
          {/* <motion.div className='line-transition'
            initial={{
              scaleY: 0,
              transformOrigin: 'bottom'
            }}
            animate={{
              scaleY: 1,
              transition: {
                delay: 1.2,
                duration: 0.5
              }
            }}
          />
          <motion.div className='line-transition'
            initial={{
              scaleY: 0,
              transformOrigin: 'bottom'
            }}
            animate={{
              scaleY: 1,
              transition: {
                delay: 1.4,
                duration: 0.5
              }
            }}
          />
          <motion.div className='line-transition'
            initial={{
              scaleY: 0,
              transformOrigin: 'bottom'
            }}
            animate={{
              scaleY: 1,
              transition: {
                delay: 1.6,
                duration: 0.5
              }
            }}
          />
          <motion.div className='line-transition'
            initial={{
              scaleY: 0,
              transformOrigin: 'bottom'
            }}
            animate={{
              scaleY: 1,
              transition: {
                delay: 1.8,
                duration: 0.5
              }
            }}
          /> */}
        </div>

        <div className='wrapper-tec' useRef={ref}>
          Hola
        </div>
      </div>
    </>
  )
}

export default Home