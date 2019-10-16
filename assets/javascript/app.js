$(document).ready(function(){
    // Load pokemon names
    getPokemonNames();

    // When submit button is clicked, send API call to pokeapi and giphy then clear the input value
    $("#btn-submit").on("click", searchpokemon);

    // When a user begins to type in the input element, use autocomplete
    $("#pokesearch").on("input", autocomplete);

    $(".balls").on("click", function() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    })
});