$(document).foundation()

var requestUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters";

function getApi() {
    fetch(requestUrl)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}