$(document).ready(function(){
    // Load pokemon names
    getPokemonNames();

    // When submit button is clicked, send API call to pokeapi and giphy then clear the input value
    $("#btn-submit").on("click", searchpokemon);

    // When a user begins to type in the input element, use autocomplete
    $("#pokesearch").on("input", autocomplete);

    $(".balls").on("click", function() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    })
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnlHqemY5Db2LGI5WeKrQtxAxyf4pXB0o",
    authDomain: "pokedex-9105f.firebaseapp.com",
    databaseURL: "https://pokedex-9105f.firebaseio.com",
    projectId: "pokedex-9105f",
    storageBucket: "pokedex-9105f.appspot.com",
    messagingSenderId: "199540695888",
    appId: "1:199540695888:web:169e122487bcdab8960255"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
