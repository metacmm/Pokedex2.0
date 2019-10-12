
function requestingPokemonGif(){
    var searchText = $("#pokesearch").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchText + "&api_key=fAd8nhiRNR2VtraFeMkS7t2FaNyqITEclimit=4";

    $.ajax({
        url: queryURL,
        method: "GET",
    })
    .then(function(response){
        console.log(response);

        var pokemonGifResults = response.data;
        console.log(pokemonGifResults);
        showPokemonGif();
    });
};


function showPokemonGif(){
    for (var i = 0; i < pokemonGifResults.length; i++){
        if (pokemonGifResults[i].rating !== "r") {
            var gifDiv = $("<div>");
            

            var gifURL = pokemonGifResults[i].images.fixed_height.url;
            var selectedPokemon = $("<img>");

            selectedPokemon.attr("src", gifURL);
            gifDiv.append(selectedPokemon);
            $("#gifs").empty();
            $("#gifs").prepend(gifDiv);
        }
    };
};