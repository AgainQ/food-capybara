import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  itemsInCart: [],

  addItemToCart: (item) =>
    set((state) => {
      const existingItem = state.itemsInCart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          itemsInCart: state.itemsInCart.map((i) =>
            i.id === item.id ? { ...i, amount: i.amount + 1 } : i
          ),
        };
      }
      return {
        itemsInCart: [...state.itemsInCart, { ...item, amount: 1 }],
      };
    }),

  decreaseItemAmount: (item) => {
    set((state) => ({
      itemsInCart: state.itemsInCart.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount - 1 } : i
      ),
    }));
  },

  deleteItemFromCart: (item) => {
    set((state) => ({
      itemsInCart: state.itemsInCart.filter((i) => i.id !== item.id),
    }));
  },

  setItemAmount: (item, amount) => {
    set((state) => ({
      itemsInCart: state.itemsInCart.map((i) =>
        i.id === item.id ? { ...i, amount } : i
      ),
    }));
  },

  clearCart: () => {
    set({ itemsInCart: [] });
  },

  // Derived state
  getItemsTotalAmount: () => {
    const itemsInCart = get().itemsInCart;
    return itemsInCart.reduce((acc, cur) => acc + cur.amount, 0);
  },

  getItemsTotalPrice: () => {
    const itemsInCart = get().itemsInCart;
    return itemsInCart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);
  },
}));
