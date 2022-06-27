import { ErrorMessage, useField } from 'formik'
import React from 'react'

const TextField = ({label, ...props}) => {
     const [field, meta] = useField(props);
      
  return (
    <>
    <label htmlFor={field.name}>{label}</label>
    <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
     autoComplete='off'
     {...field}{...props}
     />
    <ErrorMessage component='div' name= {field.name}  style ={{text:"red"}}/>
    </>
  )
}

export default TextField