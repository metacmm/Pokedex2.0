var searchText = "";

function displayPokemonGif() {
    $("#gifs-view").empty();
};

$("#btn-submit").on("click", function(){
    requestingPokemonGif(this);
});

function requestingPokemonGif(button){
    searchText = $(button).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchText + "&api_key=fAd8nhiRNR2VtraFeMkS7t2FaNyqITEclimit=4";

    $.ajax({
        url: queryURL,
        method: "GET",
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        var pokemonGifResults = response.data;
        console.log(pokemonGifResults);
    });
};

function showPokemonGif(){
    for (var i = 0; i < pokemonGifResults.length; i++){
        if(pokemonGifResults[i].rating !== "r") {
            var gifDiv = $("<div>");
            console.log("for loop");

            var gifURL = pokemonGifResults[i].images.fixed_height.url;
            var selectedPokemon = $("<img>");

            selectedPokemon.attr("src", gifURL);
            gifDiv.append(selectedPokemon, p);

            $("#gifs-view").prepend(gifDiv);
        }
    };
};
