import { useQuery } from '@tanstack/react-query';
import {
  action_fetchAllProducts,
  action_fetchProduct,
} from '../serverActions.ts/products';

export const useGetProducts = ({
  limit = 20,
  page = 1,
}: {
  page: number;
  limit: number;
}) => {
  return useQuery({
    queryKey: ['allProducts', page, limit],
    queryFn: () =>
      action_fetchAllProducts({
        limit,
        skip: (page - 1) * limit,
      }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    keepPreviousData: true, // Keep old data until new data comes
    placeholderData: {
      products: [], // Ensure placeholder structure matches actual data
      skip: 1,
      limit: 10,
      total: 0,
    },
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ['requisitionDetail', id],
    // enabled: !!id,
    queryFn: () => action_fetchProduct(id),
  });
};
