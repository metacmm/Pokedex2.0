var pokemons = [];

//call pokemon api to push all names to pokemons array
function getPokemonNames() {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0",
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < response.results.length; i++) {
            pokemons.push(response.results[i].name);
        }
        for (var i = 0; i < response.results.length; i++){
            pokemons.push(i.toString());
        }
    });
}