function displayPokemon(pokemon){
    console.log(pokemon);
    var pokimage = $("<img class=''>");
    pokimage.attr("src", pokemon.sprites.front_default);
    $("#sprite").prepend(pokimage);
}