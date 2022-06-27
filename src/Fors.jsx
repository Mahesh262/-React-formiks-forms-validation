import { Typography } from 'antd'
 import TextField from './TextField'
import {Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Mycheck from './Mycheck'
import MyRadio from './MyRadio'


const Fors = () => {
     const validate=Yup.object({
         email: Yup.string()
         .max(15, 'amximun 16 chartcters')
         .required("Required"),
         LastName: Yup.string()
           .max(16, "Max charcters")
           .required("Required"),

          acceptTerms:Yup.boolean()
          .required('Required')
          .oneOf([true],"You must accept terms and conditions"),
          
        
     })
      
  return (
    <>
    Fors
    <Formik
    initialValues={{
        email:"",
        LastName:"",
        password:"",
        gender:"",
        acceptTerms:false,
    }}
     validationSchema={validate}
    onSubmit={values=>{
        console.log(values)
        alert("Form is Submitted")
    }}
    >
       {(formik)=>(

       
        <div>
        <Typography component="h1">Login Form</Typography>




<div>
    <Form>
          <TextField type="email"  label="Email" name="email"/>
         <TextField  type ='text' label="LastName" name ="LastName"/>
    <Mycheck name ="acceptTerms">
        I accept the terms and conditions
    </Mycheck>
      <MyRadio type="radio" name="gender" label="Male"/>
      <MyRadio type="radio" name="gender"  label="Female"/>


        <button className='btn btn-dark shadow-none' type='submit'>Submit</button>
        <button className='btn btn-dark shadow-none' type='Reset'>Submit</button>

    </Form>
</div>





        </div>

)}
    

    </Formik>
    
    
    
    </>
  )
}

export default Fors