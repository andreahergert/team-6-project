const chompApiKey = "AzqJOGTI8G5NJ2uIY"
var spoonApiKey = "6bd62a9ff28a42a08d35b2fccec9fd9e"
// this function is for the random button
function spoonacularRandom() {
    fetch("https://api.spoonacular.com/recipes/random?apiKey=" + spoonApiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // localStorage.setItem works here too
            for (i=0; i<=data.recipes[0].extendedIngredients.length; i++){
                let ingredients = data. recipe[0].extendedIngredients[i].name
                 $(".extendedIngredients").text(ingredients);
                console.log(data.extendedIngredients[i].name)
            };

            $("#title").text(JSON.stringify(data.recipes[0].title))

            $("#samplePic").attr(
                "src", data.recipes[0].image,
                "alt", "image of" + data.recipes[0].title)

            $("#readyInMinutes").text("Prep Time: " + (JSON.stringify(data.recipes[0].readyInMinutes)) + " minutes");
            
            
           
            

           $("#diets").text("diets: " + (JSON.stringify(data.recipes[0].diets)));
           
           $("#vegetarian").text("Vegetarian friendly: " + (JSON.stringify(data.recipes[0].vegetarian)));
           

           $("#instructions").text(("Instructions: " + JSON.stringify(data.recipes[0].instructions)))

           $("#creditsText").text("Credit goes to: " + (JSON.stringify(data.recipes[0].creditsText)));
            
            

        });
};

//on click selects random
$("#randomBtn").on("click", spoonacularRandom)
//

// data.image
// let healthScore = data.healthScore.val()???or no val()
// let glutenFree = data.glutenFree

// let cookTime = data.readyInMinutes
// let credit = data.creditsText
// let title = data.title
// let vegetarian = data.vegetarian


// <div id="container">
// <div id="title"></div>
//     <img id="samplePic">
//     <p id="readyInMinutes">hello</p>
//     <ol>Ingredients: 
//         <li class="extendedIngredients"></li>
//         <li class="extendedIngredients"></li>
//     </ol>
//     <p id="diets">hello</p>
//     <p id="vegetarian"></p>
//     <p id="creditsText"></p>
// </div>
// <button id="randomBtn">RANDOM</button>