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
