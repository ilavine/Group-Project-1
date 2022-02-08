



// Marissa's star map finder html
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <title> ASTRONOMY API</title>
//     <meta charset="utf-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css" />

//     <!-- <link rel="stylesheet" href="/style.css" /> -->
//     <script src="marissa.js" defer></script>
// </head>

// <body>
//     <h1>ASTRO API</h1>
//     <input id="searchTerm" type="text" placeholder="Enter search here" />
//     <button id="search"> Search </button>
//     <div id="content">

//     </div>
    
//     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// </body>


// </html>
// searchBtn.addEventListener('click', ApiGet);

var location = document.getElementById("location");
var searchButton = document.querySelector("#search");
const $content = $("#content");

searchButton.addEventListener("click", () => {
    console.log("button pressed");
    // sendApiRequest(starSearch)
    ApiGet()
})

//An asyncronous function to fetch data from the API
async function sendApiRequest(starView) {
    let applicationId = "570c18ee-252e-4e18-a721-e8624c977166"
    let applicationSecret = "8a10ea4475bc233d87c49f1e0092f9f848b4c8283f95afc5961bd6d2b8123f4b56755ef5498ce5c739bc7652fba958b32b9e3048e673f9f405538b3d0473e5bfde67db26603d4e83558cc306b9829eab2eca0177bebb028d99163d6719008cc734c11e8b2e7cdbdd6e8ba5984c4d314e"
    const hash = btoa(`${applicationId}:${applicationSecret}`);
    let response = await fetch(`https://api.astronomyapi.com/api/v2/studio/star-chart`, {
        method: "POST",
        headers: {
            Authorization: "Basic " + hash
        }, body: JSON.stringify(starView) 
    });

    console.log(response);
    let data = await response.json()
    console.log(data)
    useApiData(data.data)
}

// Function that does something with the data that was received from the API
function useApiData(data) {
    const image = $("<img/>");
    image.attr("src", data.imageUrl);
    $content.append(image);
}

// Function that calls info for hiking trails based on location
var GeoLockApi = "1fc359ee9b12b02ee9633470d8821b6b"
var TrailApi = "7489fefcc1msh0d1a721295405aap1c88b1jsn7daf4e11d73a"
function ApiGet() {
    var GeoLockUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=5&appid="+GeoLockApi;
    fetch(GeoLockUrl)
    .then(function(response) {
        console.log(response);
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        lat = data.lat;
        lon = data.lon;
        targetDate = "2022-02-07"
        let starSearch = {
            "style": "inverted",
            "observer": {
                "latitude": lat,
                "longitude": lon,
                "date": targetDate
            },
            "view": {
                "type": "constellation",
                "parameters": {
                    "constellation": "ori"
                }
            }
        }
        sendApiRequest(starSearch);
        fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat="+lat+"&lon="+lon,
        {
            method: "GET",
            headers: {
                "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
                "x-rapidapi-key": TrailApi
            }
        })
        .then(function(response) {
            console.log(response);
            return response.json()
        })
        .catch(function(err) {
            console.error(err);
        })
        .then(function(data) {
            console.log(data);
        })
    })
}

