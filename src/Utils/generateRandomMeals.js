import { getAllMeals, randInt } from '../Utils/utils';

export function generateRandomMeals(meals, count = 10) {
  if (!meals || meals.length === 0) return [];

  const allMeals = getAllMeals(meals);
  const randomMeals = new Set();

  while (randomMeals.size < count && randomMeals.size < allMeals.length) {
    const randMeal = allMeals[randInt(0, allMeals.length - 1)];
    randomMeals.add(randMeal);
  }

  return Array.from(randomMeals);
}
