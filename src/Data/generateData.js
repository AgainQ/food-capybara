import fs from 'fs';

//List all meal categories
const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const url1 = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

// filter by category
const url2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// get full info by id
const url3 = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959';

// id
// name
// category
// thumb (img)
// ingredients

const foodItems = [];

// prettier-ignore
const categories = ['Говядина', 'Завтрак', 'Курица', 'Десерт', 'Коза', 'Баранина', 'Разное',
   'Паста', 'Свинина', 'Морепродукты', 'Гарнир', 'Закуска', 'Веганский', 'Вегетарианский']

function randomInt(min, max) {
  const randInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const roundedDown = Math.floor(randInt / 10) * 10;
  return roundedDown;
}

async function fetchIds(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const res = await fetch(url);
  const data = await res.json();
  const ids = data.meals.map(item => item.idMeal);
  return ids.slice(0, 5);
}

async function collectFoodIds() {
  const allFoodIds = [];

  for (const category of categories) {
    const ids = await fetchIds(category);
    allFoodIds.push(...ids);
  }
  return allFoodIds;
}

async function fetchMealDetails(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.meals[0]; // Access the first item in the meals array
}

async function collectFoodData() {
  const allFoodIds = await collectFoodIds();

  for (const id of allFoodIds) {
    const mealDetails = await fetchMealDetails(id);
    const { idMeal, strMeal, strCategory, strMealThumb } = mealDetails;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetails[`strIngredient${i}`];
      if (ingredient) ingredients.push(ingredient);
    }

    foodItems.push({
      id: idMeal,
      name: strMeal,
      category: strCategory,
      img: strMealThumb,
      ingredients,
      price: randomInt(80, 300),
    });
  }

  // write to json
  fs.writeFileSync('food.json', JSON.stringify(foodItems, null, 2), 'utf-8');
  console.log('Data has been written to food.json');
}

collectFoodData();

// get ids (5 ids from each category)
// forEach id => get mealDetails => create meal {} => add it to foodItems []
