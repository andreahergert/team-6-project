// const spoonApiKey = "6bd62a9ff28a42a08d35b2fccec9fd9e"
const userName = $("#sBtn").val();

console.log(userName)
const spoonSearchType = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonApiKey}query=${userName}`;
//need to add const name = userInput
// const spoonSearchIngredient = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userIngredient}`

function spoonSearch(){
fetch(spoonSearchType)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
    };


$("#searchBtn").on("click", spoonSearch);