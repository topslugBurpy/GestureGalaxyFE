import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import HeadBar from './components/Main/HeadBar'
// import CardView from './components/Cards/CardView'
import HeroSection from './components/HeroSection/HeroSection'
// import { Card } from './Card'

// import { assets } from '../../assets/assets'

const App = () => {
  return (
    <>
      <Sidebar />
      <HeadBar/>
      <HeroSection/>
    </>
  )
}

export default App