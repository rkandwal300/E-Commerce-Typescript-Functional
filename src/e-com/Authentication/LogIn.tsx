import { useFormik } from 'formik';
import React ,{useContext} from 'react'
import Input from '../About-Contact/Input'
import * as yup from 'yup' 
import axios from 'axios';
import { UserContext } from '../Context/UserContext'
import { AlertContext } from '../Context/AlertContext';

const LogIn = () => {

    const { UserData , setUserData  } = useContext (UserContext)
    const { alertData ,setAlertData} = useContext(AlertContext);

    
    const handleLogIn = ( values: any) =>{
    // values.preventDefault();
    axios.post("https://myeasykart.codeyogi.io/login",{
        email:values.email,
        password:values.password,
    } ).then((response) => { 
    const {user , token } = response.data ;
    setUserData( user)
    localStorage.setItem('LogToken',token);
    })
    .catch((e) => {  
    const TempAlert =  {type: 'LogIn', message : '' , hidden : true ,}
    setAlertData(TempAlert)
});
    }

    const schema = yup.object().shape({
        email : yup.string().email().required(),
        password : yup.string().required(),
        // check : yup.string().required() ,
    });

    const initValue = {
        email: '',
        password :'',
    }
    const { handleSubmit ,
        values ,  
        handleChange ,
        resetForm ,
        errors ,
        handleBlur,
        touched,
        isValid ,
        dirty,
        } = useFormik({
            initialValues:initValue ,
            onSubmit :handleLogIn,
            validationSchema :schema,
                validateOnMount : true
});


    return (
    <div className=' h-fit w-full border-[1px] border-slate-300 shadow-sm rounded-md p-7 '>
        <form onSubmit={ handleSubmit}  >
            <div className=' my-4'>
            <label htmlFor=' emailId' className='sr-only'   > Email </label>
            <div className='text-xs text-slate-600 font-semibold  flex justify-start items-center mb-3  '> Username or email address <span className=' relative top-1 left-2 text-red-400 '>  *</span>  </div>
            <Input
        
        type='email' 
        autoComplete='email'
        name='email'  // used by formic
        id=' emailId'
        value={values.email}  
        onChange={handleChange } 
        onBlur={handleBlur}
        placeholder={'email'}
        className = {" shadow-none mt-3border-slate-300  "}
        />
        
{ touched.email && errors.email && <div className=' text-sm text-red-600  ' > {errors.email}</div>}

            </div>

            <div className=' my-4'>
            <label htmlFor=' PasswordId' className='sr-only'   > Password </label>
            <div className='text-xs text-slate-600 font-semibold  flex justify-start items-center   '> Password <span className=' relative top-1 left-2 text-red-400 '>  *</span>  </div>
            <Input 
        
        type='password' 
        autoComplete='password'
        name='password'  // used by formic
        id=' PasswordId'
        value={values.password}  
        onChange={handleChange } 
        placeholder={'password'}
        onBlur={handleBlur}
        className =  {" shadow-none mt-3 border-slate-300  "}
        />
        { touched.password && errors.password && <div className=' text-sm text-red-600  ' > {errors.password}</div>}

            </div>

            <div className=' mt-5 mb-6'>
                <div className='flex my-2 mt-3 '>
                <input type='checkbox' className='text-xs mr-2  text-slate-600   '
                name='check'
            />
                <div className='text-xs text-slate-600 font-semibold  flex justify-start items-center   '>  Remember me</div>
                </div>
                <button type='submit' className='  text-white font-semibold text-md px-4 py-2 bg-red-500 rounded-md shadow-md hover:bg-red-700 my-2 '
                disabled={ !dirty ||  !isValid}  
                >
                    LOGIN
                </button>


            </div>

            
        </form>

        </div>
    )
}

export default LogIn