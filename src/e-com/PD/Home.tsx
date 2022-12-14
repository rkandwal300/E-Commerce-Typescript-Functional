import React, { FC ,useEffect , useContext , useState } from 'react'
import { cartContext, getSingleProduct } from '../Context/Apis';
import Product from '../PD/Product';
import { cartDataContext } from '../Context/CartContext';
import { Link } from 'react-router-dom'




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

const Home = () => {


    
const [ RelatedData , setRelatedData ] = useState <any> ();

    useEffect(()=>{

    const id= 1;

    const TempArr = [id+1 , id+2 , id+3 , id+4 ];

    cartContext(TempArr).then((response)=>{
    setRelatedData(response);
    })

    },[])



    return (
    <div className=' selection:bg-red-500 selection:text-white   '>

        {/* slider  */}
        <div style={{backgroundColor: 'rgb(249,249,250)',}} className='sm:max-h-[520px] h-fit w-full  sm:aspect-video   flex justify-center sm:flex-row flex-col items-center  sm:items-end '>
        <div className='max-w-[551px] h-fit flex flex-col  justify-start items-start   mb-10  mx-2    '>
            <div className='h-1 w-24 bg-red-500  mb-5 ' ></div>


            <div className=' text-xl font-semibold text-gray-700 mt-3   '>Best Quality Products </div>

            <div className=' text-5xl  font-semibold text-gray-700 my-3   '>
                <div> We Print What </div>
                <div> You Want! </div>
            </div>
            <div className=' text-sm text-gray-500 my-2 ' > Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</div>
            <div>
                <Link to= '/products'  >
                    <div
                className=' px-5 py-2  bg-red-500 hover:bg-red-700 text-white  text-sm shadow:md rounded-md mt-10 mb-16 '
                >
                {' GET STARTED  > '}
                </div>
                </Link>
            </div>
        </div>



        <div className='max-w-[551px] h-fit flex flex-col  justify-start items-center   ml-2      ' > 
        <img src='https://trycasuals.com/wp-content/uploads/2019/06/image26-free-1.png' alt='product_showoff' width='100%' />
        </div> 

        </div>

        {/* showoff */}
        <div className=' h-fit w-full  flex justify-center items-center  px-2 '> 


            <div className=' h-fit max-w-[1200px]   flex flex-col sm:flex-row   justify-center  items-center mb-10 mt-5 '>
            

                {/* item 1 */}
        <div className = ' h-fit max-w-[550px]   flex flex-col justify-center items-center my-3 mx-2 '>

            <div   className='max-h-[604px] w-full  '>
            <img src = 'https://trycasuals.com/wp-content/uploads/2020/01/image-01-1.jpg ' 
            alt='Most Loved Designs'
            width='100%'
            /> </div>
            <div className='my-3 flex justify-center items-center flex-col '>
                <div className='text-xs text-gray-500 m   '> Most Loved Designs  </div>

                <div className=' text-xl font-semibold text-gray-700  '> Customize Your T-Shirts </div>
            </div>

        </div>

            {/* item2 */}

            <div className = ' h-fit max-w-[550px]   flex flex-col justify-center items-center my-3mx-2 '>

            <div   className='max-h-[604px] w-full  '>

            <div className='my-3 flex justify-center items-center flex-col '>
            <div className='text-xs text-gray-500 m   '> Design of the Week</div>

            <div className=' text-xl font-semibold text-gray-700  '> Rubber Print Your T-Shirt </div>
                </div>


            <img src = 'https://trycasuals.com/wp-content/uploads/2020/01/image-03-1.jpg ' 
            alt='Most Loved Designs'
            width='100%' /> </div>


            </div>


            {/* item 3 */}
            
            <div className = ' h-fit max-w-[550px]   flex flex-col justify-center items-center my-3 mx-2 '>

            <div   className='max-h-[604px] w-full  '>
            <img src = ' https://trycasuals.com/wp-content/uploads/2020/01/image-02-1.jpg ' 
            alt='Most Loved Designs'
            width='100%' /> </div>
            <div className='my-3 flex justify-center items-center flex-col '>
            <div className='text-xs text-gray-500 m   '> New T-shirt Edition  </div>

            <div className=' text-xl font-semibold text-gray-700  '> Customize Plain Colors </div>
                </div>

            </div>


            </div>



        {/* our products  */}
        <div  className=' h-fit max-w-[1200px]   flex flex-col sm:flex-row   justify-center  items-center mb-10 mt-5 '>


        </div>




            
        </div>


        <div className='h-fit w-full flex justify-center items-center  mb-[50px] '>
            <div className=' h-hit max-w-[1220px]  flex sm:flex-row   flex-col flex-wrap  justify-center items-center  '> 

            <div className=' flex flex-col  justify-center items-center'>
            <div className='  text-2xl font-semibold  text-gray-700 my-2  mb-3   '> Our Featured Products  </div>
            <div className='h-1 w-28 mb-[60px] bg-red-500'></div>
            </div>


            <div  className=' flex sm:flex-row   flex-col flex-wrap  justify-center items-center ' >
            {  RelatedData &&
                                RelatedData.map((val :valtype)=>{
                            return (    <Product 
                                key={val.id}  
                                photo ={val.thumbnail}   
                                title ={val.title}  
                                id ={val.id} 
                                price={val.price} 
                                rating ={val.rating} />
                                )
                                }) }
                                </div>
                            </div>
                        </div>




    </div>
  )
}

export default Home