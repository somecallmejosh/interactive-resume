var work = {
  "jobs" : [
    {
      "employer" : "Sports Technologies, LLC",
      "title" : "Front End Developer",
      "location" : "Collinsville, CT",
      "dates" : "June 13 - Present",
      "description" : "Front End Design and Development of Fantasy Sports Applications.<br>We develop awesome gaming apps for professional sports organizations.<br>Primary responsibilities include Haml, Sass, JS/JQuery development in RoR stack."
    },
    {
      "employer" : "East Point Systems, Inc",
      "title" : "Front End Developer",
      "location" : "East Hartford, CT",
      "dates" : "Jan 13 - May 13",
      "description" : "Front End Design and Development of Online Housing Reposession Industry Network.<br>Click to edit position descriptionLead UX/UI designer on short term, large scale web application.<br>Planned and developed landing page testing scenarios for maximum conversion.<br>Saved company $10K/year by minimizing server side dependencies on company website."
    },
    {
      "employer" : "ImageWorks, LLC",
      "title" : "Lead Designer and Front End Developer",
      "location" : "Vernon, CT",
      "dates" : "Aug 08 - Jan 13",
      "description" : "Front End Design and Development of conversion oriented marketing websites.<br>Strategized and implemented systems that decreased design and front end development time by more than 50%.<br>Implemented \"Lunch-and-Learn Friday\" to train staff on standards based front end development techniques.<br>Designed and developed projects featured on The Food Network and the Hartford Business Journal."
    },
    {
      "employer" : "Para-Diddle Design, LLC",
      "title" : "Owner and Front End Developer",
      "location" : "56 Starkweather St., Manchester, CT USA",
      "dates" : "Jan 04 - Aug 08",
      "description" : "Front End Design and Development of conversion oriented marketing websites.<br>Responsible for vision, budgeting, marketing/sales and other administrative tasks.<br>Educated clients on best practices and conversion oriented design principles.<br>Increased productivity by training staff on efficient coding and workflow practices."
    }
  ],
  "display" : function() {
    for (var job in work.jobs) {
      var job,
          formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
          formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
          formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates),
          formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description),
          formattedEmployerTitle = formattedEmployer + formattedTitle;

      $("#workExperience .items").append(HTMLworkStart);
      $(".work-entry:last")
      .append(formattedEmployerTitle)
      .append(formattedDate)
      .append(formattedDescription);
    }
  }
}
