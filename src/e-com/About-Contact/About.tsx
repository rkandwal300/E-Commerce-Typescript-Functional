import React from 'react'

const About = () => {
  return (

    <div className=' w-full py-6    '>


    <div className='selection:bg-red-500 selection:text-white '>
        <div className='w-full flex flex-col justify-center items-center  '>
        <div className='  h-[162px] w-[550px]   my-6 flex flex-col justify-center items-center'>
            <div className=' text-5xl font-bold text-gray-600 my-3 ' > About Us</div>
            <div className=' text-xs text-gray-500  '> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  </div>
        </div>
        </div>

        <div className='flex justify-center items-center  px-4 flex-col md:flex-row  '>
            <div className=' w-[550px]  h-fit  mr-3  mb-11'>
                <div  className=' text-3xl font-bold text-gray-600 my-3  mb-6 '> We Are Your Favourite, Online Store. </div>
                <p  className='  text-xs text-gray-500 my-2  ' > Dui habitasse provident eu etiam praesent placeat maiores temporibus, accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq. </p>
                <p className='  text-xs text-gray-500   ' > Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem quam sit possimus? Quam cras facilisi officia fusce. Ac, excepteur excepteur fusce? Sunt minim expedita magnis! </p>
            </div>
            <div className=' flex flex-wrap sm:flex-nowrap '>

                <div>
                <div className='w-full   sm:w-[146px] mx-4 '>
                    <div className='flex flex-col  text-gray-600 font-semibold justify-center items-center text-lg   '>
                        <div className=' text-red-500  ' > icon</div> 
                        <div> Eros Imperdie</div>
                    <div className=' text-xs text-gray-500  '>We’ll generate a sitemap for your site, submit it to search engine is and track. </div>

                    </div>

                </div>
                <div className='w-full   sm:w-[146px] mx-4 justify-center items-center  '>
                    <div className='flex flex-col text-lg text-gray-600 font-semibold '>
                        <div className=' text-red-500  '> icon</div> 
                        <div>Proident Congu </div>
                    <div className=' text-xs text-gray-500  '>We’ll generate a sitemap for your site, submit it to search engine is and track. </div>

                    </div>

                </div>
                </div>

                <div>
                <div className='w-full   sm:w-[146px] mx-4 '>
                    <div className='flex flex-col text-lg text-gray-600 font-semibold justify-center items-center '>
                        <div className=' text-red-500  ' > icon</div> 
                        <div> Proident Congu</div>
                    <div className=' text-xs text-gray-500  '>We’ll generate a sitemap for your site, submit it to search engine is and track. </div>

                    </div>

                </div>
                <div className='w-full   sm:w-[146px] mx-4 my-5 '>
                    <div className='flex flex-col text-lg justify-center items-center text-gray-600 font-semibold '>
                        <div className=' text-red-500  '> icon</div> 
                        <div> Vero Maecenas </div>
                    <div className=' text-xs text-gray-500  '>We’ll generate a sitemap for your site, submit it to search engine is and track. </div>

                    </div>

                </div>
                </div>



            </div>
        </div>



    </div>


    </div>
  )
}

export default About