import React, { useRef } from 'react'
import { useScroll } from 'motion/react'
import SlideTransition from './SlideTransition'
import ContentIntro from './ContentIntro'

const WrapperIntro = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    return (
        <div className='space-slide' ref={ref}>
            <div className='wrapper-intro'>
                <SlideTransition scrollYProgress={scrollYProgress}/>
                <ContentIntro/>
            </div>
        </div>
    )
}

export default WrapperIntro