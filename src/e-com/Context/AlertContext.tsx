import React, { createContext, FC, useState } from 'react'
import { UserContext } from './UserContext';

type AlertContextType = {
    type    : string  ,
    message : string  ,
    hidden  : boolean ,
}

type alertDataType = {
    alertData : AlertContextType ,
    setAlertData :  React.Dispatch<React.SetStateAction<AlertContextType>>

}


const AlertDefault : AlertContextType =  {type:'test', message : ' hello' , hidden : false ,} ; 

export const AlertContext = createContext( {} as alertDataType );

type AlertStateType = {
    children : React.ReactNode,
}



const AlertState :FC <AlertStateType>  = ( { children }   ) =>{




    const [ alertData , setAlertData ] = useState(AlertDefault);





    return (
        <AlertContext.Provider value = { {  alertData  , setAlertData}  } >
            {children}
        </AlertContext.Provider>
    );
}

export default AlertState ;