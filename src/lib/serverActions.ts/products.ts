import axios from 'axios';
import { TProduct, TProductList } from '../types/product';

export const action_fetchAllProducts = async ({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
  //   sort: 'asc';
}): Promise<TProductList> => {
  const pathname = ['products'].join('/');
  const searchParams = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
  });
  const baseUrl = new URL(pathname, import.meta.env.VITE_BACKEND_URL);
  baseUrl.search = searchParams.toString();

  return axios.get(baseUrl.toString()).then((res) => {
    return res.data;
  });
};
export const action_fetchProduct = async (id: string): Promise<TProduct> => {
  const pathname = [import.meta.env.VITE_BACKEND_URL, 'products', id].join('/');
  const baseUrl = new URL(pathname, import.meta.env.VITE_BACKEND_URL);

  const data = await axios.get(baseUrl.toString()).then((res) => {
    return res.data;
  });
  console.log({ data });
  return data;
};
