const categoriesId = document.querySelector("#categories");
const categoriesClass = categoriesId.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesClass.length}`);

categoriesClass.forEach((item) => {
  const categoriesName = item.querySelector("h2").textContent;
  const categoriesEl = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesEl}`);
});