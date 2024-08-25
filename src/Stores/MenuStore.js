import { create } from 'zustand';
import { categorizeMeals } from '../Utils/utils';

// const baseUrl = 'http://localhost:8000';

export const useMenuStore = create((set) => ({
  isLoading: false,
  error: '',
  meals: [],
  // activeCategory: null,

  fetchMeals: async () => {
    set({ isLoading: true, error: '' });
    try {
      const res = await fetch('/meals.json');
      const data = await res.json();
      const meals = data.meals;
      const categorizedMeals = categorizeMeals(meals);

      set({ meals: categorizedMeals, isLoading: false });
      console.log('Successfully fetched meals');
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));
