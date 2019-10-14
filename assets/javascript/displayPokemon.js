function displayPokemon(pokemon) {
    //console.log(pokemon);
    // add code to update UI elements here

    updateStats(pokemon);

    var pokimage = $("<img class='mx-auto border border-dark'>");
    pokimage.attr("src", pokemon.sprites.front_default);
    $("#sprite").empty();
    $("#sprite").prepend(pokimage);
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
            'legend': {position: 'none'}
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
}