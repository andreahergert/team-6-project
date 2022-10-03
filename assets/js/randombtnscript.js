const chompApiKey = "AzqJOGTI8G5NJ2uIY"
const spoonApiKey = "6bd62a9ff28a42a08d35b2fccec9fd9e"

// this function is for the random button
function spoonacularRandom() {
     ;
    fetch("https://api.spoonacular.com/recipes/random?apiKey=" + spoonApiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let count = data.recipes[0].length
            if (count < data.recipes[0].length) {
                count++;
              } else {
                count = 0;
              } 
           //changing text into results of random 
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
            $("#vegetarian").text("Vegetarian: " + data.recipes[0].vegetarian);
            $("#glutenFree").text("Gluten Free: " + data.recipes[0].glutenFree);
            $("#dairyFree").text("Dairy Free: " + data.recipes[0].dairyFree); 
            $("#creditsText").text("Credit goes to: " + data.recipes[0].creditsText);

            //ingredients list appended on page
            for (var i=0; i<=data.recipes[0].extendedIngredients.length; i++) {
                let ingredients = data.recipes[0].extendedIngredients[i].name
                $("#extendedIngredients").append("<li>" + ingredients + "</li>")
                };

            //list of instructions
            for (var q = 0; q <= data.recipes[0].analyzedInstructions[0].steps.length; q++){
               console.log(data.recipes[0].analyzedInstructions[i])
        //     let instructions = data.recipes[0].analyzedInstructions[0].steps[q]
        //    $("#instructionsRandom").append("<li>" + instructions + "</li>")
           
            }
         
        });
      
        
    };

//on click selects random

$("#randomBtn").on("click", spoonacularRandom)
// $("#randomBtn").on("dblclick", refreshPage)



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

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonApiKey}&query=${userInput}&addRecipeInformation=true&per_page=5`) 
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
                
        for(var i=0; i<=data.results.length; i++) {
            let userResults = data.results[i];
            let index = Math.floor(Math.random()* userResults.length)
            let recipeId = userResults.id;
            let imgId = $("#image").attr(
                "src", "https://spoonacular.com/recipeImages/" + recipeId + "-312x231.jpg",
                "alt", "Food Picture"
            );  

            $("#test").append("<h3>" + userResults.title + "<h3>" + "<img src=" + imgId + ">" + "<br>" + "<h4>" + "Prep Time: " + userResults.readyInMinutes + " minutes" + "</h4>" + "<p>" + "Gluten Free: " + userResults.glutenFree + "<br>" + "Vegan: " + userResults.vegan + "<br>" +  "Vegetarian: " + userResults.vegetarian + "<br>" + "Dairy Free: " + userResults.dairyFree + "</p>" + "<br>" + "Source: " + "<a>" + userResults.spoonacularSourceUrl + "</a>")
               
        
            for(var a = 0; a <=userResults.analyzedInstructions[0].steps.length; a++){
                let instructions = userResults.analyzedInstructions[0].steps[a].step;
                  console.log(instructions);
                

            $("#instructions").append
            ("<li>" + instructions + "</li>")
            };
              }; 
              
             
        // }
        //     for (var i=0; i<=userResults.extendedIngredients.length; i++) {
        //         let ingredients = userResults.extendedIngredients[i].name;                
        //         $("#placeholder").append("<li>" + ingredients + "</li>")
            
            
        });
    };




//on click - searches based on user input
$("#searchBtn").on("click", userSearch);

// assets/js/randombtnscript.js
