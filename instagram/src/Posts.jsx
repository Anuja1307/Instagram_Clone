import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((response)=>response.json())
    .then((data)=>setPosts(data))
    .catch((err)=>console.log(err))

  },[])


  return ( 
    <div className='d-flex justify-content-center'>
    {posts.length > 0 ? (
    <div>
          <div>
      {
        posts.map(post => (
           <div key={post.id} className='m-5'> 
                <div className='d-flex my-2'>
                  <img src={post.user.profile_pic} alt="profile" className='rounded-circle dp' />
                  <small style={{fontWeight:"bold", fontSize:"15px"}} className='ms-1'>{post.user.username}</small>
                </div>
                <div>
                  <img src={post.image} alt="post" className='post' />
                </div>
                <div>
                  <i class="bi bi-suit-heart"></i>
                  <i class="bi bi-chat"></i>
                  <i class="bi bi-send"></i>
                </div>
                <div>
                  <b>{post.likes} likes</b>
                </div>
                <div>
                  {post.caption}
                </div>
           </div>
        ))
      }    

    </div>
    </div>
    ) : (
    <div>Loading Posts</div>
    )}
    </div>
  )
}

export default Posts