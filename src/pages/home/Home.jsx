import React, { use, useEffect, useRef } from 'react'
import './home.css'
import Loading from '../../assets/components/loading/Loading'
import WrapperIntro from './util/WrapperIntro'
import WrapperAbout from './util/WrapperAbout'
import imgdiv2 from '../../assets/imgs/imgDiv2.jpg'
import ViewTechnologies from './util/ViewTechnologies'
import CustomCursor from '../../cursor/CustomCursor'
import TextCarrousel from './util/TextCarrousel'


const Home = () => {
  
/** 
 * Debo tener una seccion de Intro, About, Technologies, Projects, Services, Contact
 * 
*/

  return (
    <>
      <Loading />
      <CustomCursor/>
      <WrapperIntro/>
      <WrapperAbout/>
      <ViewTechnologies/>
      <TextCarrousel/>
      
    </> 
  )
}

export default Home