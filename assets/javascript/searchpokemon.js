function searchpokemon() {
    event.preventDefault();
    var searchText = $("#pokesearch").val().trim();
    var requestUrl = "https://pokeapi.co/api/v2/pokemon/" + searchText + "/";
    $.ajax({
        url: requestUrl,
        method: "GET",
        error: function(e){
            console.log(e);
            $("#pokesearch").val("");
        },
        success: function(response){
            displayPokemon(response);
            requestingPokemonGif(response.name);
        }
    });

}
