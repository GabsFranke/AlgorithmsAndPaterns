const vegetables = [
  "tomato",
  "onion",
  "lettuce",
  "eggplant",
  "mushrooms",
  "bellpepper",
];
const sauces = [
  "mayonnaise",
  "ketchup",
  "mustard",
  "barbecue",
  "chipotle",
  "hot sauce",
];
const proteins = ["beef", "chicken", "pork", "lentils", "chickpeas"];
const cheeses = ["cheddar", "gouda", "parmesan", "mozzarella"];
const breads = ["potato bread", "sesame bread", "white bread"];

function balancedBurgerScore(ingredientsList) {

  if (ingredientsList.length === 0) {
    throw new Error("A list of ingredients is required");
  }

  let score = 0;
  let bottomBread = null;
  let topBread = null;

  breads.forEach((bread) => {
    if (ingredientsList[0] === bread) {
      topBread = true;
    }
    if (ingredientsList[ingredientsList.length - 1] === bread) {
      bottomBread = true;
    }
  });

  if (bottomBread && topBread) {
    vegetables.forEach((veggie) => {
      if (ingredientsList.includes(veggie)) {
        score++;
      }
    });
    sauces.forEach((sauce) => {
      if (ingredientsList.includes(sauce)) {
        score++;
      }
    });
    proteins.forEach((protein) => {
      if (ingredientsList.includes(protein)) {
        score++;
      }
    });
    cheeses.forEach((cheese) => {
      if (ingredientsList.includes(cheese)) {
        score++;
      }
    });
  }

  if (bottomBread && topBread && score === 0) {
    score = 1;
  }

  if (score > 5) {
    score = 5;
  }

  return score;
}
