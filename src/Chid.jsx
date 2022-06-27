import React from 'react'

const Chid = ({data}) => {
     console.log(data.results.map(items=>console.log(items.name)))
  return (
    <>
    
      {data.results.map((items)=>(
         <li key = {items.name}>{items.name}</li>
      ))
    }

     
    
    
    </>
  )
}

export default Chid