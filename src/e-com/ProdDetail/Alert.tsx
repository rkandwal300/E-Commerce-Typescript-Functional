import React ,{useState , useContext , useEffect} from 'react'
import { AiOutlineCheckCircle, AiFillCheckCircle , AiFillInfoCircle } from "react-icons/ai";
import { FcCancel  } from "react-icons/fc";
import { AlertContext } from '../Context/AlertContext';

const Alert = () => {

  const {  alertData , setAlertData } = useContext(AlertContext) ;

  const {  type , message , hidden , } = alertData ;

// const [hide, setHide ] = useState (hidden) ;

const AlertDefault =  {type:'', message : ' ' , hidden : false ,} ; 

const handleHide = () =>{
  setAlertData(AlertDefault);
  // setHide(OppositHide);
}

const Timeout =()=>{
  setAlertData(AlertDefault);
}



useEffect(() => {


  if(hidden) {
const myTimeout = setTimeout(Timeout, 3 * 1000);
return ()=>{

clearTimeout(myTimeout);
}}

}, [hidden])



let  text ;
let icon  ,content;



switch (type) {
  case "success":
    content = 'A simple alert with text and a right icon   '
    text = 'text-teal-600';
    icon = <AiFillCheckCircle />
    break;

  case 'add-cart':
    // message = 'A simple alert with text and a right icon   '
    text = 'text-teal-600';
    content = (message + ' has been added to your cart. ')
    icon = <AiFillCheckCircle />
    break;

  case 'error':
    content = ( ' Error' + message ) ;
    text = 'text-red-500';
    icon = <AiOutlineCheckCircle />
    break;

    case 'LogIn':
      content = 'Request failed with status code 401' 
      text = 'text-red-500';
      icon = <FcCancel />
      break;


    case 'test':
      content =  message
      text = 'text-red-500';
      icon = <AiOutlineCheckCircle />
      break;


  default:
    return <div></div>


}



if(hidden){
  return (
    <div>

        
<div className={"relative py-5 pl-4 pr-10 leading-normal flex justify-between items-center bg-gray-200  mb-5 border-t-4 border-red-600    " } role="alert">
<div className="flex justify-center items-center  " >

<div className= {'mr-2 text-xl font-bold text-teal-500  ' + text  }>
{icon}
</div>

  <p className="text-lg"> {content} </p>
  </div>
  <span className="absolute inset-y-0 right-0 flex items-center mr-5">

<div    >
  {/* {alert.type == 'add-cart' ? ( <Link to="/products/Cart" >  <div className=" bg-red-500 text-lg font-semibold text-white py-2   px-4 rounded-lg shadow-lg    "  > View Cart  </div></Link>
  ):( */}
    <div className=""  
    onClick={handleHide}
    > x</div>
  {/* )} */}

</div>

  </span>
</div>
    </div>
  )
}else{
  return <div></div>
}
}

export default Alert
