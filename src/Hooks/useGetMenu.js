import { useQuery } from '@tanstack/react-query';
import { getMenu } from '../services/menuApi';

import { categorizeMenu } from '../Utils/utils';

export function useGetMenu() {
  const { data, isPending, error } = useQuery({
    queryFn: getMenu,
    queryKey: ['menu'],
    staleTime: 5 * 60 * 1000,
  });

  const menu = categorizeMenu(data);

  return { menu, isPending, error };
}
