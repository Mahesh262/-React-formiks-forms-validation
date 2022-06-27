// import { useFormik } from 'formik'
// import React from 'react'
// import './Formscss.css'
// const Formiks = () => {
//      const validate = values=>{
//            const passReg = /(?=.*[0-9])/;
//          const errors ={};
//          if(!values.FirstName){
//              errors.FirstName= "Required"
              
//          } else if(values.FirstName.length> 15){
//               errors.FirstName= "Must be in Fifteen Charcters"
//          }
//         //  Last name
//          if(!values.LastName){
//             errors.FirstName= "Required"
             
//         } else if(values.LastName.length> 15){
//              errors.LastName= "Must be in Fifteen Charcters"
//         }
//         // Emaill

//           if(!values.email){
//               errors.email= "Required"

//           } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                errors.email= "Invalid email"
//           }
//         //   Passowrds

//            if(!values.password){
//                errors.password = "Required";

//            } else if( values.password.length > 8){
//                 errors.password = "Alteast * digits"
//            }
           
//            else if(!passReg.test(values.password)){
//                errors.password = "Invalid password"
//            }

//            if( !values.confirmPassword){
//                errors.confirmPassword= "Required"
                
//            } else if(values.password !== values.confirmPassword){
//                   errors.confirmPassword= "Passwords are not Matched"
//            }

//          return errors;
//      }
//    const formik = useFormik({
//       initialValues:{
//     FirstName: "",
//     LastName: "",
//     email: "",
//     password: "",
//     gender: "",
//     confirmPassword: "",  
//       },
//       validate,
//       onSubmit: values=>{
//           alert(JSON.stringify(values,null,2))
//       }

//    })

//   return (
//     <>SignUp
//     <form onSubmit={formik.handleSubmit}>
//         <input
//           type="text"
//           name="FirstName"
//           placeholder="FirstName"
//            className='FirstNames'
            
//           onChange={formik.handleChange}
//           value = {formik.values.FirstName}
//         />
//         {formik.errors.FirstName ? <div style={{border:"2px solid red"}}>{formik.errors.FirstName}</div>:null}
//         <input
//           type="text"
//           name="LastName"
//           placeholder="LastName"
//            className='form-control'
//           onChange={formik.handleChange}
//           value = {formik.values.LastName}
//         />
//         {formik.errors.LastName ? <div style={{color:"red"}}>{formik.errors.LastName}</div>:null}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//            className='form-control'
//           onChange={formik.handleChange}
//           value = {formik.values.email}
//         />
//         {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:null}

//         <input type="datetime-local" name="date" />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//            className='form-control'
//           onChange={formik.handleChange}
//           value = {formik.values.password}
//         />
//         {formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div>:null}

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="reEnter Password"
//            className='form-control'
//           onChange={formik.handleChange}
//           value = {formik.values.confirmPassword}
//         />
//         {formik.errors.confirmPassword ? <div style={{color:"red"}}>{formik.errors.confirmPassword}</div>:null}

//         <label>
//           <input
//             type="radio"
//             value="male"
//             name="gender"
//              className="form-check"
//              checked= {formik.values.gender === 'male'}
//               onChange={formik.handleChange}
            
//           />
//           Male
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//              className='form-check'
//              checked = {formik.values.gender === "female"}
//              onChange={formik.handleChange}
//           />
//           Female
//         </label>
//         <label>
//           <input type="checkbox" name="please check" /> Agree
//         </label>
//         <button type="submit">Add User</button>
//       </form>
    
    
//     </>
//   )
// }

// export default Formiks

import { Form, Formik } from 'formik'
import React from 'react'
import TextField from './TextField'
 import * as Yup from 'yup'
 const Formiks = () => {
      const validate=Yup.object({
          FirstName:Yup.string()
          .max(15,'must be in 15 charchters or less')
          .required('required'),
          LastName:Yup.string()
          .max(15,'must be in 15 charchters or less')
          .required('required'),
          Email:Yup.string()
          .email("email is invalid")
          .required("reuired"),
           password:Yup.string()
           .max(9, 'passowrd must have 9 letters')
           .required("required"),
           confirmPassword:Yup.string()
           .oneOf([Yup.ref('password'),null], 'passowrd must match')
           .required(" confirm password is required"),

      })
   return (
     <>
     <Formik
       initialValues={{
           FirstName:"",
           LastName:"",
           Email:"",
           password:"",
           confirmPassword:""
       }
       }
       validationSchema= {validate}
        onSubmit={values=>{
            console.log(values)
        }}

     >
         {formik =>(

             <Form>
         <TextField label="FirstName" type ="text" name ="FirstName" />
        <TextField label="LastName" type ="text" name ="LastName" />
        <TextField label="Email" type ="email" name ="Email" />
        <TextField label="Password" type ="password" name ="password" />
        <TextField label="ConfirmPassword" type ="password" name ="confirmPassword" />
         <button className='btn btn-dark mt-3' type='submit'>Register</button>
         <button className='btn btn-danger mt-3' type='reset'>Reset</button>
             </Form>
            

            //  console.log(formik)
         )}
     </Formik>
     </>
   )
 }
 
 export default Formiks