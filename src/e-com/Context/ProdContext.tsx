import   React ,{createContext, FC, useState,useEffect} from 'react';
import { Params, useSearchParams } from 'react-router-dom';
import { ProductList } from './Apis';




type ProductDataType = {
    meta ?: {
        last_page : number ,
    },
    data  ?: [ ],
}


type ProductType = {
    Prod :  ProductDataType,
    setProduct : React.Dispatch<React.SetStateAction<ProductDataType>>
}
const TempProduct :ProductDataType = { meta :{ last_page :3 , }, data : [],}

export const ProdContext = createContext({} as ProductType);



type ProStateType = {
    children :React.ReactNode,
}

export const ProdState :FC<ProStateType> = ({children})=>{
    
    const [ Prod , setProduct ] = useState  (TempProduct);

    const [ searchParams , setSearchParams] = useSearchParams()

    const  params = Object.fromEntries(searchParams);


    const sort = params.sort || ''  ;
    const page = 1;

    
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




        ProductList ( { sortBy , sortType , page} ).then((response : {})=>{



        setProduct(response);
        }).catch((e : any)=>{
            console.log('product error = ',e)
        })
        
    },[ sort,  page])





    return (
        <ProdContext.Provider  value = {{Prod ,setProduct}} >
            {children}
        </ProdContext.Provider>
    )
}