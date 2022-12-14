import React, { FC, createContext, useContext , useState , useEffect } from 'react'
import { cartContext, saveCart }  from '../Context/Apis'
import { UserContext } from './UserContext'
import {getCart} from './Apis'



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


type  StateDataType = [
    { 
    product :  valtype   , quantity: number ,
    },
]

type CartType = {

    cartData ?: StateDataType ,
    total : number ,
    setCartData ? :React.Dispatch<React.SetStateAction<StateDataType | undefined>> ,
    addToCart : (id: number, val: number) => void,
    deleteCartFunc : (id : number) => void ,
    cartQuantity  ?: {  [key: number]: number;} ,
    setcartQuantity  ?: React.Dispatch<React.SetStateAction<{
        [id: number]: number;
    } | undefined>>
    UpdateCartContext : ( data :{[id: number]: number} ) => void,
}






type StateType = {
    children :React.ReactNode,
}
type KeyObjectType = {
    [key: number ] : number,
}



export const cartDataContext = createContext( {} as CartType);

export const  CartState  :FC<StateType> = ({children}) =>{

    const { UserData } = useContext(UserContext) ;

    const loggedIn  = !!UserData ;
    let indexedArray : {[id: number]: number} = {
        0 : 0 ,
    }
    
    const [ cartData , setCartData ] = useState <StateDataType> ( );
    const [ cartQuantity , setcartQuantity ] = useState  <{[id: number]: number}>  (); //{ 1:3, 4"5}
    const [ total , setTotal ] = useState (0) ;


    

const CartQuantity = (props : {[id: number]: number} )=>{ // data total of cart 
    if(cartQuantity){
    const Quantity = Object.values(props);
        const  totalD  = Quantity.reduce((acc :number , val:number )=>{
            return ( acc + val ) ;
        })
    setTotal(totalD) ;
}
}

    const localCartData = ( props : KeyObjectType )=>{   // data comming from  api local storage data
        const Temp =   Object.keys(props);
        const cartKeys  = Temp.map((val: string)=>{
                return ( Number(val));
        })
        const TempObj =     cartContext(cartKeys).then((Response)=>{
                        const SavedData = Response.map((val: valtype )=>({
                            product : val ,
                            quantity : props[val.id]  }))

                setCartData(SavedData)
                return(SavedData);
                    })
        return TempObj ;
    }

    const LogInCartUpdate = (props : StateDataType  ) =>{
        const ValId = props.map((val : any)=>{
            return (Number(val.product.id ))
        })
        const ValKeys = props.map((val : any)=>{
            return (Number(val.quantity ))
        })
        const obj:  {[id: number]: number}= {};
        ValId.forEach((element :number, index:number ) => {
            obj[element] = ValKeys[index];
        });

        const StData =   ( localStorage.getItem('cartData')  || '');
        
        if(StData){
        const StorageData = JSON.parse(StData)

        const CartObj = {...StorageData , ...obj}

        setcartQuantity(CartObj); //{ 1:3, 4"5}
        localCartData(CartObj);
        CartQuantity(CartObj) ;
        localStorage.removeItem('cartData')
        }else{
        setcartQuantity(obj); //{ 1:3, 4"5}
        localCartData(obj);
        CartQuantity(obj) ;
        }


    }

    useEffect(()=>{
        const StData =   ( localStorage.getItem('cartData')  || '');
        
        if(StData){
        const StorageData = JSON.parse(StData)
        setcartQuantity(StorageData); //{ 1:3, 4"5}
        localCartData(StorageData);
        CartQuantity(StorageData) ;
        }
        

        if(loggedIn){  // data cart comefrom api
            getCart().then((response : StateDataType )=>{
                LogInCartUpdate (response) 
            })    }


    },[loggedIn])


    const deleteCartFunc = ( id : number)=>{
        console.log ( ' id = ',id)
        const Temp = {   ...cartQuantity   };
        delete Temp[id]
        localCartData( Temp);
        setcartQuantity(Temp);
        CartQuantity(Temp)
        if(loggedIn){
            saveCart(Temp);saveCart(Temp);
            console.log ( ' cart deleted ')
        }
        else{
        localStorage.setItem('cartData', JSON.stringify(Temp));
    }}

    const UpdateCartContext = ( data : {[id: number]: number} ) =>{
        // from local storage 
        
        localCartData(  data );
        setcartQuantity( data );  
        CartQuantity(data);     
        if(loggedIn){
            saveCart(data);
            }
            else{
                localStorage.setItem('cartData', JSON.stringify( data ));
        }
    }


        const addToCart   =( id :number, val :number )=>{

            // from local storage 
            console.log ( ' id cart , quantity cart = ',id , val)
            let oldData = 0  ;
            if(cartQuantity){

                oldData=  cartQuantity[id] || 0 ;
            } 
            const cartObj = {...cartQuantity , [id] : oldData + val ,}
            const converted = JSON.stringify(cartObj);
            console.log('jason = ' , converted )
            console.log(' cartObj = ' , cartObj )
            setcartQuantity(cartObj);
            localCartData(cartObj);
            CartQuantity(cartObj);
            if(loggedIn){
                console.log ( ' cart added');
                saveCart(cartObj);
            }
            else{
            localStorage.setItem('cartData', JSON.stringify(cartObj));
            }

        }


    return (
        <cartDataContext.Provider  value = {{   addToCart , cartData , total ,  cartQuantity , setCartData  , setcartQuantity  , deleteCartFunc , UpdateCartContext }}>
            {children}
        </cartDataContext.Provider>
    )
}