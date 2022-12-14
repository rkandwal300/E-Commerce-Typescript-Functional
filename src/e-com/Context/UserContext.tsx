import axios from 'axios'
import React ,{createContext , useEffect , useState , FC} from 'react' 

type UserDataType = { 
    user : {  
    // created_at : string ,
    // email : string ,
    // full_name: string ,
    // id : number ,
    // remember_me_token : any ,
    // updated_at : string ,
    }  | undefined ,
}

type UserContextType = {
    UserData ?: UserDataType ,
    setUserData :React.Dispatch<React.SetStateAction<UserDataType | undefined>>,
}

export const TempUser : UserDataType =  {
    user : {
        // created_at :  "" ,
        // email  :   "" ,
        // full_name :  "" ,
        // id : 0,
        // remember_me_token : null ,
        // updated_at :  "" ,
    } 
}


type StateType = {
    children : React.ReactNode,
}


export const UserContext = createContext ( {} as UserContextType) ;

export const UserState :FC < StateType > = ({children } )=>{
    
    const [ UserData , setUserData ] = useState<UserDataType> ()


    useEffect(()=>{
        const token  = localStorage.getItem('LogToken')  ;
        if(token){
        axios.get("https://myeasykart.codeyogi.io/me",{
            headers : {
            Authorization : token,
            },
        } )
        .then((response :any )=>{
  
            setUserData(response.data);

        }).catch((e : any)=>{
            localStorage.removeItem('LogToken');

        })
        }

        },[])
    
    
    
    
    
        
        const LogOut=()=>{
            localStorage.removeItem("logIn_Token");
            setUserData(TempUser);
    
    
        }
    
    return (
            <UserContext.Provider  value = {{ UserData , setUserData}}>
                    {children}
            </UserContext.Provider>
    )
}