
import React, { useEffect, useState } from 'react'
import "./style.css";

const Temp = () => {


 const [city,setCity]=useState(null);

 const [search,setSearch]=useState("Mumbai");


 useEffect(()=>{
    
    const fetchApi = async()=>{
 
  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${ search} & units-metric&appid=4cf54cbc9860f071899ee636c478acb1 `    
  const response =  await fetch(url);


  const resjson  = await response.json();
    //console.log(resjson);

    setCity(resjson.main);

    }

  fetchApi();

 },[search])
 


  return (
    <>
    <div  className='box'>

 <div  className='inputData'>

 <input type='search'  value={search} className='inputField' 
   onChange={ (event)=>{ setSearch(event.target.value)

   }} />


 </div>

 {!city ?(
    <p className='errorMsg'> No data found</p>
 )   : (

 <div>
  
<div className='info'> 

<h2 className='location '>  

<i className="fas fa-street-view"> </i>{search}
 </h2>


 <h1 className='temp'>

  
  {city.temp}°Cel


 </h1>


 <h3 className='tempmin_max'>  Min : {city.temp_min} ° Cel | Max : {city.temp_max} ° Cel </h3>


</div>


<div className=' wave_one'> </div>
<div className='wave_two'> </div>
<div className='wave_three'> </div>





</div>




 )

}



</div>

</>

  )
}

export default Temp