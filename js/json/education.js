var education = {
  "schools" : [
    {
      "name" : "Troy University",
      "location" : "Troy, AL",
      "degree" : "Bachelors",
      "dates" : 2001,
      "majors" : [
        "Biology"
      ]
    },
    {
      "name" : "City Colleges of Chicago",
      "location" : "Hohenfels, Germany",
      "degree" : "Associates",
      "dates" : 1997,
      "majors" : [
        "General Studies"
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
      var schoolPath = education.schools[school];
      $("#education .items--school").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", schoolPath.name);
      $(".education-entry:last").append(formattedName);

      var formattedDegree = HTMLschoolDegree.replace("%data%", schoolPath.degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", schoolPath.dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", schoolPath.location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", schoolPath.major);
      $(".education-entry:last").append(formattedMajor);

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
