import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData();
    // const [data , setdata] = useState([]); 
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/bharatkhatwani')
    //     .then(response => response.json() )
    //     .then(data => setdata(data))
    // })
  return (
    <div className='m-4 p-4 text-center text-white bg-gray-500 text-3xl '>
      Github Followers : {data.followers}
      <img src =  {data.avatar_url} alt = "Git picture " width = {300}/>
       
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch ('https://api.github.com/users/bharatkhatwani') 
   return response.json();
}