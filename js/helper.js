// -----------------------------------------------------------------------------
// Bio Information.
// -----------------------------------------------------------------------------

/*
  This information is share throughout the project in the header and the footer.
  The Skills and welcome message can be viewed on the home page.
  I have intentionally excluded the bio pic.
*/
var HTMLheaderName = "<h1 class='identity__title'>%data%</h1>",
    HTMLheaderRole = "<h2 class='identity__tagline'>%data%</h2>",
    HTMLWelcomeMsg = "%data%",
    HTMLmobile = "<p class='call'><strong>Phone</strong>: %data%</p>",
    HTMLcontactStart = "<li class='nav__contact--link'>",
    HTMLcontactEnd = "</li>",
    HTMLemail = HTMLcontactStart + "<a href='mailto:%data%' class='contact--link__email'><i class='icon-email'></i></a>" + HTMLcontactEnd,
    HTMLfacebook = HTMLcontactStart + "<a href='%data%' class='contact--link__facebook' target='_blank'><i class='icon-facebook'></i></a>" + HTMLcontactEnd,
    HTMLtwitter = HTMLcontactStart + "<a href='%data%' class='contact--link__twitter' target='_blank'><i class='icon-twitter'></i></a>" + HTMLcontactEnd,
    HTMLlinkedIn = HTMLcontactStart + "<a href='%data%' class='contact--link__linkedin' target='_blank'><i class='icon-linkedin'></i></a>" + HTMLcontactEnd,
    HTMLgitHub = HTMLcontactStart + "<a href='%data%' class='contact--link__github' target='_blank'><i class='icon-github'></i></a>" + HTMLcontactEnd,
    HTMLDribbble = HTMLcontactStart + "<a href='%data%' class='contact--link__dribbble' target='_blank'><i class='icon-dribbble'></i></a>" + HTMLcontactEnd,
    HTMLlocation = "<span>%data%</span>",
    HTMLskillsStart = "<aside class='col--4 teaser__item'></aside>",
    HTMLSkillTitle = "<h2>%data%</h2>",
    HTMLSkillSubTitle = "<p>%data%</p>",
    HTMLSkillLargeImage = "<img src='%data%' alt='Portfolio Image' class='img-responsive is-hidden-mobile'>",
    HTMLSkillSmallImage = "<img src='%data%' alt='Portfolio Image' class='img-responsive is-hidden-not-mobile'>";

    var internationalizeButton = "<button>Internationalize</button>";

// -----------------------------------------------------------------------------
// Work Information.
// -----------------------------------------------------------------------------
var HTMLworkStart = "<div class='col--3 work-entry'></div>",
    HTMLemployerLogo = "<img src='%data%' class='img-responsive'>",
    HTMLemployerURL = "<a href='%data%' target='_blank'>",
    HTMLworkEmployer = "%data%</a>",
    HTMLworkTitle = "<h2>%data%</h2>",
    HTMLworkDates = "<div class='date-text'>%data%</div>",
    HTMLworkLocation = "<div>%data%</div>",
    HTMLworkDescription = "%data%";

// -----------------------------------------------------------------------------
// Education Information.
// -----------------------------------------------------------------------------

// Traditional Education
var HTMLschoolStart = "<div class='col--6 college-entry'></div>",
    HTMLschoolUrl = "<h3><a href='%data%'>",
    HTMLschoolName = "%data%</a></h3>",
    HTMLschoolDegree = "<h2>%data%</h2>",
    HTMLschoolDates = "<p>%data%</p>",
    HTMLschoolLocation = "<div class='location-text'>%data%</div>",
    HTMLschoolMajor = "<span class='major'>%data%</span>";

// Online Education
var HTMLCourseStart = "<div class='course-entry'></div>",
    HTMLcourseTitle = "<h2>%data% - ",
    HTMLcourseSchool = "%data%</h2>",
    HTMLcourseDescription = "<p>%data%</p>",
    HTMLcourseDates = "<p>%data%</p>",
    HTMLcourseURL = "<p><a href='%data%' target='_blank'>View Course</a></p>";

// -----------------------------------------------------------------------------
// Project Information.
// -----------------------------------------------------------------------------
var HTMLprojectStart = "<div class='col--4 project-entry'></div>",
    HTMLprojectUrl = "<a href='%data%' target='_blank'>",
    HTMLprojectTitle = "%data%</a>",
    HTMLprojectDates = "<div class='date-text'>%data%</div>",
    HTMLprojectDescription = "<p>%data%</p>",
    HTMLprojectImage = "<img src='%data%' class='img-responsive'>";

// -----------------------------------------------------------------------------
// Google Map Information.
// -----------------------------------------------------------------------------
/*
  I understand the value of this in terms of education, however I do not believe
  it offers any value to a resume. It's merely superfluous "I can do this" type
  design treatment. It is included only because the course requires it.
*/
var googleMap = "<div id='map'></div>";

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('.identity__title').html(iName);
    $('.site-name').html(iName);
  });
})

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
  {
    "x": x,
    "y": y
  }
);
console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});




/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.

  /*
    I am not calling the google map in every page. Only those that require it.
  */
  if(typeof google !== 'undefined') {
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  };



  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }
  if(typeof google !== 'undefined') {
    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
  }

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
