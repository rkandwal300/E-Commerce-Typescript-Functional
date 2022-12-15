import React from 'react'
import axios from 'axios';


// save cart 
export function saveCart(cart  :  {[id: number]: number}  ) {
    console.log('cart save cat  = ',cart)
    return (axios.post(
        "https://myeasykart.codeyogi.io/carts",
        { data: cart },
        {
        headers: {
            Authorization: localStorage.getItem("LogToken"),
        },
        }
    )
    .then(function (response) {
        return response.data;
    }).catch((e)=>{
        console.log(' eoor in saving the cart to api',e)
    })
    )
}




//cart data  / data by ids

export const  cartContext   = (ids : number[]) =>{
    const commaSeperatedIds = ids.join();
    return (
    axios.get("https://myeasykart.codeyogi.io/products/bulk", {
        params: {
        ids: commaSeperatedIds,
        },
    }))
    .then((response)=>{
        return response.data 
    })
    .catch((e)=>{
        console.log(' single product error = ',e)
    })
}
// single product data 

export function getSingleProduct(id : number ) {
    console.log ( ' id = ' ,id)
    console.log ( ' id type = ' ,typeof(id))
    return axios.get("https://myeasykart.codeyogi.io/product/" + id).then(function (response :any) {
        return response.data;
    }).catch((e :any)=>{
        console.log(  'error in pr0duct ' )
    });
    }

    //product data  with search sort  and paging
    type ProductPropsType = 
        { query ?:string , sortType ?:string , sortBy ?:string , page ?:number }
    type ParamsProps = {
        sortType ? :string , sortBy ?: string , search ?:string  , page ? :number , 
    }
    
    //     const ProductProps: ProductPropsType ={ query  , sortType , sortBy , page }
export const ProductList = ({ sortType , query  , sortBy , page } :ProductPropsType )=>{



    let params :  ParamsProps = {};
    
    if(sortType){
        params.sortType  = sortType;
    }

    if(sortBy){
        params.sortBy = sortBy
    }


    if(page){
        params.page = page ;
    }
    if(query ){
        params.search = query ;
    }


    return(  axios.get('https://myeasykart.codeyogi.io/products',{
        params ,
    }).then((response)=>{
    return (response.data)
    }).catch((error)=>{
    console.log('use effect error ',error.message)
    })
    )
}


// {1: 3, 5: 9, 7: 13} // /bulk?ids=1,5,7
// [{product: {id: 1, title: "iPhone"}, quantity: 3 }, {product: {}, quantity: 9}]
export function getCart() {
    return axios
    .get("https://myeasykart.codeyogi.io/carts", {
        headers: {
        Authorization: localStorage.getItem("LogToken"),
        },
    })
    .then(function (response) {
        return response.data;
    });
  }
