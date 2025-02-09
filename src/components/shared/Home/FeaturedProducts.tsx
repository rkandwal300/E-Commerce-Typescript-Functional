import Loading from '@/e-com/Error_&_Loading/Loading';
import { useGetProducts } from '@/lib/hooks/useProducts';
import Product from '../Product/Product';

export default function FeaturedProducts() {
  const {
    data: productList,
    isLoading,
    isError,
  } = useGetProducts({ page: 1, limit: 4 });
  if (isError) return <></>;
  if (isLoading) return <Loading />;
  return (
    <div className="h-fit w-full flex justify-center items-center  mb-[50px] ">
      <div className=" h-hit max-w-[1220px]  flex sm:flex-row   flex-col flex-wrap  justify-center items-center  ">
        <div className=" flex flex-col  justify-center items-center">
          <div className="  text-2xl font-semibold  text-gray-700 my-2  mb-3   ">
            {' '}
            Our Featured Products{' '}
          </div>
          <div className="h-1 w-28 mb-[60px] bg-red-500"></div>
        </div>

        <div className=" flex sm:flex-row   flex-col flex-wrap  justify-center items-center ">
          {productList?.products.map((val) => {
            return (
              <Product
                {...val}
                key={val.id}
                thumbnail={val.thumbnail}
                title={val.title}
                id={val.id}
                price={val.price}
                rating={val.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
