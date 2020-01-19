const API_KEY = "f00927d28fd14a4fa274e892d9a2af03";

var ingredientList = [];
var items = ingredientList.map(ingredients => ingredients.toLowerCase());
//function that gets ingredients from user input
// function getIngredients() {
//   $(".addItem").on("click", function(event) {
//     event.preventDefault();
//     var ingredient = ingredientList.push(ingredient);
//   });
//   console.log(ingredientList);
// }
//functiont that gets recipe ID's of ingredients users inputed

$("#addToList").on("click", function(event) {
  $(".itemBox").empty();
  event.preventDefault();
  // console.log(items);
  var addItem = $("#addItem")
    .val()
    .trim();

  var item = addItem.toLowerCase();

  // dupItem = false;
  // check if array is empty
  // if empty, just push value to array

  // ingredientList.push(addItem);

  if (items.includes(item)) {
    alert("Button already created!");
    event.preventDefault();

    // document.getElementById("animal-form").requestFullscreen();
    // break;
  } else {
    // console.log(item);
    ingredientList.push(addItem);
    items.push(item);
    console.log(`ingredients input: ${ingredientList}`);
    console.log(`To lower Case: ${items}`);

    for (var i = 0; i < items.length; i++) {
      var itemTab = $("<div>");

      var removeButton = $("<button>")
        .addClass("remove")
        .text("x");
      var itemText = $("<p>").text(items[i]);

      itemTab.append(removeButton, itemText);
      $(".itemBox").append(itemTab);
    }
    // document.getElementById("animal-form").reset();
    // createButtons();
  }
});
// for (var i = 0; i < ingredientList.length; i++) {
// }
$("#enterList").on("click", function(event) {
  event.preventDefault();
  getRecipeIDs(ingredientList);
});

function getRecipeIDs(list) {
  var ingredients = list.toString();
  console.log(`Ingredients: ${ingredients}`);
  var queryUrl =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
    ingredients +
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
