import { useField } from 'formik'
import React from 'react'

const Mycheck = ({children, ...props}) => {
    const [Field,meta] = useField({...props,type:'checkbox'})
  return (

    <>
      <div>
          <label htmlFor='checkbox-input'>
              <input type ='checkbox'{...Field}{...props}/>
              {children}
          </label>
            {meta.touched && meta.error ?(
          <div className='error' style ={{color:"red"}}>{meta.error}</div>):null}
      </div>
    
    
    
    </>
  )
}

export default Mycheck