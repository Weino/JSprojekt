let content = document.querySelector(".maincontent");

window.onload = function () {
  let random = "random";
  getApi(random);
};
function getApi(getString) {
  fetch(
    "https://api.spoonacular.com/recipes/" +
      getString +
      "?number=10&apiKey=94564cc1b6754402a0363870a50ee0bf"
  )
    .then((response) => response.json())

    .then((data) => {
        let recipe = []
      for (let index = 0; index < data.recipes.length; index++) {
        recipe[index] = data.recipes[index].title;
        console.log(recipe[index]);
      }
    });
}
