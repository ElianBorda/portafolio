import React, { useRef } from 'react'
import SlideTransitionTopBottom from './SlideTransitionTopBottom'
import ContentAbout from './ContentAbout'
import { useScroll } from 'motion/react'

const WrapperAbout = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    })

    return (
        <div className='space-slide-2' ref={ref}>
            <div className='wrapper-about'>
            <SlideTransitionTopBottom scrollYProgress={scrollYProgress}/>
            <ContentAbout/>
            </div>
        </div>
    )
}

export default WrapperAbout