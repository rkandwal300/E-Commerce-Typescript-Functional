import React, { useState } from 'react';
import { FC } from 'react';
import { MdOutlineCancel } from "react-icons/md";


type PropsType = {
    id: number ,
    photo : string ,
    title : string ,
    quantity : number ,
    price : string  ,
    setQuantity : (id :number , quantity :number )=> void ,
    delItem : ( id: number ) => void ,
}

const CartItemLg  :FC<PropsType>  = ( { id  , photo , title , quantity  ,price  , setQuantity , delItem  } ) => {

    const [ value  , setValue ] = useState(String(quantity));

    const subtotal = quantity * Number(price) ;

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        const val = Number(event.target.value);
        setValue(event.target.value);
        setQuantity( id ,  val );
    }

    const handleDelete = () =>{
        // console.log (' items deleted ' , id)
        delItem(id)
    }

    return (
    <div>
        <div className=' px- h-fit w-full ' >
        <div className=' h-[78px] w-full flex cursor-pointer bg-white border-b-[1px] border-gray-200 ' > 
            <div className='h-full w-1/2   flex  '  >
                <div className='h-full w-1/2   flex   '>
                    <div className='w-[74px]  flex justify-center items-center text-2xl font-thin text-gray-400 '
                    onClick={handleDelete}
                    >
                    <MdOutlineCancel />
                    </div>
                    <div className='h-full w-full px-2 flex justify-center  items-center    '>
                        <div className='h-fit w-[70px]  bg-contain      '>
                            <img className='object-cover' src = {photo} alt = {title} />
                        </div> 

                    </div>
                

                </div>

                <div className='h-full w-[246px]  flex justify-start items-center text-lg font-semibold text-red-400  ml-3  '>  {title}  </div>
            </div>


            <div className=' h-full w-1/2    flex       '>
                <div className='h-full w-1/3  flex justify-center items-center text-lg font-semibold text-gray-700   '> 
                { price  }
                </div>
                <div className='h-full w-1/3  flex justify-center items-center text-lg font-semibold text-gray-700   '> 
                <input type='number' className='h-[35px] w-[55px] border-[1px] border-gray-200 text-center     ' onChange={handleChange} value={value} />
                </div>
                <div className='h-full w-1/2   flex justify-center items-center text-lg font-semibold text-gray-700   '>  $  {subtotal} </div>

            </div>
        </div>
        </div>
    </div>
    )
}

export default CartItemLg