function autocomplete() {
    var inp = $(this);
    removeAllLists();
    var val = this.value;
    if (!val) {
        return false;
    }
    var a = $("<ul>");
    a.attr("id", this.id + "autocomplete-list");
    a.addClass("autocomplete-items p-0");
    $(this).parent().append(a);
    var arr = getrecommendation(val, pokemons);
    for (var i = 0; i < arr.length; i++) {
        var b = $("<li>");
        b.html("<strong>" + arr[i].substr(0, val.length) + "</strong>" + arr[i].substr(val.length) + "</li>");
        b.addClass("list-group-item list-group-item-action");
        b.attr("value", arr[i]);
        b.on("click", function (e) {
            inp.val($(this).attr("value"));
            removeAllLists();
        });
        a.append(b);
    }
}

function removeAllLists(){
    $(".autocomplete-items").remove();
}
