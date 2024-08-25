import { create } from 'zustand';

export const useMealStore = create((set) => ({
  activeMeal: [],
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
}));
