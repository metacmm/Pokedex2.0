function searchpokemon(){
    event.preventDefault();
    var searchText = $("#pokesearch").val().trim();
    var requestUrl = "https://pokeapi.co/api/v2/pokemon/" + searchText + "/";
    $.ajax({
        url: requestUrl,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })

}