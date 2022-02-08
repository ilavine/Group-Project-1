
var location = document.getElementById("email");
var searchBtn = document.getElementById("search_trails_btn");


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

searchBtn.addEventListener('click', ApiGet);