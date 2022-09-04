import React, { useState } from 'react'
import "./profile.css"
import {profileData} from "./profiledata"


function Profile() {
   
    const [userprofile, setprofile]=useState(profileData)

  return (
<div className='profile-sec'>
<div className='container'>
 
 <h2 > Profile app</h2>
 {userprofile.map((Profile)=>(
    <div className='profile'  key={Profile.id}> 

    <div  className='desc'>
        <h4>Name : {Profile.name}</h4>
        <p> job: {Profile.job}</p>
    </div>
    

    
    
     </div>
))}










</div>


</div>
  )
}

export default Profile