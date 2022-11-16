import React from 'react'
import BodyBar from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Player() {
  return (<>
    <div className='flex items-stretch'>
        <Sidebar />
        <BodyBar />
    </div>
    <Footer></Footer>
    </>
  )
}

export default Player