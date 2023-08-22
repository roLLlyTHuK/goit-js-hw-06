const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories:`, Number(categoriesItems.length));

//!TEG variations

// categoriesItems.forEach(categoryItem => {
//   const categoryName = categoryItem.querySelector('h2').textContent;
//   const categoryElements = categoryItem.querySelectorAll('ul li').length;

//   console.log(`Category:`, categoryName);
//   console.log(`Elements:`, Number(categoryElements));
// });

//!DOM variation

categoriesItems.forEach(categoryItem => {
  const categoryName = categoryItem.firstElementChild.textContent;
  const categoryElements = categoryItem.children.length;

  console.log(`Category:`, categoryName);
  console.log(`Elements:`, Number(categoryElements));
});