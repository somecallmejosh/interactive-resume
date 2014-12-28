var education = {
  "schools" : [
    {
      "name" : "Troy University",
      "schoolUrl" : "http://www.troy.edu",
      "location" : "Troy, AL",
      "degree" : "Bachelor of Science",
      "dates" : 2001,
      "majors" : [
        "General Biology Major",
        "Chemistry Minor"
      ]
    },
    {
      "name" : "City Colleges of Chicago",
      "schoolUrl" : "http://www.ccc.edu/colleges/washington/Pages/default.aspx",
      "location" : "Hohenfels, Germany",
      "degree" : "Associate of Arts and Science",
      "dates" : 1997,
      "majors" : [
        "General Studies Major"
      ]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Intro To Computer Science",
      "description" : "An introduction to programming concepts using the Python language.",
      "school" : "Udacity",
      "date" : 2014,
      "url" : "https://www.udacity.com/course/cs101"
    },
    {
      "title" : "Javascript Basics",
      "description" : "A continuation of programming fundamentals with the Javascript language.",
      "school" : "Udacity",
      "date" : 2014,
      "url" : "https://www.udacity.com/course/ud804"
    },
    {
      "title" : "A Better Way to Learn AngularJS",
      "description" : "A clear approach to learning the necessary features of AngularJS.",
      "school" : "Thinkster",
      "date" : 2014,
      "url" : "https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/"
    },
    {
      "title" : "Assembling Sass, Parts 1 and 2",
      "description" : "Sass from beginning to advanced.",
      "school" : "Codeschool",
      "date" : 2013,
      "url" : "https://www.codeschool.com/paths/html-css"
    },
    {
      "title" : "Git Real, Parts 1 and 2",
      "description" : "Understanding distributed version control.",
      "school" : "Codeschool",
      "date" : 2013,
      "url" : "https://www.codeschool.com/paths/git"
    },
    {
      "title" : "Javascript",
      "description" : "Introduction to Javascript syntax.",
      "school" : "Codecademy",
      "date" : 2012,
      "url" : "http://www.codecademy.com/en/tracks/javascript"
    },
    {
      "title" : "JQuery",
      "description" : "Introduction to the Javascript library, JQuery.",
      "school" : "Codecademy",
      "date" : 2012,
      "url" : "http://www.codecademy.com/en/tracks/jquery"
    }
  ],
  "display" : function() {
    // Loop through all the "schools" above and present the formatted data
    // in the appropriate containers in the view.
    for(school in education.schools) {
      // set school path variable, so I don't have to rewrite it over and over
      var schoolPath = education.schools[school],
          formattedName = HTMLschoolName.replace("%data%", schoolPath.name),
          formattedUrl = HTMLschoolUrl.replace("%data%", schoolPath.schoolUrl),
          formattedDegree = HTMLschoolDegree.replace("%data%", schoolPath.degree),
          formattedDates = HTMLschoolDates.replace("%data%", schoolPath.dates),
          formattedLocation = HTMLschoolLocation.replace("%data%", schoolPath.location);

      $("#education--college .items--school").append(HTMLschoolStart);
      $(".college-entry:last")
        .append(formattedDegree)
        .append(formattedUrl + formattedName)
        .append(formattedLocation)
        .append(formattedDates);
        if(schoolPath.majors.length > 0) {
          for(major in schoolPath.majors) {
            var formattedMajors = HTMLschoolMajor.replace("%data%", schoolPath.majors[major]);
            $(".college-entry:last").append(formattedMajors);
          }
        };
    }
    // Loop through the "onlineCourses" in the JSON above, and present the
    // formatted dta in the appropriate containers in the view.
    for(course in education.onlineCourses) {
      // set coursePath variable, so I don't have to rewrite it over and over
      var coursePath = education.onlineCourses[course],
          formattedTitle = HTMLcourseTitle.replace("%data%", coursePath.title),
          formattedSchool = HTMLcourseSchool.replace("%data%", coursePath.school),
          formattedDescription = HTMLcourseDescription.replace("%data%", coursePath.description),
          formattedDate = HTMLcourseDates.replace("%data%", coursePath.date),
          formattedUrl = HTMLcourseURL.replace("%data%", coursePath.url);
      $("#education--courses .items--online-courses").append(HTMLCourseStart);
      $(".course-entry:last")
        .append(formattedTitle + formattedSchool)
        .append(formattedDescription)
        .append(formattedDate)
        .append(formattedUrl)
    }
  }
}

// Invoke the education.display function, so it properly renders.
education.display();
