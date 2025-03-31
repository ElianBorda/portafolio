import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'


const SlideTransition = ({scrollYProgress}) => {
    

  return (
    <div className='content-slide'>
        <motion.div
        className='slide'
        style={{
            originX: 0,
            scaleX: scrollYProgress
        }}
        />
        <motion.div
        className='slide'
        style={{
            originX: 0,
            scaleX: scrollYProgress
        }}
        />
        <motion.div
        className='slide'
        style={{
            originX: 0,
            scaleX: scrollYProgress
        }}
        />
        <motion.div
        className='slide'
        style={{
            originX: 0,
            scaleX: scrollYProgress
        }}
        />
        <motion.div
        className='slide'
        style={{
            originX: 0,
            scaleX: scrollYProgress
        }}
        />
    </div>
  )
}

export default SlideTransition