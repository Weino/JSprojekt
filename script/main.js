let content = document.querySelector(".maincontent");

window.onload = function () {
  //window onload skapa lite recept alternativ? typ populära recept.
  for (let i = 0; i < 10; i++) {
    let recipes = document.createElement("div");

    recipes.id = i;

    content.appendChild(recipes);
  }
};
