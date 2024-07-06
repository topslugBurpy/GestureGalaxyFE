import React from 'react'
import './HeroSection.css'
import '../Cards/CardView'
import CardView from '../Cards/CardView'

const HeroSection = () => {
  return (
   <div className="main">
    <div className="nav">
      <b>Gesture Galaxy</b>
      <p className='para'>Welcome to Gesture Galaxy, the ultimate gaming center where your hands do the talking! Dive into a world of fun where keyboards and mice are old news. Play your favorite games online using just hand gestures. Ready to level up? Your adventure starts here! 🚀🕹️</p>
    </div>
    <CardView />
    
   </div>
  )
}

export default HeroSection