export function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomId() {
  return 'id_' + Math.random().toString(36);
}

export function formatPrice(price) {
  const formatedPrice = `${price} ₽`;
  return formatedPrice;
}

export function getAllMeals(meals) {
  const keys = Object.keys(meals);
  let allMeals = [];
  keys.forEach((key) => meals[key].forEach((i) => allMeals.push(i)));
  return allMeals;
}

export function categorizeMenu(menu = []) {
  const categorizedMenu = menu.reduce((acc, meal) => {
    const { category } = meal;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(meal);
    return acc;
  }, {});

  return categorizedMenu;
}

export function sliceStringWithoutCuttingWords(inputString, maxLength) {
  const words = inputString.split(' '); // Split the string into an array of words
  let result = ''; // Initialize the result string
  let truncated = false; // Flag to check if the string was truncated

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if ((result + (result ? ' ' : '') + word).length > maxLength) {
      truncated = true; // Mark that the string was truncated
      break; // If adding the next word exceeds the max length, break out of the loop
    }
    result += (result ? ', ' : '') + word; // Add the word to the result with a space if it's not the first word
  }

  if (truncated) {
    result += ' and ...'; // Add 'and ...' if the string was truncated
  }

  return result;
}
