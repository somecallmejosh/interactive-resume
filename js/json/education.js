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
      "school" : "Udacity",
      "date" : 2014,
      "url" : "https://www.udacity.com/course/cs101"
    },
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "date" : 2014,
      "url" : "https://www.udacity.com/course/ud804"
    },
    {
      "title" : "Javascript",
      "school" : "Codecademy",
      "date" : 2012,
      "url" : "http://www.codecademy.com/en/tracks/javascript"
    },
    {
      "title" : "JQuery",
      "school" : "Codecademy",
      "date" : 2012,
      "url" : "http://www.codecademy.com/en/tracks/jquery"
    },
    {
      "title" : "A Better Way to Learn AngularJS",
      "school" : "Thinkster",
      "date" : 2014,
      "url" : "https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/"
    }
  ],
  "display" : function() {
    for(school in education.schools) {
      var schoolPath = education.schools[school],
          formattedName = HTMLschoolName.replace("%data%", schoolPath.name),
          formattedUrl = HTMLschoolUrl.replace("%data%", schoolPath.schoolUrl),
          formattedDegree = HTMLschoolDegree.replace("%data%", schoolPath.degree),
          formattedDates = HTMLschoolDates.replace("%data%", schoolPath.dates),
          formattedLocation = HTMLschoolLocation.replace("%data%", schoolPath.location);

      $("#education .items--school").append(HTMLschoolStart);
      $(".education-entry:last")
        .append(formattedDegree)
        .append(formattedUrl + formattedName)
        .append(formattedLocation)
        .append(formattedDates);
        if(schoolPath.majors.length > 0) {
          for(major in schoolPath.majors) {
            var formattedMajors = HTMLschoolMajor.replace("%data%", schoolPath.majors[major]);
            $(".education-entry:last").append(formattedMajors);
          }
        }



    }
  }
}

education.display();
