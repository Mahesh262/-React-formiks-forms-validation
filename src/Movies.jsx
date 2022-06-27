import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Movies = () => {
    const [data, setData]= useState([])
    useEffect(()=>{
     axios.get("https://hoblist.com/api/movieList").then(res=>console.log(res.data)).catch(error=>console.log(error))
    },[])
  return (
    <>Movies</>
  )
}

export default Movies