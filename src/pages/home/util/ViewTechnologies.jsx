import React, { useRef } from 'react'
import ContainterTechnologies from './ContainterTechnologies'
import backtech from '../../../assets/imgs/img-tech.webp'
import { motion, useScroll, useTransform } from 'motion/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { DeviconJava, DeviconJavascript, DeviconKotlin, DeviconMongodb, DeviconMysql, DeviconSpring, SkillIconsReactDark } from '../../../assets/components/Icons'


const ViewTechnologies = () => {
     const constraintsRef1 = useRef(null)
     const backRef = useRef(null)
     const { scrollYProgress } = useScroll({
        target: backRef,
        offset: ["start end", "end start"]
     })
     const y = useTransform(scrollYProgress, [0, 1], [150, -150])


    return (
        <div className='slide-technologies' ref={backRef}>
               <div className='wrapper-technologies'>
                    <motion.img className='background-tech' src={backtech} alt="background"
                         style={{
                              y,
                              scale: 1.7,
                         }}
                    />
                    <div className='title-technologies'>
                         <h1>TECNOLOGIAS</h1>
                    </div>
                    <ContainterTechnologies constraintsRef={constraintsRef1}>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <DeviconJava/>                       
                         </motion.div>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <DeviconJavascript/>                        
                         </motion.div>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <DeviconKotlin/>                       
                         </motion.div>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <DeviconMongodb/>                        
                         </motion.div>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <DeviconMysql/>                       
                         </motion.div>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <DeviconSpring/>                       
                         </motion.div>
                         <motion.div className='bubble hover-target' drag dragConstraints={constraintsRef1} dragElastic={0.2}>
                              <SkillIconsReactDark/>                       
                         </motion.div>
                    </ContainterTechnologies>
               </div>
        </div>
    )


}

export default ViewTechnologies