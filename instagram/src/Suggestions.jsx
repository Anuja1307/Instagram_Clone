import React, { useState,useEffect } from 'react'
import axios from 'axios';

function Suggestions() {

  const [profile,setProfile]=useState(null);
  const [suggestions,setSuggestions]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/profile").
    then((response)=>response.json()).
    then((data)=>setProfile(data)).
    catch((err)=>console.log(err))

    fetch("http://localhost:3000/suggestions").
    then((response)=>response.json()).
    then((data)=>setSuggestions(data)).
    catch((err)=>console.log(err))

  },[])

  const handleFollow=async (id,username,profile_pic)=>{
     axios.post('http://localhost:3000/followers',{"id":id,"username":username,"profile_pic":profile_pic})
     .then(alert('followed'))
    
  }


  return (
    <div>
      {profile?
            (
            
              <div className='suggestions'>
                    <div className='d-flex align-items-center justify-content-between mx-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <img src={profile.profile_pic} alt="" className='dp rounded-circle'/>
                            <small style={{fontWeight:"bold", fontSize:"15px"}}>{profile.username}</small>
                        </div>
                    <small style={{color:"#0095f6", fontWeight:"bold", cursor:"pointer"}}>Switch</small>
                   </div>
                <div>
                    <p className='mx-3' style={{display:"inline-block"}}>Suggested for you</p>
                    <b style={{marginLeft:"80px"}}>See all</b>
                </div>

        <div className='my-3'>
              {suggestions.map(user => (
                  <div key={user.id} className='my-2 d-flex align-items-center justify-content-between mx-2'>
                      <div className='d-flex align-items-center gap-2'>
                          <img src={user.profile_pic} alt="" className='dp rounded-circle'/>
                          <small style={{fontWeight:"bold"}}>{user.username}</small>
                      </div>
                      <button style={{color:"#0095f6", fontWeight:"bold", cursor:"pointer"}} onClick={()=>handleFollow(user.id,user.username,user.profile_pic)

                      }>Follow</button>
                  </div>
              ))}
        </div>
               
            
              


              </div>
            
            )
            :
            <p>Loading</p>
      }
    
      
    </div>
  )
}

export default Suggestions