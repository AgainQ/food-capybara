import { useQuery } from '@tanstack/react-query';
import { getOrder as getOrderApi } from '../../services/ordersApi';

export function useGetOrder(id) {
  const {
    data: order,
    isPending,
    error,
  } = useQuery({ queryFn: () => getOrderApi(id), queryKey: ['order'] });

  // console.log(order);
  return { order, isPending, error };
}
