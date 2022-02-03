$(document).foundation()
const hash = btoa(`${applicationId}:${applicationSecret}`);
// Application ID:
// 570c18ee-252e-4e18-a721-e8624c977166

// Application Secret:
// 8a10ea4475bc233d87c49f1e0092f9f848b4c8283f95afc5961bd6d2b8123f4b56755ef5498ce5c739bc7652fba958b32b9e3048e673f9f405538b3d0473e5bfde67db26603d4e83558cc306b9829eab2eca0177bebb028d99163d6719008cc734c11e8b2e7cdbdd6e8ba5984c4d314e
//curl --location --request GET 'https://api.astronomyapi.com/api/v2/bodies' \ --header 'Authorization: Basic <hash>' \\

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
