import React from 'react'
import Sidebar from "./navigation/Sidebar"
import Timeline from './timeline/Timeline'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className='homepage'>
       <div className='homepage_nav'>
          <Sidebar/>
       </div>
        
       <div className='homepage_timeline'>
          <Timeline/>
          
       </div>
    </div>
  )
}
