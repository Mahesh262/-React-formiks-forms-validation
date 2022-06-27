import { Button} from '@mui/material';
import React from 'react'
import TextField from './TextField';
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    const history = useNavigate();
    // const [inpt, setInpt] = useState({
    //     username:"",
    //     email:"",
    //     password:""

    // })
    
    // const [data,setData] = useState([]);

    // const {username, email, password}= inpt;


    //  const changehandle = (e)=>{
    //      setInpt({...inpt, [e.target.name]:e.target.value})
    //  }

    // const submit= (e)=>{
    //  e.preventDefault()
    //   console.log(inpt)
    //   if (username === "") {
    //     alert(' name field is requred!')
    
    // } else if (email === "") {
    //     alert(' Email field is requred!')
         
        
    // } else if (!email.includes("@")) {
    //     alert(' Input correctly field is requred!')
         
    
    // } else if (password === "") {
    //     alert("Enter passsowrd")
    // } else if (password.length < 5) {
    //      alert("passsowrd must be <5")
    // } else {
    //     console.log("data added succesfully");
    //     history("/SignIn")
    //     localStorage.setItem("userName",JSON.stringify([...data,inpt]));

    // }
    // }
 
const validate = Yup.object({
    UserName:Yup.string().max(15,"must be in 15 char or less").required("required"),
    Email:Yup.string().email('email is invalid').required('required'),
    Password:Yup.string().max(9,"passwrd required in 9 words").required("required")
    

})

const [data, setData]= React.useState([])



  return (
    <>
     <Formik
      initialValues={{
        UserName:"",
        Email:"",
        Password:"",
    }
    }
    validationSchema= {validate}
     onSubmit={values=>{
        console.log("data added succesfully");
            history("/SignIn")
            localStorage.setItem("userDetails",JSON.stringify([...data,values]));

}}>
  {formik =>(
<Form>
        
        <TextField label="UserName" type="text" name ="UserName"/>
        <TextField label="Email"  type ="email" name ="Email"/>
        <TextField label="password"type ="password" name ="Password"/>
      <Button variant="contained" color="secondary"type="submit">Register</Button>
      <Button variant="contained" color="info"type="reset">Reset</Button>
      
     </Form>
     
  )}
     </Formik>
    

    <p>Already have an account<span><NavLink to = "/SignIn"> SignIn</NavLink></span></p>
    
    </>
  )
}

export default Signup