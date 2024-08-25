import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useMealStore = create(
  devtools((set) => ({
    activeMeal: null,
    selectedToppings: [],

    // Active Meal
    setActiveMeal: (meal) => {
      set({ activeMeal: meal });
    },
    resetActiveMeal: () => {
      set({ activeMeal: null, selectedToppings: [] });
    },

    // Toppings
    addTopping: (topping) => {
      set((state) => ({
        selectedToppings: [...state.selectedToppings, topping],
      }));
    },
    deleteTopping: (topping) => {
      set((state) => ({
        selectedToppings: state.selectedToppings.filter((t) => t.id !== topping.id),
      }));
    },
  }))
);
