import React, { useRef } from 'react'
import { motion } from 'motion/react'

const ContainterTechnologies = ({ children, title, constraintsRef }) => {

    return (
        <motion.div className='container-tech' ref={constraintsRef}>
            <h2>{title}</h2>
            { children } 
        </motion.div>
    )
}

export default ContainterTechnologies