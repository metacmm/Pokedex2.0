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

    var data = [];
    var labels = [];

    pokemon.stats.forEach(element => {
        let name = element.stat["name"];
        labels.push(name);

        let value = element["base_stat"];
        data.push(value);
    })

    var statData = {
        datasets: [{
            data: data,
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'Pokemon Stats' // for legend
        }],
        labels: labels,
    };

    $("#statChart").empty();

    var statChart = $("<canvas>");
    statChart.attr({ "width": "800", "height": "800", "id": "statChart" });
    $("#chart").append(statChart);

    var ctx = $("#statChart");

    var statChart = new Chart(ctx, {
        data: statData,
        type: 'horizontalBar',
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}