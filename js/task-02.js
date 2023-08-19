const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngrediens = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  listIngrediens.appendChild(liItem);
});