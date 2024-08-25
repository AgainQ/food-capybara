import { create } from 'zustand';
import { resetStores } from '../Utils/resetStores';

// const baseUrl = 'http://localhost:8000';

export const useOrdersStore = create((set) => ({
  orders: [], //  "GLOBAL - SERVER STATE"

  // fetchOrders:
  // rateOrder:

  placeOrder: (order) => {
    console.log('Placed order');

    // reset stores
    resetStores();
    // update ui
    set((state) => ({
      orders: [...state.orders, order],
    }));
  },

  // placeOrder: async (order) => {
  //   await fetch(`${baseUrl}/orders`, {
  //     method: 'POST',
  //     body: JSON.stringify(order),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   console.log('Successfully placed order');
  //   // reset stores
  //   resetStores();
  //   // update ui
  //   set((state) => ({
  //     orders: [...state.orders, order],
  //   }));
  // },
}));
