import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoOutput from "./TodoOutput";
import TodoTop from "./TodoTop";

let oldData: string[];
let oldLowerData: string[];
oldData = [
  "clean my computer",
  "Buy new keyboard",
 
];

oldLowerData = [ "Write an article about @xstate/test"];

const ToDo1 = () => {
  const [Data , newData ] = useState <string[]>(oldData) 

  const [LowerData , setLowerData ] = useState <string[]>(oldLowerData) 

  const [hide, setHide] = useState(false);




  


const newUpperData = (str:string)=>{
    
    let data= [...oldData , str];
    // data.push(str)
    newData(data) 
  
}
oldData = Data;

const newLowerData = (id :number)=>{

  let str = Data.splice(id, 1);
    

   let data  = [...oldLowerData , ...str];
   setLowerData(data);

}
  
oldLowerData = LowerData;


const handleCheckedData = (id :number)=>{
    
  let str = LowerData.splice(id, 1);

  let data= [...oldData , ...str];
  // data.push(str)
  newData(data) 

}

const handleDeleteData = (id :number)=>{

  let data = LowerData;
    
   data.splice(id, 1);

  setLowerData(data);

}



  let handleRefresh = () => {
    window.location.reload();
  };

  let handleHide = ( b:boolean) => {
    setHide(b);
  };

  return (
    <div>
      <p className=" h-[60px] w-full border-b-2  border-slate-300  text-2xl   text-slate-600 flex justify-start  items-center pl-[30px]    ">
        XTODO!
      </p>

      <div className=" ml-[30px] mt-[40px]  mr-[50px]  flex flex-nowrap justify-between  items-center  ">
        <p className=" text-3xl font-bold  selection:bg-slate-300    ">
          {" "}
          Things to get done
        </p>

        <span
          className="bg-yellow-400  px-[40px] py-[15px] rounded-lg  shadow-lg shadow-slate-500 cursor-pointer font-bold text-white hover:scale-105 selection:bg-yellow-400 "
          onClick={handleRefresh}
        >
          {" "}
          Refresh
        </span>
      </div>

      <div className="  ml-[40px]  mt-[50px] ">
        <TodoTop list={Data} setIndex={newLowerData} />

      {
        hide  ?(
        
        <TodoInput  setList={  newUpperData}    show= {handleHide} />
        ):(
    
        <span onClick={ ()=>{ handleHide (true)}}
          className="bg-yellow-400  px-[30px] py-[15px] rounded-xl  shadow-lg shadow-slate-500 cursor-pointer  text-white hover:scale-105 selection:bg-yellow-400   "
         
        >
          {" "}
          + Add a todo
        </span>
        )
      }
     

        <div className=" mt-[30px] ">
          {" "}
          <TodoOutput data={LowerData}  deleteData={handleDeleteData} setData={handleCheckedData}  />
        </div>
      </div>
    </div>
  );
};

export default ToDo1;
