import React ,{useContext} from 'react'
import { useFormik } from 'formik';
import Input from '../About-Contact/Input'
import * as yup from 'yup' 
import axios from 'axios';
import { UserContext } from '../Context/UserContext'
import { AlertContext } from '../Context/AlertContext';



const SignUp = () => {

    const { UserData , setUserData  } = useContext (UserContext)
    const { alertData ,setAlertData} = useContext(AlertContext);

    
    const handleLogIn = ( values: any) =>{
            
    axios.post('https://myeasykart.codeyogi.io/signup',{
        fullName:values.fullname,
        email:values.email,
        password:values.password,
        ConfirmPassword : values.CPassword,
    }).then((response)=>{
        const {user , token } = response.data ;
        setUserData( user)
        localStorage.setItem('logIn_Token',token);
        
    }).catch ((e)=>{
        const TempAlert =  {type: 'LogIn', message : '' , hidden : true ,}
        setAlertData(TempAlert)
    })
    }

    const schema = yup.object().shape({
        email : yup.string().email().required(),
        password : yup.string().required(),
        // check : yup.string().required() ,
        CPassword :  yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    const initValue = {
      fullname :'' ,
        email: '',
        password :'',
        CPassword : '',
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
        <form onSubmit={ handleSubmit} >
            <div className=' my-4'>
            <label htmlFor=' fullname' className='sr-only'   > fullname </label>
            <div className='text-xs text-slate-600 font-semibold  flex justify-start items-center mb-3  '> Fullname <span className=' relative top-1 left-2 text-red-400 '>  *</span>  </div>
            <Input
        
        type='text' 
        autoComplete='fullname'
        name='fullname'  // used by formic
        id=' fullname'
        value={values.fullname}  
        onChange={handleChange } 
        onBlur={handleBlur}
        placeholder={'Fullname'}
        className = {" shadow-none mt-3border-slate-300  "}
        />
        
{ touched.fullname && errors.fullname && <div className=' text-sm text-red-600  ' > {errors.fullname}</div>}

            </div>

            <div className=' my-4'>
            <label htmlFor=' emailId' className='sr-only'   > Email </label>
            <div className='text-xs text-slate-600 font-semibold  flex justify-start items-center mb-3  '> Email address <span className=' relative top-1 left-2 text-red-400 '>  *</span>  </div>
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

            <div className=' my-4'>
            <label htmlFor='  CPassword ' className='sr-only'   >  Confirm Password </label>
            <div className='text-xs text-slate-600 font-semibold  flex justify-start items-center   '>Confirm Password  <span className=' relative top-1 left-2 text-red-400 '>  *</span>  </div>
            <Input 
        
        type='password' 
        autoComplete='Cpassword'
        name='CPassword'  // used by formic
        id=' CPassword'
        value={values.CPassword}  
        onChange={handleChange } 
        placeholder={'Confirm Password '}
        onBlur={handleBlur}
        className =  {" shadow-none mt-3 border-slate-300  "}
        />
        { touched.CPassword && errors.CPassword && <div className=' text-sm text-red-600  ' > {errors.CPassword}</div>}

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



export default SignUp