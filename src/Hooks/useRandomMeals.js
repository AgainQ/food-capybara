import { useEffect } from 'react';
import { getAllMeals, randInt } from '../Utils/utils';

// хз зачем из этого делать CustomHook
// потом уберу

export function useRandomMeals(meals, setState) {
  console.log(meals);

  useEffect(() => {
    if (meals.length === 0) return;

    const allMeals = getAllMeals(meals);
    const randomMeals = new Set();

    while (randomMeals.size < 10 && randomMeals.size < allMeals.length) {
      const randMeal = allMeals[randInt(0, allMeals.length - 1)];
      randomMeals.add(randMeal);
    }

    setState(Array.from(randomMeals));
  }, [meals, setState]);
}
