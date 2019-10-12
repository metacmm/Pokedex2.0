function displayPokemon(pokemon) {
    console.log(pokemon);
    // add code to update UI elements here

    pokemon.stats.forEach(element => {
        let name = element.stat["name"];
        let value = element["base_stat"];

        $("#" + name).attr("aria-valuenow", value);
        $("#" + name).attr("style", "width: " + ((parseInt(value) / 255) * 100) + "%");
        $("#" + name).text(value);
    })
}