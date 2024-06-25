import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import PlayReel from './components/PlayReel'
import LocomotiveScroll from 'locomotive-scroll';
import Images from './components/Images'
import Spread from './components/Spread'



function App() {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' '><Navbar />
      <Landing />
      <Work />
      
      <PlayReel/>
      <Images/>
      <Spread/>
      </div>
  )
}

export default App