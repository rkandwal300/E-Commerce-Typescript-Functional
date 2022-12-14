
import { useFormik } from 'formik';
import React from 'react' ;
import { FaAddressBook } from 'react-icons/fa';
import { MdOutgoingMail } from "react-icons/md";
import Input from './Input';


const Contact = () => {


  const handleLogIn = ( values: any) =>{
    // values.preventDefault();
    console.log ( ' submitted values ',values)
  }

  const initialValueData = {
    email   : '' ,
    subject : '' ,
    message : '' ,

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
                initialValues: initialValueData ,
                onSubmit :handleLogIn,
    });




  return (
    <div  className='flex  md:flex-nowrap flex-wrap  justify-center items-center mt-12 '>
        <div className='h-[524px]   w-[600px] bg- selection:bg-red-400  flex  flex-col  justify-start items-start  px-3  '> 
            <div className=' text-5xl my-5 font-semibold text-gray-600 '> Say Hello</div>
            <div className=' text-sm text-gray-500 font-serif  ' >  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>

            <div className=' my-5  h-[1px] w-[100px] bg-red-500  '> </div>

            <div className='  h-[30px] w-full my-2   text-sm text-gray-500 font-serif   flex    '>  <span   className='text-red-400   justify-start items-center    '  >  <FaAddressBook />  </span> 
            <span className=' ml-4'  >  
212 7th St SE, Washington, DC 20003, USA   </span>  </div>

        <div className='  h-[30px] w-full my-2   text-sm text-gray-500 font-serif  flex  justify-start items-center  '>  <span  className='text-red-400     '   > <MdOutgoingMail /> </span> 
              <span className=' ml-4'  >  info@example.com </span>  </div>

        
        <div className='  h-[30px] w-full my-2   text-sm text-gray-500 font-serif flex  justify-start items-center    '>  <span   className='text-red-400     '  > icon  </span> <span className=' ml-4'  >  123-456-7890/91   </span>  </div>





        </div>


        <form onSubmit={handleSubmit} className='h-fit   w-[600px]  selection:bg-red-400 px-4  border-2  border-gray-200  mr-4 rounded-md shadow-lg '> 

        <div className = 'h-[82px] w-full flex justify-start items-center text-3xl font-semibold text-gray-700  pl-4     '> Ask Your Queries</div>
        

        <div>
        <label htmlFor='email'  className=' sr-only' >email address </label>
        <Input 
        
        type='email' 
        autoComplete='email'
        name='email'  // used by formic
        id='email' 
        value={values.email}  
        onChange={handleChange } 
        placeholder={'Your Email'}
        className = {"  rounded-sm my-3 shadow-none "}
        />

        </div>

        <div>

        <label htmlFor='email'  className=' sr-only' > Subject </label>

        <Input 
        
        type='text' 
        autoComplete='subject'
        name='subject'  // used by formic
        id='subject' 
        value={values.subject}  
        onChange={handleChange } 
        placeholder={'Subject'}
        className = {"  rounded-sm shadow-none "}
        />
        </div>

        <div>
        <label htmlFor='email'  className=' sr-only' > Message  </label>
        <textarea 
        className='  h-[120px] w-full pl-5 bg-gray-100  border-[1px] boreder-slate-300 text-gray-500 text-md outline-2 outline-gray-800  pt-2  my-4     '
        autoComplete='message'
        name='message'  // used by formic
        id='message' 
        value={values.message}  
        onChange={handleChange } 
        placeholder={'Message'}
        />
        
        </div>
        <div className=' h-hit w-full  mb-7'>
          <button type='submit' className='text-md text-white  h-[41px] w-[190px] flex justify-center items-center  bg-red-500 hover:bg-red-600 shadow-md hover:shadow-xl rounded-md '>  SEND MESSAGE </button>
        </div>


        </form>

    </div>
  )
}

export default Contact