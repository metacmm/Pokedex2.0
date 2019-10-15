function getDescription(requestUrl){
    $.ajax({
        url: requestUrl,
        method: "GET"
    }).then(function(response){
        let description = "";
        for (element of response.flavor_text_entries) {
            if (element.language.name == "en") {
                description += element.flavor_text;
                break;
            }
        }
        console.log(description);
        updateDescription(description);
    });
}