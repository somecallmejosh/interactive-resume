var projects = {
  "projects" : [
    {
      "title" : "Kenwood Dennard",
      "dates" : "Aug 2014",
      "description" : "AngularFire website that allows easy direct editing of page contents.",
      "images" : [
        "img/projects/kenwood-dennard.png",
        "img/projects/kenwood-editable.png"
      ]
    },
    {
      "title" : "Chase The Kicker",
      "dates" : "Jul 2013 - May 2014",
      "description" : "College recruiting website that displays seasonal statistics and video highlights.",
      "images" : [
        "img/projects/chase-the-kicker.png",
        "img/projects/chase-the-kicker-bio.png"
      ]
    },
    {
      "title" : "CT Drummers Association",
      "dates" : "Jan 2012 - Present",
      "description" : "Fundraising website to earn scholarship money for college bound drummers.",
      "images" : [
        "img/projects/ct-crummers.png"
      ]
    }
  ],
  "display" : function() {
    for (var project in projects.projects) {
      var objPath = projects.projects[project];

      $("#projects .items").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", objPath.title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", objPath.dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", objPath.description);
      $(".project-entry:last").append(formattedDescription);

      if(objPath.images.length > 0) {
        for(var image in objPath.images) {
          var formattedImages = HTMLprojectImage.replace("%data%", objPath.images[image]);
          $(".project-entry:last").append(formattedImages);
        }
      }
    }
  }
}

projects.display();
