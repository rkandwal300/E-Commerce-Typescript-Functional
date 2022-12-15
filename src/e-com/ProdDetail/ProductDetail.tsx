import React, { FC ,useEffect , useContext , useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { cartContext, getSingleProduct } from '../Context/Apis';
import Alert from './Alert';
import Product from '../PD/Product';
import { cartDataContext } from '../Context/CartContext';
import { AlertContext } from '../Context/AlertContext';
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
interface ProductDetailType {
    story ? : number ;
}

const ProductDetail :FC <ProductDetailType> = () => {
  const {  setAlertData  } = useContext(AlertContext) ;

  const { addToCart } = useContext(cartDataContext);

  type idParams = {
    id: string
};

const  id  = Number( useParams<idParams>().id);
    // const Id = + id;

const [ data , setData ] = useState <valtype>()
const [ RelatedData , setRelatedData ] = useState <any> ();
const [ value , setValue ] = useState <number> (1);


const handleQuantity = (event : React.ChangeEvent<HTMLInputElement>)=>{
    const quantity = Number (event.target.value)
    setValue(quantity);
}

const handleAddCart = ()=>{
  const proId = data?.id ;

  proId && addToCart(proId , value) ;
  const  TempAlert = {
    type : ' addCart',
    message : 'item added to cart' ,
    hidden : true ,
  }
  setAlertData( TempAlert);
}


useEffect(()=>{
  console.log ( ' useEffect id = ',id)

  // maindata
  getSingleProduct( id).then((response)=>{
    setData(response) ;
  })
const TempArr = [id+1 , id+2 , id+3];

  cartContext(TempArr).then((response)=>{
    setRelatedData(response);
  })


},[id])

if(data ){
  
  const { category , thumbnail , title , price , description } = data ;

  return (
    <div  className=' selection:text-white  selection:bg-red-300 flex  flex-col justify-start  items-center bg-gray-100 p-0  lg:px-10 sm:px-5  lg:pt-10   ' > 
      <div className=' lg:min-h-[611px]  lg:max-w-[1200px] w-full bg-white  shadow-lg rounded-md        sm:m-11   p-[10px] lg:p-[15px]  xl:p[20px] 2xl:p-[25px] '>
        <Alert />

      <div className='  h-full w-full   flex lg:flex-row flex-col lg:justify-evenly lg:items-start   justify-center items-center             '>

      <div className='   w-[60%] lg:w-full bg-contain   mt-6 lg:mt-0 lg:max-w-[479px]  lg:aspect-square cursor-pointer mb-5  mr-4'>
        <img className='object-cover w-full  ' src={thumbnail} alt= 'hehe' width='100%' />
      </div>

      <div className='w-[460px] h-[370px] p-[10px]    '>
      <div className=' h-[26px] w-full text-sm text-slate-500 font-semibold  cursor-pointer  flex flex-wrap tracking-widest  ' > 
        <Link to='/' className='
        underline underline-offset-8 my-1 hover:text-red-500 ' >  HOME </Link>  
        <div className='mb-1 mx-2  text-lg  '  >/</div>
        <div  className='
        underline underline-offset-8 my-1 hover:text-red-500 '   > {category} </div>

        <div className='my-1 mx-2'>/</div>
        <div className='my-1 hover:text-red-500 '> {title} </div>
      </div>
      <div style={{fontFamily : 'font-family:garamond,serif;',}} className=' mt-10 font-snas w-full text-4xl text-gray-800  font-semibold fontareal '> 
      {title} </div>
      <div className='my-3 font-sans  text-2xl text-gray-900 font-semibold fontareal '> $ {price} </div>
      <div className=' max-h-[112px] w-full text-sm  text-slate-500 '>
        {description}
      </div>
      <div className=' w-full my-3 border-b-2 border-gray-100 py-7'> 
      
        <input className='h-[37px] w-[55px] text-gray-500 border-2 border-gray-400 mr-2  text-center  ' type= 'number' value= {value} 
        onChange={handleQuantity} 
        />
        <button className='h-[38px] w-[180px] text-lg text-white font-semibold bg-red-500  rounded-sm shadow-md hover:shadow-2xl hover:scale-105    '
        onClick={handleAddCart}
        > ADD TO CART</button>
      </div>
      <div className='  flex tracking-wider font-semibold '> 
        <div className=' text-gray-500 text-md'> Category :- </div>
        <div className=' text-red-500 hover:text-red-900 ml-2 underline underline-offset-4 '> {category}  </div>
      </div>
  
      </div>


      </div>
      <div className='h-[115px] w-full my-3 border-t-2 border-gray-200   ' >
        <div className=' text-2xl mb-3 font-semibold text-gray-700 mt-3  '> Description</div>
        <div className='text-md font-semibold  text-gray-500'> {description}</div>
      </div>


      {RelatedData &&  ( 
      <div className=' h-fit w-full  '>
        <div className='text-[25px] text-gray-600 font-semibold '> Related Products  </div>
        <div className='w-full flex flex-col justify-center items-center sm:grid grid-cols-3 pb-[30px] mt-7 ' >
          { 
            RelatedData.map((val :valtype)=>{

              return     <Product 
              key={val.id}  
              photo ={val.thumbnail}   
              title ={val.title}  
              id ={val.id} 
              price={val.price} 
              rating ={val.rating} />




      })
          }
        </div>
      </div>
      )}

      </div>



    </div>
  )
}
else{
  return <div> <Loading /> </div>
}
}

export default ProductDetail