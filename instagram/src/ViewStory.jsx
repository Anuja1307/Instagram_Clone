import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams,Link ,useNavigate} from 'react-router';

function ViewStory() {

    const [story,setStory]=useState(null);

    const {id}=useParams(); //this id  changes for every story 
    const {tot}=useParams();

    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:3000/stories/${id}`).
        then(response=>response.json()).
        then(data=>setStory(data)).
        catch(err=>console.log(err))
    },[id])//because to trigger left and right scroll set dependency to id 



   if(id>tot||id<=0){
            navigate("/") //when story list is over navigate to home
   }
  return (
    <div>
        {story?(
   
            <div className='d-flex justify-content-center align-items-center'>
                <Link to={`/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill "></i></Link>
                <img src={story.image} alt="" className='vh-100' />
                <Link to={`/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill "></i></Link>
            </div>
        ):(<p>Loading</p>)}

    </div>
  )
}

export default ViewStory