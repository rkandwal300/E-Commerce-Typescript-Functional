import React, { FC } from 'react'





type ToDoList = {
  list: string[],
  setIndex: any


}


const TodoTop: FC<ToDoList> = ({ list, setIndex }) => {



  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {



    let b = event.target.id;
    b = b.substring(1, 3);
    let n: number = +b;
    console.log(n);
    setIndex(n)
  };


  return (
    <div className='mb-[50px] '>



      <div className="  mt-[20px] ">


        {list ? (
          list.map((value: string, index: number) => {



            return <div className='flex  justify-start items-center'   >
              < input
                 id={'a'+index  }
                type='checkbox'
                className=' border-2  h-4 w-4 mr-[10px] text-yellow-600 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yelloe-400'
                onChange={handleChange}
              />
              <div> {value}  </div>
            </div>


          })) : (

          <p className=" text-lg  text-slate-400  tracking-wider ">

            No todos here!
          </p>
        )
        }





      </div>
    </div>
  )
}

export default TodoTop