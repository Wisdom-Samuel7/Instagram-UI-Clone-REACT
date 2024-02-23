import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import TelegramIcon from '@mui/icons-material/Telegram'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'


export default function Post({user,image,likes,times}) {
  return (
    <div className='post'>
   
     <div className='post_header'>

         <div className='post_headerAuthor'>
            <Avatar className='avatar'>{user.charAt(0).toUpperCase()}</Avatar>
            {user} <span>{times}</span>
         </div>

         <MoreHorizIcon/>
         
     </div>

       <div className='post_image'> 
         <img src={image} alt=''/>
       </div>

        <div className='post_footer'> 
          <div className='footer_icons'>
            <div className='post_iconsMain'>
              <FavoriteBorderIcon style={{color:'red',fill:"red"}}/>
              <ChatBubbleOutlineIcon/>
              <TelegramIcon/>
            </div>

            <div className='post_iconSave'>
             <BookmarkBorderIcon style={{color:"red"}}/>
            </div>

          </div>
          Liked by {likes}
        </div>
    </div>
  )
}
