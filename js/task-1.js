const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements:${item.querySelectorAll("li").length}`);
});
