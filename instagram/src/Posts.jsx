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
    <div className='display-flex justify-content-center'>
    {posts.length > 0 ? (
    <div>
          <div>
      {
        posts.map(post => (
           <div key={post.id} > 
                <div className='d-flex my-2'>
                  <img src={post.user.profile_pic} alt="profile" className='rounded-circle dp' />
                  <h6 style={{fontWeight:"bold"}}>{post.user.username}</h6>
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