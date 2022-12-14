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


const CartItemsm :FC<PropsType>   = ({ id  , photo , title , quantity  ,price  , setQuantity , delItem  }) => {



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
        <div  className='selection:bg-red-500  flex flex-col w-full h-[327px]      ' > 
        {/* <div className=' flex flex-col w-full h-[327px]  border-[1px] bg-green-300 border-gray-300    '  > */}

            <div className='h-[46px] w-full flex justify-end items-center px-3 border-b-2 border-gray-200 cursor-pointer  text-2xl text-gray-500      '
            onClick={handleDelete}
            > <MdOutlineCancel />  </div>

            <div className=' h-[90px] w-full flex justify-center items-center  border-b-2 border-gray-200   '>  
            <img  className=' h-[70px] aspect-square shadow-lg ' src ={ photo }  alt = { title} width = '70px'   />
            </div>

            <div className='min-h-[46px] w-full   px-3 border-b-2 border-gray-200   text-xl text-gray-700 font-semibold flex justify-between items-center  mr-2  '
            
            >
            <div> Product </div>
            <div className='text-red-400     '> {title} </div>
            </div>

            <div className=' h-[55px] w-full   px-3 border-b-2 border-gray-200   text-xl text-gray-700 font-semibold flex justify-between items-center  mr-2  '
            
            >
            
            <div >  Quantity </div>
            
            <input type='number' className='h-[35px] w-[55px] border-[1px] border-gray-200 text-center     ' onChange={handleChange} value={value} />
            </div>
            
            <div className='h-[46px] w-full flex justify-between items-center px-3 border-b-2 border-gray-200     text-xl text-gray-700 font-semibold     '>
            <div> Subtotal </div>
            <div > $ {subtotal} </div>
            </div>

        </div>

        {/* </div> */}
    </div>
  )
}

export default CartItemsm