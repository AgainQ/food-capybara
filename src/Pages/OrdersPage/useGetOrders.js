import { useQuery } from '@tanstack/react-query';
import { getOrders as getOrderApi } from '../../services/ordersApi';

export function useGetOrders() {
  const { data: orders, isPending } = useQuery({
    queryFn: getOrderApi,
    queryKey: ['orders'],
  });

  return { orders, isPending };
}
