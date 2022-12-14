import React, { useState , useContext  } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import Alert from '../ProdDetail/Alert';
import LogIn from './LogIn'
import SignUp from './SignUp'

const Auth = () => {
    const { UserData } = useContext (UserContext);
    const [ Log , setLog ] = useState( true) ;
    const handleLogIn = () =>{  setLog ( true) ; }
    const handleSignUp = () =>{  setLog ( false) ; }


    if(UserData){
    return   <Navigate to='/' /> ;
    }
else {
    return (
        <div className=' h-fit w-full  bg-gray-100 py-14 px-12 '>
            <div className=' h-fit w-full  bg-white  flex flex-col  shadow-md py-7 px-4  ' >
                <div className=' w-full '> <Alert /> </div>
                <div className=' flex text-xl font-semibold text-gray-700 my-6 cursor-pointer  '> 
                    <div className={ '  px-3 border-r-2 border-slate-500  ' + (Log ? ' text-red-500 ' : ''  )}
                    onClick={handleLogIn} > Login</div>
                    <div className= {' pl-3  '  + (Log ? '  ' : 'text-red-500'  )} onClick={handleSignUp}> SignUp </div>
                </div>
                

                    <div className='ml-2'>
                        {    Log ? <LogIn />  :  <SignUp /> } 
                        </div>
            </div>
        </div>
    )
}
}
export default Auth