const chompApiKey = "AzqJOGTI8G5NJ2uIY"
const spoonApiKey = "6bd62a9ff28a42a08d35b2fccec9fd9e"

// this function is for the random button
function spoonacularRandom() {
     fetch("https://api.spoonacular.com/recipes/random?apiKey=" + spoonApiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
           //changing text into results of random search
            // localStorage.setItem works here too
            $("#title").text(JSON.stringify(data.recipes[0].title));

            $("#samplePic").attr(
                "src", data.recipes[0].image,
                "alt", "image of" + data.recipes[0].title
                );
            //dish types
            for (var i=0; i<data.recipes[0].dishTypes.length; i++){
                let dishKind = data.recipes[0].dishTypes[i];
                 $("#dishTypes").append("<li>" + dishKind + "</li>");    
            }
            $("#readyInMinutes").text("Prep Time: " + (JSON.stringify(data.recipes[0].readyInMinutes)) + " minutes");
            $("#vegan").text("Vegan: " + data.recipes[0].vegan);
            $("#vegetarian").append("Vegetarian: " + data.recipes[0].vegetarian);
            $("#glutenFree").text("Gluten Free: " + data.recipes[0].glutenFree);
            $("#dairyFree").text("Dairy Free: " + data.recipes[0].dairyFree); 
            $("#creditsText").text("Credit goes to: " + data.recipes[0].creditsText);

            //ingredients list appended on page
            for (var i=0; i<=data.recipes[0].extendedIngredients.length; i++) {
                let ingredients = data.recipes[0].extendedIngredients[i].name;                $("#extendedIngredients").append("<li>" + ingredients + "</li>");
                console.log(data.recipes[0]);
            };            
            $("#vegan").text("Vegan: " + data.recipes[0].vegan);
            $("#vegetarian").append("Vegetarian: " + data.recipes[0].vegetarian);
            $("#glutenFree").text("Gluten Free: " + data.recipes[0].glutenFree);
            $("#dairyFree").text("Dairy Free: " + data.recipes[0].dairyFree);
            $("#cuisine").text("Cuisine-Type: " + data.recipes[0].cuisine);
            $("#creditsText").text("Credit goes to: " + (JSON.stringify(data.recipes[0].creditsText)));
        //    $("#instructions").text(("Instructions: " + JSON.stringify(data.recipes[0].analyzedInstructions)))
            
            console.log(data.recipes[0])
        });
    };


//on click selects random
$("#randomBtn").on("click", spoonacularRandom)

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





//src button

function userSearch(){
    let userInput = $("#sBtn").val();

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonApiKey}&query=${userInput}&addRecipeInformation=true&per_page=10`) 
    .then(function (response){
        
        return response.json()
    })
    .then(function (data) {
        for(var i=0; i<data.results.length; i++) {
           
            let userResults = data.results[i]
            
            console.log(userResults)  
            
        }

    });
};

//need to add const name = userInput
// const spoonSearchIngredient = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userIngredient}`

//on click - searches based on user input
$("#searchBtn").on("click", userSearch);

// assets/js/randombtnscript.js
