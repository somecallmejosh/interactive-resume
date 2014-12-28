var projects = {
  "projects" : [
    {
      "title" : "Kenwood Dennard",
      "dates" : "Aug 2014",
      "description" : "AngularFire website that allows easy direct editing of page contents.",
      "url" : "https://github.com/somecallmejosh/kenwood-angularfire",
      "images" : [
        "img/projects/kenwood-dennard.png",
        "img/projects/kenwood-editable.png"
      ]
    },
    {
      "title" : "Chase The Kicker",
      "dates" : "Jul 2013 - May 2014",
      "description" : "College recruiting website that displays seasonal statistics and video highlights.",
      "url" : "https://github.com/somecallmejosh/chasethekicker",
      "images" : [
        "img/projects/chase-the-kicker.png",
        "img/projects/chase-the-kicker-bio.png"
      ]
    },
    {
      "title" : "CT Drummers Association",
      "dates" : "Jan 2012 - Present",
      "url" : "http://ctdrummers.org/",
      "description" : "Fundraising website to earn scholarship money for college bound drummers.",
      "images" : [
        "img/projects/ct-crummers.png"
      ]
    }
  ],
  "display" : function() {
    for (var project in projects.projects) {
      var objPath = projects.projects[project],
          formattedUrl = HTMLprojectUrl.replace("%data%", objPath.url)
          formattedTitle = HTMLprojectTitle.replace("%data%", objPath.title),
          formattedDates = HTMLprojectDates.replace("%data%", objPath.dates),
          formattedDescription = HTMLprojectDescription.replace("%data%", objPath.description);

      $("#projects .items").append(HTMLprojectStart);
      $(".project-entry:last")
        .append(formattedUrl + formattedTitle)
        .append(formattedDates)
        .append(formattedDescription);

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
