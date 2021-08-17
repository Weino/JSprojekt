const apiKey = "&apiKey=1501343de22948558f10e92d0bd4edf4";
const apiKeyTwo = "&apiKey=1cb337ec57a447e488f87ef787b2db7e";
const url = "https://api.spoonacular.com/";
const urltype = "recipes/";
const urlfood = "https://api.spoonacular.com/recipes/{}/information"

function getApi(getString) {
  fetch(url + urltype + getString + apiKey)
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      writeOut(data);
    });
}
function getApiInstructions(getString) {
  fetch(url + urltype + getString + apiKey)
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      writeOutRecipe(data);
    });
}

function getRecipe(id) {
  fetch(url + "recipes/" + id + "/information?" + "apiKey=1501343de22948558f10e92d0bd4edf4")
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      writeOutFavorite(data);
    });
} 