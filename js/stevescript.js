//variables required
var city = $('#city');
var search_history = $('#search-history'); // looks for the div id search history.
var search_history_array = [];
var search_button = $('#search_now_btn');
var radio_button_selected;

$('#location').click(function () {
    if ($('#location').is(':checked')) { alert("Location Radio Button is Checked"); }
});

$('#trail_name').click(function () {
    if ($('#trail_name').is(':checked')) { alert("Trail Name Radio Button is Checked"); }
});

search_button.on('click', function (event) {
    //add a city searched button to the city history buttons list. 
    event.preventDefault();
    console.log("i clicked on the damn search button");
    console.log("the ");
    //first add the city to the search_history)array.  The city always becomes the first in the array, the array is limited to 10 cities, so it
    //pops the last element in the array if the array length ===10.

    //assign the cityname val to a variable so it can be used in the search_history_array below.  Make first letters capital.
    var temp_cityname = city.val();
    var cityname = temp_cityname.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    let poss_check = false;

    //first check to see if the city name is already in the array, if it is, still pull up the search, but dont add it to the array.
    for (t = 0; t < search_history_array.length; t++) {
        if (search_history_array[t] == cityname) {
            poss_check = true;
        }
    }
    //ignore adding it to the array if it's already there
    if (poss_check == false) {
        if (search_history_array != null) {
            if (search_history_array.length === 10) {
                search_history_array.unshift(cityname);
                search_history_array.pop();
            }
            else {
                search_history_array.unshift(cityname);
            }
        }
        // this else is here to just add the cityname to the current null array.
        else {
            search_history_array.push(cityname);
        }
        //reset the local storage for the search_history_array
        localStorage.setItem('searchhistoryarray', JSON.stringify(search_history_array));
    }

    //now we build the buttons.  First we need to clear the search history area before we do the append. 
    city_history.empty();

    //now cycle through the search_history_array and create a research button for each prior searched city name.
    buildCityCards(search_history_array);

    //call the build weather card but only with the city name entered in the search box and not the entire search_history_array.
    buildWeatherCards(cityname);
})

function initializePage() {
    //initializes the page showing past search history and the WX for the most recently searched city
    let prior_search_array = JSON.parse(localStorage.getItem('searchhistoryarray'));
    search_history_array = prior_search_array || [];
    //rebuild the search history buttons
    // buildSearchCards(search_history_array);
    // here is where we should pull the user's current location to fill in the page initialization
}

function buildCityCards(s_history_array) {
    for (i = 0; i < s_history_array.length; i++) {
        search_history_by_location.append('<button type="submit" class="button" id="' + s_history_array[i] + '">' + s_history_array[i] + '</button>');
        //research the wx from prior searches.
        // $('#' + s_history_array[i]).on('click', function (event) {
        //     event.preventDefault();
        //     let temp_city_n = this.id;
        //     buildWeatherCards(temp_city_n);
        // });
    }
}

$(function () {
    var dialog, form,

        // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $("#trailname"),
        email = $("#email"),
        password = $("#password"),
        allFields = $([]).add(name).add(email).add(password),
        tips = $(".validateTips");

    function updateTips(t) {
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp(o, regexp, n) {
        if (!(regexp.test(o.val()))) {
            o.addClass("ui-state-error");
            updateTips(n);
            return false;
        } else {
            return true;
        }
    }

    function addUser() {
        var valid = true;
        allFields.removeClass("ui-state-error");

        valid = valid && checkLength(name, "username", 3, 16);
        valid = valid && checkLength(email, "email", 6, 80);
        valid = valid && checkLength(password, "password", 5, 16);

        valid = valid && checkRegexp(name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
        valid = valid && checkRegexp(email, emailRegex, "eg. ui@jquery.com");
        valid = valid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9");

        if (valid) {
            $("#users tbody").append("<tr>" +
                "<td>" + name.val() + "</td>" +
                "<td>" + email.val() + "</td>" +
                "<td>" + password.val() + "</td>" +
                "</tr>");
            dialog.dialog("close");
        }
        return valid;
    }

    // dialog = $("#dialog-form").dialog({
    //     autoOpen: false,
    //     height: 400,
    //     width: 350,
    //     modal: true,
    //     buttons: {
    //         "Create an account": addUser,
    //         Cancel: function () {
    //             dialog.dialog("close");
    //         }
    //     },
    //     close: function () {
    //         form[0].reset();
    //         allFields.removeClass("ui-state-error");
    //     }
    // });

    // form = dialog.find("form").on("submit", function (event) {
    //     event.preventDefault();
    //     addUser();
    // });

    // $("#create-user").button().on("click", function () {
    //     dialog.dialog("open");
    // });
});

initializePage();