let content = document.querySelector(".maincontent");
function writeOut(data) {
  let recipe = [];

  try {
    for (let index = 0; index < data.recipes.length; index++) {
      recipe[index] = {
        Name: data.recipes[index].title,
        Image: data.recipes[index].image,
        Id: data.recipes[index].id,
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
      toRecipe.id = recipe[index].Id;
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

      //viewRecipe();
    }
  } catch {
    for (let index = 0; index < data.results.length; index++) {
      recipe[index] = {
        Name: data.results[index].title,
        Image: data.results[index].image,
        Id: data.results[index].id,
        Time: data.results[index].readyInMinutes,
        Dishtype: data.results[index].dishTypes,
        Summary: data.results[index].summary,
      };
      console.log(data.results[index]);

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
      toRecipe.id = recipe[index].Id;
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

      viewRecipe(recipe[index].Id);
    }
  }
}

function viewRecipe(id) {
  let toRecipe = document.getElementById(id);
  toRecipe.addEventListener("click", function () {
    removeElement();

    let sendString = id + "/analyzedInstructions?stepBreakdown=true";
    console.log(sendString);

    getApiInstructions(sendString);
  });
}
function writeOutRecipe(data) {
  let instructions = [];
  for (let index = 0; index < data.length; index++) {
    for (let i = 0; i < data[index].steps.length; i++) {
      instructions[index] = {
        Image: data[index].steps[i].equipment.image,
        Instruction: data[index].steps[i].step,
        Number: data[index].steps[i].number,
      };

      let recipeDiv = document.createElement("div");
      let instructionNumber = document.createElement("h5");
      let instructionImage = document.createElement("img");
      let instructionStep = document.createElement("p");

      recipeDiv.id = "recipediv";
      instructionNumber.innerHTML = instructions[index].Number;
      instructionImage.src = instructions[index].Image;
      instructionStep.innerHTML = instructions[index].Instruction;

      recipeDiv.appendChild(instructionNumber);
      recipeDiv.appendChild(instructionImage);

      recipeDiv.appendChild(instructionStep);

      content.appendChild(recipeDiv);
    }
  }
}
