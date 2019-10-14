function autocomplete() {
    var inp = $(this);
    removeAllLists();
    var val = this.value;
    if (!val) {
        return false;
    }

    //get the recommendation array 
    var arr = getrecommendation(val, pokemons);

    //add list group for recommendataions
    var a = $("<ul>");
    a.attr("id", this.id + "autocomplete-list");
    a.addClass("autocomplete-items p-0");
    $(this).parent().append(a);

    //if no matched pokemon found
    if (arr.length === 0){
        var b = $("<li> no matching pokemon founded </li>");
        b.addClass("list-group-item list-group-item-action disabled");
        b.on("click", function(){
            inp.val("");
            removeAllLists();
        });
        a.append(b);
    }
    
    //add list items for each recommendation
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

//clear the recommendation list group
function removeAllLists(){
    $(".autocomplete-items").remove();
}
