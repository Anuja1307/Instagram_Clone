import React from 'react'

function Sidebar() {
  return (
    <>
    <div>
        <div className='d-flex flex-column gap-4 position-fixed'> 
                <img src="./src/assets/instagram_text.png" alt="" style={{width:'180px'}}/>
                <div> <i class="bi bi-house-door-fill"></i> Home</div>
                <div> <i class="bi bi-search"></i> Search</div>
                <div> <i class="bi bi-compass"></i> Explore</div>
                <div> <i class="bi bi-play-btn"></i> Reels</div>
                <div><i class="bi bi-chat-dots"></i> Messages</div>
                <div><i class="bi bi-heart"></i> Notifications</div>
                <div><i class="bi bi-plus-square"></i>Create</div>
                <div><i class="bi bi-person-circle"></i> Profile</div>
         </div>

          <div className='d-flex flex-column gap-3 position fixed-bottom'>
            <div><i class="bi bi-threads"></i>Threads</div>
            <div className='my-2'><i class="bi bi-list "></i>More</div>
         </div>
    </div>
         


    </>

  )
}

export default Sidebar