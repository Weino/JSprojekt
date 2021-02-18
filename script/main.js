let content = document.querySelector(".maincontent");

window.onload = function () {
  let random = "random";
  getApi(random);
};
function getApi(getString) {
  fetch(
    "https://api.spoonacular.com/recipes/" +
      getString +
      "?number=12&apiKey=94564cc1b6754402a0363870a50ee0bf"
  )
    .then((response) => response.json())

    .then((data) => {
      let recipe = [];
      for (let index = 0; index < data.recipes.length; index++) {
        recipe[index] = {
          Name: data.recipes[index].title,
          Image: data.recipes[index].image,
          Time: data.recipes[index].readyInMinutes,
          Dishtype: data.recipes[index].dishTypes,
        };
        console.log(recipe[index]);

        let recipeDiv = document.createElement("div");
        let recipeName = document.createElement("h5");
        let recipeImage = document.createElement("img");
        let recipeTime = document.createElement("p");
        let recipeType = document.createElement("p");

        recipeImage.src = recipe[index].Image;
        recipeType.innerHTML = "Type of meal: <br>" + recipe[index].Dishtype;
        recipeTime.innerHTML ="Time: <br>Ready in " + recipe[index].Time + " minutes";
        recipeName.innerHTML = recipe[index].Name;

        recipeDiv.appendChild(recipeImage);
        recipeDiv.appendChild(recipeName);
        recipeDiv.appendChild(recipeType);
        recipeDiv.appendChild(recipeTime);
        content.appendChild(recipeDiv);
      }
    });
}
