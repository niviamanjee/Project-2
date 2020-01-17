const API_KEY = "f00927d28fd14a4fa274e892d9a2af03";

function getRecipeIDs(ingredients) {
  var ingredientList = [];

  ingredientList.push(ingredients);
  var queryUrl =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    ingredientList +
    "&number=20&instructionsRequired=true&apiKey=" +
    API_KEY;

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(
    function(result) {
      for (var i = 0; i < result.length; i++) {
        console.log(`result: ${result[i].id}`);
      }
      // return result

      console.log(`Query URL: ${queryUrl}`);
    },
    function(error) {
      console.log(error);
    }
  );
}

getRecipeIDs("eggs,bacon,onions");
