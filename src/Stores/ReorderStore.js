import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useReorderStore = create(
  devtools((set, get) => ({
    orderId: null, // чтобы из Orders page передать в <Reorder/> и <OrderDetails/>
    selectedIDs: [],

    setOrderId: (id) => {
      set({ orderId: id });
    },

    setSelectedIDs: (ids) => {
      set({ selectedIDs: ids });
    },

    toggleSelection: (id) => {
      const isSelected = get().selectedIDs.includes(id);

      if (isSelected) {
        set((state) => ({
          selectedIDs: state.selectedIDs.filter((itemId) => itemId !== id),
        }));
      } else {
        set((state) => ({
          selectedIDs: [...state.selectedIDs, id],
        }));
      }
    },

    resetReorderStore: () => {
      set({ orderId: null, selectedIDs: [] });
    },
  }))
);
