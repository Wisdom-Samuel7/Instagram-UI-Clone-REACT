import React from 'react'
import './Sidebar.css'

// Icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';



export default function Sidebar() {
  return (
    <div className='sidebar'>
         <img src='data:image/png;base64,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' alt=''/>
      
      <div className='sidebar_btn'>
          <button className='side_btn'>
             <HomeIcon/>
             <span>Home</span>
          </button>

          <button className='side_btn'>
             <SearchIcon/>
             <span>Search</span>
          </button>

          <button className='side_btn'>
             <ExploreIcon/>
             <span>Explore</span>
          </button>

          <button className='side_btn'>
             <SlideshowIcon/>
             <span>Reels</span>
          </button>

          <button className='side_btn'>
             <ChatIcon/>
             <span>Messages</span>
          </button>

          <button className='side_btn'>
             <FavoriteBorderIcon/>
             <span>Notifications</span>
          </button>

          <button className='side_btn'>
             <AddCircleOutlineIcon/>
             <span>Create</span>
          </button>


        <div className='sidebar_menu'>
           <button>
             <MenuIcon/>
           </button>
        </div>

      </div>
    </div>
  )
}
