const apiKey = "&apiKey=94564cc1b6754402a0363870a50ee0bf";
const apiKeyTwo = "&apiKey=1cb337ec57a447e488f87ef787b2db7e";
const url = "https://api.spoonacular.com/";
const urltype = "recipes/";

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
