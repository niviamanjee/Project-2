const API_KEY = "f00927d28fd14a4fa274e892d9a2af03";

var ingredientList = [];
//function that gets ingredients from user input
function getIngredients(item) {
  $(".addItem").on("click", function() {
    var ingredient = $("#inputID")
      .val()
      .trim();
  });
}
//functiont that gets recipe ID's of ingredients users inputed

function getRecipeIDs(ingredients) {
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
