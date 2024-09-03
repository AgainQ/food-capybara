import { getRestaurantInfo } from '../services/restaurantInfoApi';
import { useQuery } from '@tanstack/react-query';

export function useGetRestaurantInfo() {
  const { data, isPending, error } = useQuery({
    queryKey: ['restaurant_info'],
    queryFn: getRestaurantInfo,
  });

  return { data, isPending, error };
}
