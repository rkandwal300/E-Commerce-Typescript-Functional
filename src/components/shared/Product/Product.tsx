import { TProduct } from '@/lib/types/product';
import { FC } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Product: FC<TProduct> = ({
  thumbnail,
  title,
  id,
  price,
  rating,
  ...props
}) => {
  return (
    <div>
      <div>
        <div
          id={'a' + id}
          className=" h-fit  max-w-[258px] mx-[10px] hover:cursor-pointer "
        >
          <div className="aspect-square max-w-[258px] overflow-hidden flex bg-contain  my-2   shadow-md ">
            <img
              className=" w-full  object-cover"
              src={'thumbnail'}
              width="100%"
              alt={title}
              loading="lazy"
            />
          </div>
          <div className="h-[88px]  max-w-[258px]   ">
            <div className="h-[17px]  w-[258px] text-xs  font-semibold text-slate-400 mt-1 ">
              <span> mugs </span>{' '}
            </div>
            <div className="max-h-[23px]  max-w-[258px] text-base  font-semibold overflow-hidden ">
              <span className=" h-[23px] w-full top-[-1px]   "> {title} </span>
            </div>
            <div className="h-[13px]  w-[69px]  ">
              <span className=" text-xl font-semibold flex text-red-500 ">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
            </div>
            <div className="h-[22px]  w-[258px] text-base  font-semibold   ">
              {' '}
              &#8377; {price}{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
