
function initGoogle() {
    // lat and lng information kept for Seattle.  This will automatically display if someone doesn't use the geolocation that their own computer is recognizing.
    var location = {
        lat: 47.6062,
        lng: -122.3321
    }

    // options variable picks up the information needed to make the map work and display on the html page.
    var options = {
        center: location,
    // This zoom number can be changed to zoom in or out of the default display map.  For example, the number 1 is zoomed out the furthest and the larger the number the more zoomed it it becomes.  The user will be able to zoom in and out once the map is displayed on page based on the capabilities of Google maps.
        zoom: 13
    }

    if(navigator.geolocation) {
        // If users have there geolocation on in their browser this will run or if they allow the geolocation to be identified by saying allow in the pop-up
        navigator.geolocation.getCurrentPosition((loc) => {
            // Gets users current lat and lan coordinates
            location.lat = loc.coords.latitude;
            location.lng = loc.coords.longitude;
            // map will write the map
            map = new google.maps.Map(document.getElementById("map"), options); 
        },
        (err) => {
            // If user says no to the geolocation this will run
            console.log("user clicked no location");
            // map will write the map based on the var location of Seattle
            map = new google.maps.Map(document.getElementById("map"), options); 
        }
        )
    } else {
        // If users browser does not support geolocation this will run
        console.log("geolocation is not supported");
        // map will write the map based on the var location of Seattle
        map = new google.maps.Map(document.getElementById("map"), options);
    }

    // Makes an autocomplete variable by using two arguments 1. (document.getElementById("input") 2.        fields: ["geometry", "name"], types: ["establishment"]  .  The second argument is the objects
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"),
    {
        // Every time you autocomplete something you get an actual place that really exists on the Google map
        fields: ["geometry", "name"],
        // establishments= businesses
        types: ["establishment"]
    });

    // added addListener that will allow the input element to function for a search
    autocomplete.addListener("place_changed", () => {
        var place = autocomplete.getPlace();
        // This adds a marker on the map based on position, title, and map
        new google.maps.Marker({
            position: place.geometry.location,
            title: place.name,
            map: map
        })
    });
}