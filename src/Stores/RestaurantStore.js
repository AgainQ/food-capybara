import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useRestaurantStore = create(
  devtools((set, get) => ({
    isLoading: false,
    error: '',

    name: '',
    location: null,
    openHours: null,
    offers: null,
    minOrder: 0,
    reviews: [],

    fetchRestaurantInfo: async () => {
      set({ isLoading: true, error: '' });
      try {
        const res = await fetch('/meals.json');
        const data = await res.json();
        const info = data.restaurantInfo;
        const { name, location, openHours, offers, minOrder, reviews } = info;

        // prettier-ignore
        set({ name, location, openHours, offers, minOrder, reviews, isLoading: false });

        console.log('Successfully fetched restaurant info');
      } catch (err) {
        set({ error: err.message, isLoading: false });
      }
    },
    // add review

    // Derived State:
    getDistanceFromUser: () => {},

    getIsOpen: () => {
      const currentDate = new Date();
      const curDay = currentDate.getDate();
      const curHour = currentDate.getHours();

      const { open, close } = get().openHours[curDay];

      const isOpen = curHour >= open && curHour < close;
      return isOpen;
    },

    getAvrRating: () => {
      const reviews = get().reviews;
      if (reviews.length === 0) return null;

      const totalRating = reviews.reduce((acc, cur) => acc + cur.rating, 0);
      const avrRating = totalRating / reviews.length;
      return avrRating;
    },
  }))
);
