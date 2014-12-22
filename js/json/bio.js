var bio = {
  "name" : "Joshua Briley",
  "role" : "Front End Developer",
  "contacts" : {
    "mobile" : "860-232-8250",
    "email" : "josh@thebrileys.com",
    "github" : "somecallmejosh",
    "twitter" : "joshuabriley",
    "location" : "Manchester, CT"
  },
  "biopic" : "img/bio/bio-pic.jpg",
  "welcomeMessage" : "Hi, I'm Josh. Yadda Yadda Yadda.",
  "skills" : [
    "Front End Developer", "UI Designer", "Musician", "Dad", "Husband"
  ],
  "display" : function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic),
        formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage),
        formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
        formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header")
      .append(formattedName)
      .append(formattedRole)
      .append(formattedBioPic)
      .append(formattedWelcomeMessage);
    $("#topContacts")
      .append(formattedMobile)
      .append(formattedEmail)
      .append(formattedTwitter)
      .append(formattedGithub)
      .append(formattedLocation);

    if (bio.skills.length > 0) {
      var skill;
      $("#header").append(HTMLskillsStart);
      for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
      }
    }
  }
}
