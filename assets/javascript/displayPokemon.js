//Global varaible for big blue ball glowing
var isGlowing = false;
var timeoutId;

function displayPokemon(pokemon) {
    //console.log(pokemon);
    // add code to update UI elements here
    updateStats(pokemon);

    let name = capitalizeFirstLetter(pokemon.name);
    $("#pokemon-name").text(name);

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

    setAnimation();
}

function updateStats(pokemon) {

    google.charts.load('current', { 'packages': ['corechart'] });

    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        let dataTable = [
            ['Stat', 'Value', { role: 'style' }],
        ]

        pokemon.stats.forEach(element => {
            let row = [element.stat["name"], element["base_stat"], getColor(element.stat["name"])];
            dataTable.push(row);
        })

        var data = new google.visualization.arrayToDataTable(dataTable);

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

function updateDescription(description) {
    $("#pokemon-description").text(description);
}

// s/o stackoverflow
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// get color
function getColor(name) {
    if (name == "attack") {
        return "red";
    }
    else if (name == "special-attack") {
        return "magenta";
    }
    else if (name == "defense") {
        return "blue";
    }
    else if (name == "special-defense") {
        return "navy";
    }
    else if (name == "speed") {
        return "pink";
    }
    else if (name == "hp") {
        return "green";
    }
}

// set animation of the big blue ball to glow for 5 seconds
function setAnimation() {
    
    if (isGlowing) {
        console.log("is glowing.");
        clearTimeout(timeoutId);
    };
    $("#bball").addClass("glowball");
    //set timeout to 6s to have the ball glow twice
    timeoutId = setTimeout(function () {
        $("#bball").removeClass("glowball");
        isGlowing = false;
    }, 6000);

    isGlowing = true;   
}