
import React, { useContext, useState , useEffect } from 'react'
import { Range } from 'react-range'
import { Link, useSearchParams } from 'react-router-dom'
import Product from './Product'
import { ProdContext } from '../Context/ProdContext'
import { ProductList } from '../Context/Apis'
import { string } from 'yup'
import Home from './Home'
import Loading from '../Error_&_Loading/Loading'

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


const PDListPage = () => {


    // const {Prod} = useContext(ProdContext); 

    const [ ProductData  , setProductData ] = useState <any> ();
    const [value , setValue ] =  useState('')

    const [ searchParams , setSearchParams] = useSearchParams()

    const  params = Object.fromEntries(searchParams);


    const sort = params.sort || ''  ;
    const page = Number(params.page ) || 1 ;
    const query = params.query || '' ;



    
    useEffect(()=>{
        let sortBy , sortType
        if( sort == 'low' ){
            sortBy = 'price'
        } 
        else if( sort == 'high' ){
            sortBy = 'price'
            sortType ='desc'
        }
        
        else if( sort == 'name' ){
            sortBy = 'title'
        }

        ProductList ( { sortBy , sortType , query  , page} ).then((response : {})=>{

        setProductData(response);
        }).catch((e : any)=>{
            console.log('product error = ',e)
        })
        
    },[ sort, query , page])


    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>{

        setSearchParams({...params , sort : event.target.value})
    }

    const handleChange =( event : React.ChangeEvent<HTMLInputElement>  ) =>{

        setValue( event.target.value);
        setSearchParams({...params , page : String(1) , query : event.target.value})
    }







    
    if((  ProductData)){
        const data = ProductData.data;




    return (
    <div className='selection:bg-red-300
    '> 
    
        <div className='flex  flex-col justify-start  items-center bg-gray-100 p-0  md:px-10 sm:px-5 sm:pt-5 pt-10'>


            <div className='sm:max-w-[1200px] w-full bg-white  h-fit sm:p-[25px] lg:p-[80px]  sm:m-11 shadow-lg '>

                <div className='ml-3 my-7 mb-10 flex flex-col justify-center items-center cursor-pointer sm:items-start'> 
                
                    <div className='flex justify-start items-center '>
                    <Link to='/' className=' underline underline-offset-4 text-sm font-semibold text-gray-600 hover:text-red-300 '>Home</Link>
                    <span className='mx-2'> /</span>
                    <div className='text-sm font-semibold text-gray-600'>Shop</div>
                    </div>

                    <div className='text-3xl mt-3 text-red-400'>SHOP</div>
                    <div className=' w-[98%] flex sm:justify-between sm:flex-row
                    sm:items-startjustify-center items-center flex-col'>

                        <div  className='text-sm font-semibold text-gray-600 flex sm:block mt-3 sm:mt-0 '>{
                            ' Showing 1–9 of 11 results Default sorting '
                        }
                            </div >

                            <div className='mt-5 sm:mt-1 flex flex-col ' >
                                <input type='text' className=' border-2  border-slate-500 rounded-md mb-2 h-[35px ] w-[200px]  ' placeholder=' Search here...' value={value }
                                onChange={handleChange}
                                />
                            <select
                            className="h-[35px] w-[200px]  rounded-md border-2 border-slate-500  px-[10px] text-sm font-semibold text-gray-500  "
                            onChange={handleSelect}
                                >
                    <option  defaultValue="default"> Default Sorting </option>
                    <option value="high"> High To Low </option>
                    <option value="low"> Low To High </option>
                    <option value="tite"> Sort By Name </option>
                </select>
                </div>
                    </div>
                </div>
                

            <div className=' w-full flex flex-col justify-center items-center sm:grid grid-cols-3 pb-[30px] '> 


        { 



        data &&   data.map((val :valtype )=>{

            return  <Product 
                    key={val.id}  
                    photo ={val.thumbnail}   
                    title ={val.title}  
                    id ={val.id} 
                    price={val.price} 
                    rating ={val.rating} />



            })
            
            } 

                </div>

            <div className='h-[55px]  w-full flex  '>
{/* <Pagination /> */}
{
                [...Array(ProductData.meta.last_page)].map( (val:any , index :number)=>{
                    
                const pageNo = index + 1;
                    return  (
                        
                    <Link
                    to={"?" + new URLSearchParams({ ...params, page:String( pageNo) })}
                    key={pageNo}
                    className={
                    "  h-8 w-9  flex  justify-center items-center  text-lg  font-semibold hover:text-white  hover:bg-red-400  shadow-md shadow-slate-300  border-2 border-red-400  m-2  " +
                    (pageNo == page
                        ? " bg-red-400  text-white"
                        : "   text-red-400  bg-white")
                    }
                    >
                    <div>{index + 1}</div>
                    </Link>
                );
                })
}

                </div>
                </div>
            </div>
        </div>
    
    )
}
else{
    return <div> <Loading />  </div> 


}

}

export default PDListPage ;