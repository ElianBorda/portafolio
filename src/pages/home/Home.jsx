import React, { use, useEffect, useRef } from 'react'
import './home.css'
import Loading from '../../assets/components/loading/Loading'
import WrapperIntro from './util/WrapperIntro'
import WrapperAbout from './util/WrapperAbout'
import imgdiv2 from '../../assets/imgs/imgDiv2.jpg'
import ViewTechnologies from './util/ViewTechnologies'


const Home = () => {
  
/** 
 * Debo tener una seccion de Intro, About, Technologies, Projects, Services, Contact
 * 
*/

  return (
    <>
      <Loading />
      <WrapperIntro/>
      <WrapperAbout/>
      <ViewTechnologies/>
    </> 
  )
}

export default Home