import { useMutation, useQueryClient } from '@tanstack/react-query';
import { placeOrder as placeOrderApi } from '../../services/ordersApi';
import { resetStores } from '../../Utils/resetStores';

export function usePlaceOrder() {
  const queryClient = useQueryClient();

  const { mutate: placeOrder, isPending: isPlacing } = useMutation({
    mutationFn: placeOrderApi,
    onSuccess: () => {
      console.log('Order placed successfully');
      resetStores(); // reset UI state
      queryClient.invalidateQueries({ queryKey: ['orders'] }); // reset Server state
    },
    onError: (err) => console.log(err.message),
  });

  return { placeOrder, isPlacing };
}
