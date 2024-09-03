import { getRestaurantInfo } from '../services/restaurantInfoApi';
import { useQuery } from '@tanstack/react-query';

export function useGetRestaurantInfo() {
  const {
    data: restaurantInfo,
    isPending,
    error,
  } = useQuery({
    queryKey: ['restaurant_info'],
    queryFn: getRestaurantInfo,
  });

  return { restaurantInfo, isPending, error };
}
