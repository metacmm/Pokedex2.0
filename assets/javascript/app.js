$(document).ready(function(){
<<<<<<< HEAD
    $("#btn-submit").on("click", function () {
        searchpokemon();
    });
=======
    $("#btn-submit").on("click", searchpokemon);
    $("#btn-submit").on("click", requestingPokemonGif);
>>>>>>> c1dc38d5bc5dff29e399b55869ab22bd77f6bf9b
    $("#pokesearch").on("input",autocomplete);
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

var database = firebase.database();
