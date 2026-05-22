import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Story() {

  const [stories,setStories]=useState([])

  const navigate=useNavigate();

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
                <div key={story.id} onClick={()=>navigate(`/story/${story.id}/${stories.length}`)}>
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