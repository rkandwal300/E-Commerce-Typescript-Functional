import React, { useContext , useState  } from 'react'
import CartItemLg from './CartItemLg'
import { cartDataContext } from '../Context/CartContext';
import { FC } from 'react';
import CartButton from './CartButton';
import CartItemsm from './CartItemsm';
import Loading from '../Error_&_Loading/Loading';



type valtype = {
    id : number  ,
    title    : string , 
    brand    : string   ,
    rating   : number  ,
    category : string  
    description  : string  
    discount_percentage: 16,
    images: string  ,
    price : string ,
    stock : number  ,
    thumbnail  : string ,
}



type CartValType = {  product :  valtype  , quantity : number , };

 export type changeCartType = { btn :boolean , data : {}  }


const Cart  = () => {

    const {cartData , cartQuantity , setcartQuantity ,deleteCartFunc }  = useContext(cartDataContext);
    const [ changedQuantity , setChangedQuantity ] = useState <changeCartType> ({btn: false , data :{}} );
    
    if(cartData ){
        const cart = cartData ;

    const SubtotalFunc = ()=>{
        const SubTotalArray = cart.map( (val :CartValType )=>{
            return ( Number( val.product.price ) * val.quantity  )
        })

        return SubTotalArray.reduce((acc : number , val : number )=>{
            return ( acc + val );
        })
    }
    const Subtotal  = SubtotalFunc() || 0 ;

    const   handledelete    =   (id : number ) =>{
        deleteCartFunc(id) ;
    }


    const handleChangeQuantity = ( id:number , quantity :number ) =>{
            console.log (` change quantity of id ${id } and quantity ${quantity} `);
            const obj = { [id] : quantity} ;
            const cartObj = { ...cartQuantity , ...obj }
            console.log ( ' changed quantity  = ' , cartObj );
            const updated : changeCartType = {
                btn  : true ,
                data : cartObj ,
            }
            setChangedQuantity(updated );

    }

    return (
    <div>
            <div  className='selection:bg-red-500 flex  flex-col justify-start  items-center bg-gray-100 p-0  lg:px-10 sm:px-5  lg:pt-10   ' > 
            {/* cart main starts  */}
        <div className=' min-h-[690px]  lg:max-w-[1200px] w-full bg-white  shadow-lg rounded-md    mt-14 p-[35px]  flex justify-start items-end   flex-col mb-10'>

            <div className='h-fit w-full  border-[1px]  border-gray-300 pb-2  '>
        {/* cart lg  */}
        <div className='h-fit w-full hidden md:block '>
            {/* heading */}
        <div className=' h-[50px] w-full flex cursor-pointer   border-b-[1px] border-gray-300 mb-0 ' > 
            <div className='h-full w-1/2   flex  '  >
            

                <div className='h-full w-1/2  flex justify-center items-center text-lg font-semibold text-gray-700   '>  Product   </div>
            </div>


            <div className=' h-full w-1/2    flex       '>
                <div className='h-full w-1/3  flex justify-center items-center text-lg font-semibold text-gray-700   '> Price </div>
                <div className='h-full w-1/3  flex justify-center items-center text-lg font-semibold text-gray-700   '> Quantity </div>
                <div className='h-full w-1/2   flex justify-center items-center text-lg font-semibold text-gray-700   '> Subtotal </div>

            </div>
        </div>
        <div className='flex flex-col   '>

            {
            cart.map((val : CartValType )=>{
                    return (
                        <CartItemLg  
                        key = { val.product.id}
                    id = { val.product.id}
                    photo = { val.product.thumbnail}
                    title = { val.product.title}
                    price  = {val.product.price} 
                    quantity = { val.quantity } 
                    setQuantity = { handleChangeQuantity }
                    delItem  = { handledelete }
                    />
                    )
                })
                }
                {
            
            <CartButton   updata = {changedQuantity }   setUpdate = {setChangedQuantity } />
            
            }

            </div>
        </div>

            {/* cart md  */}
        <div className=' md:hidden '>

        {
            cart.map((val : CartValType )=>{
                    return (
                        <CartItemsm  
                        key = { val.product.id}
                    id = { val.product.id}
                    photo = { val.product.thumbnail}
                    title = { val.product.title}
                    price  = {val.product.price} 
                    quantity = { val.quantity } 
                    setQuantity = { handleChangeQuantity }
                    delItem  = { handledelete }
                    />
                    )
                })
                }
                {
            
            <CartButton   updata = {changedQuantity }   setUpdate = {setChangedQuantity } />
            
            }



        
        </div>
            </div>


        <div className=' mt-12 w-[400px] h-[270px]  flex flex-col  border-[2px] border-gray-200 shadow-lg '> 
        
        <div className='h-[51px]  w-full  border-b-[1px] border-gray-200  bg-gray-100 text-xl font-semibold text-gray-700 flex justify-start items-center pl-[20px] '> Cart total </div>
        <div className=' flex  flex-col justify-start items-start mt-3 mx-4'>
            <div className=' h-[44px] w-full flex justify-start items-center text-lg font-semibold text-gray-700 
            border-b-[1px] border-gray-200 '   > 
                <div className='w-1/2 h-full ' > Subtotal :-</div> 
                <div className='w-1/2 h-full '>   $  { Subtotal}   </div> 
                </div>


            <div className=' h-[44px] w-full flex justify-start items-center text-lg font-semibold text-gray-700 
            border-b-[1px] border-gray-200 mb-7 '  > 

                <div className='w-1/2 h-full ' > Total :-</div> 
                <div className='w-1/2 h-full '>    $  { Subtotal}   </div> 
            </div>


            <div className='   ' >
                <button className='w-[357px] h-[56px] text-2xl text-white bg-red-500  rounded-md shadow-lg hover:shadow-xl hover:bg-red-600  '>
                    PROCEED TO CHECKOUT
                </button>
            </div>

        </div>
        
        </div>


        </div>
        </div>
    </div>

    )
}
else {
    {
        console.log (' loading cart ....')
    }
    return <div> <Loading /> </div>
}
}

export default Cart