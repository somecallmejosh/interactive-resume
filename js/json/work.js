var work = {
  "jobs" : [
    {
      "employer" : "Sports Technologies, LLC",
      "employerLogo" : "img/logos/sti.png",
      "employerUrl" : "http://www.sportstechinc.com",
      "title" : "Front End Dev",
      "location" : "Collinsville, CT",
      "dates" : "June 13 - Present",
      "description" : "<p>Front End Design and Development of Fantasy Sports Applications.</p><p>We develop awesome gaming apps for professional sports organizations.</p><p>Primary responsibilities include Haml, Sass, JS/JQuery development in RoR stack.</p>"
    },
    {
      "employer" : "East Point Systems, Inc",
      "employerLogo" : "img/logos/eps.png",
      "employerUrl" : "http://www.eastpointsystems.com",
      "title" : "Front End Dev",
      "location" : "East Hartford, CT",
      "dates" : "Jan 13 - May 13",
      "description" : "<p>Front End Design & Development of social business application.</p><p>Lead UX/UI designer on short term, large scale web application.</p><p>Saved company $10K/year by minimizing server side dependencies on company website.</p>"
    },
    {
      "employer" : "ImageWorks, LLC",
      "employerLogo" : "img/logos/iw.png",
      "employerUrl" : "http://www.imageworksllc.com",
      "title" : "Lead Designer",
      "location" : "Vernon, CT",
      "dates" : "Aug 08 - Jan 13",
      "description" : "<p>Front End Design & Development of marketing websites.</p><p>Decreased organizational project development time by more than 50%.</p><p>Designed and developed projects featured on The Food Network and the Hartford Business Journal.</p>"
    },
    {
      "employer" : "Para-Diddle Design, LLC",
      "employerLogo" : "img/logos/pdd.png",
      "employerUrl" : "#",
      "title" : "Co-Owner",
      "location" : "56 Starkweather St., Manchester, CT USA",
      "dates" : "Jan 04 - Aug 08",
      "description" : "<p>Front End Design & Development of small business websites.</p><p>Responsible for vision, budgeting, marketing/sales and other administrative tasks.</p><p>Increased team productivy through consistent training.</p>"
    }
  ],
  "display" : function() {
    for (var job in work.jobs) {
      var job,
          formattedURL = HTMLemployerURL.replace("%data%", work.jobs[job].employerUrl),
          formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
          formattedLogo = HTMLemployerLogo.replace("%data%", work.jobs[job].employerLogo),
          formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
          formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates),
          formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description),
          formattedEmployerTitle = formattedEmployer + formattedTitle;

      $("#workExperience .items").append(HTMLworkStart);
      $(".work-entry:last")
        .append(formattedLogo)
        .append(formattedTitle)
        .append(formattedURL + formattedEmployer)
        .append(formattedDate)
        .append(formattedDescription);
    }
  }
}
work.display();
