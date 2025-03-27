import React from 'react'
import { motion, useTransform } from 'motion/react'

const SlideTransitionTopBottom = ({children, scrollYProgress}) => {

    const y = useTransform(scrollYProgress, [1,0], [-2000, 0])

    return (
        <div className='content-slide'>
            <motion.div
                className='slide slide-img'
                initial='hidden'
                whileInView='visible'
                style={{
                    originY: 0,
                    y,
                    backgroundColor: 'red',
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default SlideTransitionTopBottom