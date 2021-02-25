let content = document.querySelector(".maincontent");
const apiKey = "&apiKey=94564cc1b6754402a0363870a50ee0bf";
const apiKeyTwo = "&apiKey=1cb337ec57a447e488f87ef787b2db7e";
const url = "https://api.spoonacular.com/";
const urltype = "recipes/";

document.querySelector("#randomlink").onclick = function () {
  removeElement();
  let random = "random";
  let number = "?number=3";
  let mealType = "&tags=dinner";
  let sendString = random + number + mealType;
  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Random Meals";
  content.appendChild(createAltHeader);

  getApi(sendString);
};

document.querySelector("#veggielink").onclick = function () {
  removeElement();
  let random = "random";
  let number = "?number=3";
  let veggie = "&vegetarian=true";
  let sendString = random + number + veggie;
  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Vegetarian";
  content.appendChild(createAltHeader);

  getApi(sendString);
};

document.querySelector("#veganlink").onclick = function () {
  removeElement();
  let random = "random";
  let number = "?number=3";
  let vegan = "&vegan=true";
  let sendString = random + number + vegan;
  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Vegan";
  content.appendChild(createAltHeader);

  getApi(sendString);
};

document.querySelector("#quicklink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let mealType = "&type=dinner";
  let addInfo = "&addRecipeInformation=true";
  let quickmeal = "&maxReadyTime=16";

  let sendString = random + number + mealType + addInfo + quickmeal;

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Quick Meals";
  content.appendChild(createAltHeader);

  getApi(sendString);
};
function getApi(getString) {
  fetch(url + urltype + getString + apiKey)
    .then((response) => response.json())

    .then((data) => {
      writeOut(data);
    });
}

function writeOut(data) {
  let recipe = [];
  let search = document.querySelector(".search-button");
  let search_term = "";

  search.addEventListener("input", (e) => {
    search_term = e.target.value;
    showRecipe();
  });

  const showRecipe = async () => {
    // clear the results
    content.innerHTML = "";

    let result = recipe.filter((recipe) => recipe.Name.includes(search_term));

    console.log(result);
  };
  try {
    for (let index = 0; index < data.recipes.length; index++) {
      recipe[index] = {
        Name: data.recipes[index].title,
        Image: data.recipes[index].image,
        Time: data.recipes[index].readyInMinutes,
        Dishtype: data.recipes[index].dishTypes,
        Summary: data.recipes[index].summary,
      };

      let recipeDiv = document.createElement("div");
      let imgDiv = document.createElement("div");
      let recipeInfoDiv = document.createElement("div");
      let recipeName = document.createElement("h5");
      let recipeImage = document.createElement("img");
      let recipeTime = document.createElement("p");
      let recipeType = document.createElement("p");
      let recipeSum = document.createElement("p");
      let toRecipe = document.createElement("button");

      recipeSum.innerHTML = recipe[index].Summary;
      toRecipe.innerHTML = "View";
      toRecipe.className = "recipebtn";
      toRecipe.id = "recipe" + index;
      recipeDiv.id = "recipediv";
      recipeInfoDiv.id = "info";
      imgDiv.id = "imgdiv";
      recipeImage.src = recipe[index].Image;
      recipeType.innerHTML =
        "<b>Type of meal:</b> <br>" + recipe[index].Dishtype;
      recipeTime.innerHTML =
        "<b>Time:</b> <br>Ready in " + recipe[index].Time + " minutes";
      recipeName.innerHTML = recipe[index].Name;

      imgDiv.appendChild(recipeImage);
      imgDiv.appendChild(recipeType);
      imgDiv.appendChild(recipeTime);
      imgDiv.appendChild(toRecipe);

      recipeInfoDiv.appendChild(recipeName);
      recipeInfoDiv.appendChild(recipeSum);

      recipeDiv.appendChild(imgDiv);
      recipeDiv.appendChild(recipeInfoDiv);

      content.appendChild(recipeDiv);
    }
  } catch {
    for (let index = 0; index < data.results.length; index++) {
      recipe[index] = {
        Name: data.results[index].title,
        Image: data.results[index].image,
        Time: data.results[index].readyInMinutes,
        Dishtype: data.results[index].dishTypes,
        Summary: data.results[index].summary,
      };
      console.log(data.results[index])

      let recipeDiv = document.createElement("div");
      let imgDiv = document.createElement("div");
      let recipeInfoDiv = document.createElement("div");
      let recipeName = document.createElement("h5");
      let recipeImage = document.createElement("img");
      let recipeTime = document.createElement("p");
      let recipeType = document.createElement("p");
      let recipeSum = document.createElement("p");
      let toRecipe = document.createElement("button");

      recipeSum.innerHTML = recipe[index].Summary;
      toRecipe.innerHTML = "View";
      toRecipe.className = "recipebtn";
      toRecipe.id = "recipe" + index;
      recipeDiv.id = "recipediv";
      recipeInfoDiv.id = "info";
      imgDiv.id = "imgdiv";
      recipeImage.src = recipe[index].Image;
      recipeType.innerHTML =
        "<b>Type of meal:</b> <br>" + recipe[index].Dishtype;
      recipeTime.innerHTML =
        "<b>Time:</b> <br>Ready in " + recipe[index].Time + " minutes";
      recipeName.innerHTML = recipe[index].Name;

      imgDiv.appendChild(recipeImage);
      imgDiv.appendChild(recipeType);
      imgDiv.appendChild(recipeTime);
      imgDiv.appendChild(toRecipe);

      recipeInfoDiv.appendChild(recipeName);
      recipeInfoDiv.appendChild(recipeSum);

      recipeDiv.appendChild(imgDiv);
      recipeDiv.appendChild(recipeInfoDiv);

      content.appendChild(recipeDiv);
    }
  }
}

function removeElement() {
  // tar bort element när man kallar på funktionen
  let removeRecipeDiv = document.querySelectorAll("#recipediv");
  for (let index = 0; index < removeRecipeDiv.length; index++) {
    removeRecipeDiv[index].remove();
  }

  let removeheader = document.querySelectorAll("h3");

  for (let index = 0; index < removeheader.length; index++) {
    removeheader[index].remove();
  }
}
