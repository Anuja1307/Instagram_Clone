import React, { useEffect } from 'react'
import { useState } from 'react'

function Story() {

  const [stories,setStories]=useState([])

  useEffect(()=>{

    fetch("http://localhost:3000/stories").
    then((response)=>response.json()).
    then((data)=>setStories(data)).
    catch(err=>console.log(err))

  },[])


  return (

    <div className='d-flex gap-3 p-3'>
        {stories.length > 0 ? (
            stories.map((story) => (
                <div key={story.id}>
                    <img src={story.user.profile_pic} alt="" className='story-dp rounded-circle'/>
                    <p style={{fontSize:"12px" ,width:"50px"}} className='text-truncate'>{story.user.username}</p>
                </div>
            ))
        ) : (
            <p>Loading</p>
        )}
    </div>
)
  
}

export default Story