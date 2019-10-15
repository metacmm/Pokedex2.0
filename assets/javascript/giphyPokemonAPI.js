function requestingPokemonGif(searchText){
    //var searchText = $("#pokesearch").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Bk5QuTfcpPza5xYFYcMKbn1rl0kIDzw6&q=" + searchText + "&limit=4";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);

        var pokemonGifResults = response.data;
        console.log(pokemonGifResults);
        $("#gifs").empty();
        showPokemonGif();

        function showPokemonGif() {
            for (var i = 0; i < pokemonGifResults.length; i++) {
                
                if(pokemonGifResults[i].rating !== "r"){ 
                    var gifDiv = $("<div>");
                    var gifURL = pokemonGifResults[i].images.fixed_height.url;
                    var selectedPokemon = $("<img>");

                    selectedPokemon.attr("src", gifURL);
                    gifDiv.append(selectedPokemon);
                    
                    $("#gifs").prepend(gifDiv);
                }
            };
        };
    });
};
