import React, { FC, useState } from "react";

type setToDoList = {
  setList: any,
  show :  any,

};
const TodoInput: FC<setToDoList> = ({ setList ,show  }) => {
  const [inputValue, setInputValue] = useState("");
  const [ value , setValue ] = useState('');

  let arr :string[]= [];
 



  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleclick  =(event: React.MouseEvent<HTMLElement>)=>{

    if(inputValue){
      setList(inputValue);
      show(false);
    }

  }




  return (
    <div className=" rounded-xl shadow-lg w-[95%] pl-[50px]  py-[30px]     ">
      <p className=" text-xl  text-black tracking-wider ">Create a todo</p>

      <input
        type="text"
        value={inputValue}
        placeholder="Write an article about XState"
        className=" my-[25px]  pl-[20px] w-[350px] py-[8px] rounded-lg shadow-lg  ml-[20px]  border-2 border-slate-400  text-left  "
        onChange={handleChange}
      />

      <div className="ml-[20px] flex    ">
        <span className="bg-yellow-500  px-[20px] mx-[20px] flex justify-center items-center h-[45px]  rounded-lg  shadow-md shadow-slate-500 cursor-pointer text-white hover:scale-105 selection:bg-yellow-400 "
        onClick={handleclick}
        >
          save
        </span>

        <span className="bg-white px-[20px]  flex justify-center items-center h-[45px]  rounded-lg  shadow-md shadow-slate-500 cursor-pointer  text-black  hover:scale-105 selection:bg-yellow-400 "   
        onClick={()=>{
          show(false)}}
        >
          Cancel
        </span>
      </div>
    </div>
  );
};

export default TodoInput;
