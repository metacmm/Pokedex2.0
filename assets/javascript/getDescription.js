function getDescription(requestUrl){
    $.ajax({
        url: requestUrl,
        method: "GET"
    }).then(function(response){
        console.log(response.flavor_text_entries);
        updateDescription(response.flavor_text_entries);
    });
}