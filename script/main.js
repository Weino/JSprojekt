let searchButton = document.querySelector(".search-button");

searchButton.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    search_term = e.target.value;
    search(search_term);
  }
});
document.querySelector("#randomlink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let mealType = "&tags=dinner";
  let addInfo = "&addRecipeInformation=true";
  let sort = "&sort=random";
  let sendString = random + number + mealType + sort + addInfo;
  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Random Meals";
  content.appendChild(createAltHeader);

  getApi(sendString);
};

document.querySelector("#veggielink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let veggie = "&diet=vegetarian";
  let addInfo = "&addRecipeInformation=true";
  let type = "&sort=random";

  let sendString = random + number + veggie + type + addInfo;
  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Vegetarian";
  content.appendChild(createAltHeader);

  getApi(sendString);
};

document.querySelector("#veganlink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let vegan = "&diet=vegan";
  let addInfo = "&addRecipeInformation=true";
  let type = "&sort=random";

  let sendString = random + number + vegan + type + addInfo;
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
  let type = "&sort=random";

  let sendString = random + number + mealType + addInfo + quickmeal + type;

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Quick Meals";
  content.appendChild(createAltHeader);

  getApi(sendString);
};
document.querySelector("#americanlink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let mealType = "&type=dinner";
  let addInfo = "&addRecipeInformation=true";
  let cuisine = "&cuisine=american";
  let type = "&sort=random";

  let sendString = random + number + mealType + addInfo + cuisine + type;

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Cousine: American";
  content.appendChild(createAltHeader);

  getApi(sendString);
};
document.querySelector("#africanlink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let mealType = "&type=dinner";
  let addInfo = "&addRecipeInformation=true";
  let cuisine = "&cuisine=african";
  let type = "&sort=random";

  let sendString = random + number + mealType + addInfo + cuisine + type;

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Cousine: African";
  content.appendChild(createAltHeader);

  getApi(sendString);
};
document.querySelector("#europeanlink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let mealType = "&type=dinner";
  let addInfo = "&addRecipeInformation=true";
  let cuisine = "&cuisine=european";
  let type = "&sort=random";

  let sendString = random + number + mealType + addInfo + cuisine + type;

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Cousine: European";
  content.appendChild(createAltHeader);

  getApi(sendString);
};
document.querySelector("#asianlink").onclick = function () {
  removeElement();
  let random = "complexSearch";
  let number = "?number=3";
  let mealType = "&type=dinner";
  let addInfo = "&addRecipeInformation=true";
  let cuisine = "&cuisine=korean,japanese,indian,thai,vietnamese";
  let type = "&sort=random";

  let sendString = random + number + mealType + addInfo + cuisine + type;

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Cousine: Asian";
  content.appendChild(createAltHeader);

  getApi(sendString);
};

function search(search_term) {
  removeElement();
  let method = "complexSearch";
  let number = "?number=3";
  let query = "&query=" + search_term;
  let addInfo = "&addRecipeInformation=true";

  let sendString = method + number + query + addInfo + "&sort=random";

  let createAltHeader = document.createElement("h3");

  createAltHeader.innerHTML = "Search Result For: " + search_term;
  content.appendChild(createAltHeader);

  getApi(sendString);
}
