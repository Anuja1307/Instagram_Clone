import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';

export default function Profile() {

  const [profile,setProfile]=useState(null);

  useEffect(()=>{
    axios.get("http://localhost:3000/profile")
    .then(data=>setProfile(data.data))
    .catch(err=>console.log(err))
  },[])

  function handleOnChange(e){
    setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        })
    )
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


    </div>
  )
}
