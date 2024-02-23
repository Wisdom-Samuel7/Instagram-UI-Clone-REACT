import React from 'react'
import "./Suggest.css"
import { Avatar } from '@mui/material'

export default function Suggest() {
  return (
    <div className='suggestion'>

      <div className='sugestion_title'>Suggestions for you</div>

{/* ALL SUGGESTIONS TO MAP */}
{/* first */}
      <div className='suggestion_names'>
     
        <div className='username'>
         
         <div className='username_left'>
           <span className='pics'>
              <Avatar></Avatar>
           </span>

            <div className='user_info'>
                <span className='name'>John Nelson</span>
                <span className='relation'>New to instagram</span>
            </div>

         </div>

         <div className='follow'><button>FOLLOW</button></div>

        </div>


      </div>

{/* second */}
   <div className='suggestion_names'>
     
     <div className='username'>
      
      <div className='username_left'>
        <span className='pics'>
           <Avatar></Avatar>
        </span>

         <div className='user_info'>
             <span className='name'>John Nelson</span>
             <span className='relation'>New to instagram</span>
         </div>

      </div>

      <div className='follow'><button>FOLLOW</button></div>

     </div>


   </div>

   {/* third */}

   <div className='suggestion_names'>
     
     <div className='username'>
      
      <div className='username_left'>
        <span className='pics'>
           <Avatar></Avatar>
        </span>

         <div className='user_info'>
             <span className='name'>John Nelson</span>
             <span className='relation'>New to instagram</span>
         </div>

      </div>

      <div className='follow'><button>FOLLOW</button></div>

     </div>


   </div>
  
 {/* ALL SUGGESTIONS TO MAP ENDS HERE */}

    </div>
  )
}
