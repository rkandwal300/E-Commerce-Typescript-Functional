import React, { FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";



type ToDoList ={
  data :string[],
  setData : any,
  deleteData : any


}



const TodoOutput :FC<ToDoList> = ({data , setData  ,  deleteData }) => {

// console.log ( ' output data = ',data)

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    let b = event.target.id;
    b=b.substring(1, 3);
     let n :number =+b;
    console.log(n);
    setData(n);
  };


  
  let Pdelete = (event: React.MouseEvent) => {

    let b = event.currentTarget.getAttribute('id');
    if(b){
     b=b.substring(1, 3);
    let n :number =+b;
  //  console.log(n);
   deleteData(n);
 
  }else{console.log('pnti hogyi')}}


  return (
    <div className=" mt-[20px]  ">
      <p className=" text-xl  text-black tracking-wider "> Things Done</p>

      <div className="  mt-[20px] ">





      { data? (
          data .map((value : string , index : number)=>{



          return   <div className='flex  justify-start items-center'   >
                      < input id={'a'+index  }
                          type='checkbox'
                          className=' border-2  h-4 w-4 mr-[10px] text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yelloe-400'
                          onChange={handleChange}
                          /> 
                      <div> {value}  </div>  
                      <span  id={'a'+index  }     
                      className="ml-[10px] text-xl hover:text-red-700 "
                      onClick={Pdelete}
                      > <AiOutlineDelete />  </span>
                  </div>


          })) : ( 

             <p className=" text-lg  text-slate-400  tracking-wider ">

          No todos here!
          </p>
          )
         }

      </div>
    </div>
  );
};

export default TodoOutput;
