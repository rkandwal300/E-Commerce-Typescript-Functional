
import React, { FC , useContext, useEffect, useState } from 'react'
import { cartDataContext } from '../Context/CartContext';
import { changeCartType } from './Cart';

type ButtonPropsType = {
    updata : changeCartType  ,
    setUpdate : any  ,
}
const CartButton :FC < ButtonPropsType>  = ( { updata , setUpdate } ) => {


    const { UpdateCartContext } = useContext(cartDataContext)

const { btn  , data } =  updata ;



const [ value , setValue] = useState( '')
const [ cupoon , setCupoon ] = useState('');
const className = '' ;
    const HandleUpdate = ( ) =>{
        console.log (' button clicked ',btn) ;
        const Temp = {
            btn  : false ,
            dataa : data ,

        }

        UpdateCartContext(data);
        setUpdate(Temp);
    }

    const handleCopoon = (event :React.ChangeEvent<HTMLInputElement> )=>{
        setValue(event.target.value);
    }
    const AppyCopoon = ()=>{
        setCupoon(value)
        console.log(' alert applied copoon  = = ',value)
    }

    return (
    <div>
        <div className={' h-fit p-2 flex flex-wrap   md:flex-nowrap  md:justify-between justify-center  items-center  bg  ' + className}>


        <div className=' flex flex-wrap  sm:flex-nowrap  justify-center   items-center md:mb-0   mr-6' > 
            <input 
            type='text'  
            placeholder='Coupon code'
            className='border-2 border-slate-400 max-w-[280px]  h-9 rounded-md pl-4 text-lg text-slate-500 m-[15px] '
            value = {value}
            onChange = {handleCopoon} 
            /> 
            <button
            className=' bg-red-400 px-14 max-w-[240px]  py-2 rounded-lg shadow-md text-sm font-semibold text-white  '
            onClick={AppyCopoon} 
            > APPLY COUPON </button>  
        </div>


        <div className='  flex flex-wrap  sm:flex-nowrap  justify-center   items-center mb-5  mr-4  mt sm:w-[280px] w-full '>
        
        { btn ? ( 
        <button   
        className=' bg-red-400 sm:px-14 w-full  py-2 rounded-lg shadow-md text-sm font-semibold text-white md:mt-6 mt-3 '  
        onClick={HandleUpdate}
        >UPDATE CART </button>  ):(  <button   
        className=' bg-red-300 sm:px-14 w-full  py-2 rounded-lg shadow-md text-sm font-semibold text-white md:mt-6 mt-3 '  
        disabled
        >UPDATE CART </button>  )
    
        }

    {/* <button   
        className=' bg-red-300 sm:px-14 w-full  py-2 rounded-lg shadow-md text-sm font-semibold text-white md:mt-6 mt-3 '  
        disabled
        >UPDATE CART </button>  */}


    
        </div>
        </div>
    </div>
    )
}

export default CartButton   ;