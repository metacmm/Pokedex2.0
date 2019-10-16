function getrecommendation(prefix, arr) {
    var recomm = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, prefix.length).toUpperCase() == prefix.toUpperCase()) {
            recomm.push(arr[i]);
        }
    }
    return recomm;
}