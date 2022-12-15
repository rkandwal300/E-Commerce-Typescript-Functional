import React, { useContext, useState } from 'react'
import { BsChevronDown , BsChevronUp } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/Apis';
import { cartDataContext } from '../Context/CartContext';
import { TempUser, UserContext } from '../Context/UserContext';

const Headerr = () => {
  
  const { UserData , setUserData  } = useContext (UserContext);
  const {total  }  = useContext(cartDataContext);
  const [ menu , setMenu ] = useState(false);
  const [ subMenuClass , setSubMenuClass ] = useState(false);

  const handleMenu = ()=>{
    const  oppositeMenu = !menu;
    setMenu(oppositeMenu);


  }

  const handleSubMenu = ()=>{
    const  oppositeMenu = !subMenuClass;
    setSubMenuClass(oppositeMenu);


  }
  const handleLofOut = () =>{
    localStorage.removeItem('LogToken');
    setUserData(undefined);

  }


  return (

    
          
          <div className={ 'selection:bg-red-300 shadow-lg border-b-2 border-gray-300 flex justify-start items-center md:h-[70px] '  + (subMenuClass == true ? '  h-[305px]  ' : '  h-[70px] '  )  + (menu == true ? '  h-[245px]  ' : '  h-[60px] '  ) } >
    

      <div className='   w-full h-full mt-[15px]     ' >


        <div className='flex  justify-between f-full items-center '>


          <div className='w-[180px] md:ml-[30px] mb-12 md:mb-0  md-[80px] lg:ml-[100px] xl:[120px] 2xl:ml-[140px] '>   
            <div className=' mt-2  w-[120px]  mx-3'> 
              <Link  to='/' >  <img  src='https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg'  width='100%'  />
              </Link></div> 
          </div>
          
          <div className='flex  md:h-[50px]  '>
          {/* menu starts */}
          
            
            <nav className={'  ml-0  md:ml-9  md:flex md:sticky  md:flex-row absolute top-[75px] left-0  h-fit  flex flex-col w-full  md:w-fit '    + (menu == true ? '' :'hidden md:flex'  )  }>
                <Link to='/' 
                className='py-2 
                px-4 
                tracking-wider
                text-[12px]
                font-[500] 
                font-sans
              text-gray-500 
                flex
                justify-start 
                items-center  
                md:border-0
                border-y-[1px] 
                border-gray-200 
                hover:text-red-400   ' >
                  HOME 
                
                </Link>
                <Link to = '/products' className='py-2 px-4 tracking-wider
                text-[12px]
                font-[500]  text-xs font-sans text-gray-500 flex justify-start items-center  md:border-0 border-b-[1px] border-gray-200 hover:text-red-400   ' >  ALL PRODUCTS </Link>

                <Link to = '/About' className='py-2 px-4 text-xs font-sans text-gray-500 tracking-wider
                text-[12px] 
                font-[500]  flex justify-start items-center md:border-0 border-b-[1px] border-gray-200 hover:text-red-400   ' >  ABOUT </Link>

                <Link to= '/contact' className='py-2 px-4 text-xs font-sans
                tracking-wider
                text-[12px]
                font-[500]  text-gray-500 flex justify-start items-center md:border-0  border-b-[1px] border-gray-200 hover:text-red-400   ' > CONTACT </Link>
                <li className='flex  ' onClick={handleSubMenu} >  


                  <div className='py-2 w-full px-4 text-xs font-sans 
                tracking-wider
                text-[12px]
                font-[500] text-gray-500 flex justify-between items-center md:border-0 border-b-[1px] border-gray-200 hover:text-red-400    '>

                    <div className='mr-8 cursor-pointer md:mr-3'>ACCOUNT  </div>
                  { subMenuClass ? (  <div  > <BsChevronUp />  </div>):
                  ( <div> <BsChevronDown />  </div>)
                    }

                    </div> 
                    </li>

                    { subMenuClass ?(
                    <Link to = '/my-account' className='   md:absolute md:top-[62px] md:left-[330px] md:shadow-lg md:w-36     text-xs bg-white font-sans w-full font-[500]  text-gray-500 flex justify-start items-center  border-b-[1px] border-gray-200 hover:text-red-400   '    >
                    <ul className= 'w-full'>
                      <li className='py-2 px-4 text-xs font-sans
                tracking-wider
                text-[12px]
                font-[500]  text-gray-500 flex justify-start items-center  border-b-[1px] border-gray-200 hover:text-red-400   '> {
                  UserData ? (
                    <div onClick={handleLofOut}>{'> Log Out '} </div>
                  ):(<div>  {' >  MY ACCOUNT '} </div>
                  )}</li>
                      <Link to = '/carts'  className='py-2 px-4 text-xs font-sans
                tracking-wider
                text-[12px]
                font-[500]  text-gray-500 flex justify-start items-center  border-b-[1px] border-gray-200 hover:text-red-400   '>
                {'>    CART '}</Link>
                    </ul>
                    </Link>):(
                      <div></div>
                    )
                    }
            </nav>
          



            <Link to= '/carts' className='  cursor-pointer   items-center   hover:text-red-400 ml-[100px] mb-5 relative left-[-60px] top-[-20px] md:left-[-60px]  md:top-[-10px] '>


                            <div className=' rotate-180 relative top-3 left-[-9px] text-lg text-red-500 font-semibold  rounded-full '> U</div>

                            <div className=  'text-red-500 font-semibold   hover:text-black hover:bg-red-500 rounded-b-[17%]  px-2 py-0 border-[3px]  cart border-red-500  text-sm   min-w[60px]     '     >  {total} </div>

                            </Link>




              <div  className=' h-9 aspect-square relative left-[-40px] flex justify-center items-center cursor-pointer md:hidden bg-red-500 text-white'
              onClick={handleMenu}
              >{
                (menu == true ? 'x': <FaBars />   ) 
              }</div>

            </div>
          

            <div className=' hidden md:block'></div>
        </div>

        </div>
      
        
        </div>

  )
}


export default Headerr