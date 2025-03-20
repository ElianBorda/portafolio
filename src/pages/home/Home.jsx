import React, { use, useRef } from 'react'
import './home.css'
import vid1 from '../../assets/videos/video1.mp4'
import vid2 from '../../assets/videos/video2.mp4'
import vid3 from '../../assets/videos/video3.mp4'
import VideoCarrousel from '../../assets/components/VideoCarrousel'
import Loading from '../../assets/components/loading/Loading'
import { motion, useScroll, useTransform } from 'motion/react'
import ContentIntro from './util/ContentIntro'
import SlideTransition from './util/SlideTransition'

const Home = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  // const scaleY = useTransform(scrollYProgress, [1,0], [, 0])
  // const scaleX = useTransform(scrollYProgress, [1,0], [, 0])
  
  return (
    <>
      <Loading />
      {/* <div className='wrapper'> */}
        <div className='space-slide' ref={ref}>
          <div className='wrapper-intro'>
            <SlideTransition scrollYProgress={scrollYProgress}/>
            <ContentIntro/>
          </div>
        </div>
        <div className='space-slide-2'>
          
        </div>
        

      {/* </div> */}
    </>
  )
}

export default Home