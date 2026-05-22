import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';

export default function Profile() {

  const [profile,setProfile]=useState(null);
  const [followers,setFollowers]=useState([]);
  const [unfollow,setUnfollow]=useState(0);

  useEffect(()=>{
    axios.get("http://localhost:3000/profile")
    .then(data=>setProfile(data.data))
    .catch(err=>console.log(err))

    axios.get("http://localhost:3000/followers")
    .then(data=>setFollowers(data.data))
    .catch(err=>console.log(err))
  },[unfollow])

  function handleOnChange(e){
    setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        })
    )
  }

 const handleUnfollow=async (id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`)
    .then(alert("Unfollowed"))
    .then(setUnfollow(!unfollow))
    .catch(err=>console.log(err))
 }

  const handleUpdate=async ()=>{
    axios.put("http://localhost:3000/profile",profile)
    .then(console.log("Updated"))
    .catch("failed")
  }

  return (
    <div className='m-5'>
        {
            profile?(

                <div >
                    <img src={profile.profile_pic} alt="" className='profile rounded-circle' />
                    <h5 className>{profile.username}</h5>

                    <input type="text" name="username" id="" value={profile.username} className='form-control m-2' onChange={handleOnChange}/>
                    <input type="text" name="profile_pic" value={profile.profile_pic} className='form-control m-2' onChange={handleOnChange} />

                    <button className='btn btn-primary' onClick={handleUpdate}>Update</button>
                </div>


            ):(<p>Loading </p>)
        }
        <div style={{width:"300px", marginTop:"15px",marginBottom:"5px", fontWeight:"bolder"}}>FOLLOWERS</div>
        {
            followers.length>0?(
                <div>
                   {
                    followers.map(follower=>(
                        <div className='d-flex justify-content-between m-2'> 
                            <div >
                                <img src={follower.profile_pic} alt="" key={follower.id} className='rounded-circle dp' />
                                <small>{follower.username}</small>
                            </div>

                            <button onClick={()=>handleUnfollow(follower.id)}className='btn btn-secondary'>Unfollow</button>
                        </div>
                    

                    ))
                   }
                </div>

                
            ):(<div>Loading Followers</div>)

            


        }


    </div>
  )
}
