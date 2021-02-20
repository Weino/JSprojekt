let content = document.querySelector(".maincontent");
const apiKey = "&apiKey=94564cc1b6754402a0363870a50ee0bf"
document.querySelector("#randomlink").onclick = function() {
    removeElement();
  let random = "random";
  let number = "?number=3"
  let mealType = "&tags=dinner"
  getApi(random, number, mealType);
};
function getApi(getMeal, getNumber, getType) {
  fetch(
    "https://api.spoonacular.com/recipes/" +
      getMeal + getNumber + getType + apiKey
      
  )
    .then((response) => response.json())

    .then((data) => {
      writeOut(data);
    });
}
function writeOut(data) {
  let recipe = [];
  for (let index = 0; index < data.recipes.length; index++) {
    recipe[index] = {
      Name: data.recipes[index].title,
      Image: data.recipes[index].image,
      Time: data.recipes[index].readyInMinutes,
      Dishtype: data.recipes[index].dishTypes,
      Summary : data.recipes[index].summary,
    };

    let recipeDiv = document.createElement("div");
    let imgDiv = document.createElement("div")
    let recipeInfoDiv = document.createElement("div");
    let recipeName = document.createElement("h5");
    let recipeImage = document.createElement("img");
    let recipeTime = document.createElement("p");
    let recipeType = document.createElement("p");
    let recipeSum = document.createElement("p");

    if (recipe[index].Image === undefined) {
      recipe[index].remove();
    }
    
    recipeSum.innerHTML = recipe[index].Summary;
    recipeDiv.id= "recipediv";
    recipeInfoDiv.id="info";
    imgDiv.id = "imgdiv";
    recipeImage.src = recipe[index].Image;
    recipeType.innerHTML = "<b>Type of meal:</b> <br>" + recipe[index].Dishtype;
    recipeTime.innerHTML =
      "<b>Time:</b> <br>Ready in " + recipe[index].Time + " minutes";
    recipeName.innerHTML = recipe[index].Name;

    imgDiv.appendChild(recipeImage);
    imgDiv.appendChild(recipeType);
    imgDiv.appendChild(recipeTime);

    recipeInfoDiv.appendChild(recipeName);
    recipeInfoDiv.appendChild(recipeSum);

    recipeDiv.appendChild(imgDiv);
    recipeDiv.appendChild(recipeInfoDiv);
    
    content.appendChild(recipeDiv);
  }
}
function removeElement() {
  // tar bort element när man kallar på funktionen
  let removeRecipeDiv = document.querySelectorAll("#recipediv");
  for (let index = 0; index < removeRecipeDiv.length; index++) {
      removeRecipeDiv[index].remove();   
  }
}