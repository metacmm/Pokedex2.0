function displayPokemon(pokemon) {
    //console.log(pokemon);
    // add code to update UI elements here
    updateStats(pokemon);

    $("#pokemon-name").text(pokemon.name);

    getDescription(pokemon.species.url);

    let pokemonTypeString = "Type: ";

    for (let i = 0; i < pokemon.types.length; i++) {
        pokemonTypeString += (" " + pokemon.types[i].type.name);

        if (i != (pokemon.types.length - 1)) {
            pokemonTypeString += ",";
        }

    }
    $("#pokemon-type").text(pokemonTypeString);

    $("#pokemon-height").text("Height: " + pokemon.height)
    $("#pokemon-weight").text("Weight: " + pokemon.weight)

    $("#sprite").attr("src", pokemon.sprites.front_default);
}

function updateStats(pokemon) {

    google.charts.load('current', { 'packages': ['corechart'] });

    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Stat');
        data.addColumn('number', 'Value');

        pokemon.stats.forEach(element => {
            data.addRows([
                [element.stat["name"], element["base_stat"]]
            ]);
        })

        var options = {
            'title': 'Statistics',
            'width': 400,
            'height': 300,
            'legend': { position: 'none' },
            'animation': {
                startup: 'true',
                duration: '1000',
                easing: 'inAndOut',

            },
            hAxis: { ticks: [25, 50, 100, 150, 200, 255] }
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
}