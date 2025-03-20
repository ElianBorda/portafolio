import React, { use, useEffect, useRef } from 'react'
import './home.css'
import vid1 from '../../assets/videos/video1.mp4'
import vid2 from '../../assets/videos/video2.mp4'
import vid3 from '../../assets/videos/video3.mp4'
import VideoCarrousel from '../../assets/components/VideoCarrousel'
import Loading from '../../assets/components/loading/Loading'
import { motion, useScroll, useTransform } from 'motion/react'
import ContentIntro from './util/ContentIntro'
import SlideTransition from './util/SlideTransition'
import WrapperIntro from './util/WrapperIntro'
import SlideTransitionTopBottom from './util/SlideTransitionTopBottom'
import ContentAbout from './util/ContentAbout'
import WrapperAbout from './util/WrapperAbout'

const Home = () => {
  
  return (
    <>
      <Loading />
      <WrapperIntro/>
      <WrapperAbout/>
    </>
  )
}

export default Home
