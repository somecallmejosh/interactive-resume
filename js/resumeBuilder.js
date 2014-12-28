/*
  I have elected to "partialize"the JSON files and serve them throughout this
  project as they are needed. The data is not all presented on the same page.
*/


/*
  Internationalization
  Ensure name takes on the format "Firstname LASTNAME"
*/
function inName() {
  // split the name object into two separate strings
  bio.name = bio.name.trim().split(" ");
  // Convert the second string to Uppercase
  bio.name[1] = bio.name[1].toUpperCase();
  // Convert the first letter of the first string to uppercase
  // Then concatenate it with the lowercase version of the remaining strings
  bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
  return bio.name[0] + " " + bio.name[1];
}

// This appends the "internationalize" button in the footer
$("footer").append(internationalizeButton);

// This includes the google map on the resume page.
$("#mapDiv").append(googleMap);
