/* HTML ---
<form id="search">
<input id="searchbar" type="text" name="search" placeholder="Search location.."> 
<button type="submit" id="search-button> Search </button>
</form>*/
        
const fetchLocation = () => {
    if (searchInputVal !== "") {         // if searchInput is not an empty string, create a queryURl variable
        let queryURL = ""; // insert searchInputVal in the queryURL for your API query
        console.log(queryURL);
    }

}

// searchbar
const searchLocation = (event) => {
 
    event.preventDefault();

    var searchInputVal = $("#searchbar").val; // takes input value
    searchInputVal = searchInputVal.trim(); // removes white space from whitespace

    if (!searchInputVal) {
        console.error("Please enter a location!"); // if nothing is entered in input box, the error is displayed
        return;
    }

    fetchLocation(searchInputVal); // calls fetchLocation() function, searchInput as a parameter

    searchInputVal.val(""); // clears the input
}

// calls searchLocation() function when the search button is pressed
$("#search").on('submit', searchLocation);