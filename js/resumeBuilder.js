// Internationalization
// Ensure name takes on the format "Firstname LASTNAME"

/*
  Like the google map inclusion, I understand the value in this from an
  educational perspective, but it offers no functional value to the user who
  would be reading an online resume. It is included only because the course
  requires it.
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
$("footer").append(internationalizeButton);

$("#mapDiv").append(googleMap);
