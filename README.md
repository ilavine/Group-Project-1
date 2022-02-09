# Group-Project-1 Description

## The requirements for the project were as following:
* Non-Bootstrap CSS Framework - Our group used Foundation 6 CSS Framework.
* Be deployed to GitHub Pages - The project can be viewed [here](placeholder).
* Be interactive and responsive - Our group utilized jQuery and jQuery UI widgets to enhance the user experience.
* Use at least two separate APIs - Our group implemented Open Weather Map API, Trail API, Google Maps API, and Astronomy API
* Does not use alerts, confirms, or prompts (use modals) - jQuery UI Dialogue modal was used for user interface.
* Use client-side storage to store persistent data - The webapp uses client-side storage to store past searches and preferences. 

# User Story
	AS A TOURIST I want to be able to find hiking locations based on my unique search criteria 
	SO THAT I can be an informed hiker for my desired trip.

# Acceptance Criteria
	GIVEN a top level search page for hiking information about a given area:
	
	WHEN I type in search criteria for a trail, 
	THEN I am given a search result of in tabular form of the hiking trails meeting the search criteria
	
	WHEN I select on a hiking trail
	THEN i am given information about trail such as length, challenge, etc.

	WHEN I select a hiking trail, 
	THEN i am shown a map with camping areas nearby overlayed with the 2020 dark sky map
	
	WHEN I enter a trip date and location
	THEN I am shown a map of what constellations and planets should be visible.

# MVP
* Search Function - A user should be able to type in a location in the autocomplete input form, then a search result is displayed as a marker on the Google Map.
* Weather Dashboard - Once the Google Maps result is displayed on the page, a user is provided with information about the weather conditions in tabular form.
* Hiking Trail Info - A user is provided with a hiking trail info in the specified area.
* Constellation Map - Constellation map is displayed on the screen.

# Future Development Features (Icebox)
* Provide a functionality to sort trails by the level of difficulty.
* Using Google Maps API, display supply stores on the Google Map.
