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
  "welcomeMessage" : "<strong>I fell in love with the web back in 1995</strong> while creating my very first Geocities website. Posting pictures and writing “reviews” of my favorite drummers led me to fun and interesting creative challenges. Each of these new challenges led me on quests through Dogpile and Alta Vista and (insert internet relic here). Interestingly, all my answers could be found through creative searching. There was definitely something more intriguing to this internet thing than my egotistical rantings about drummers. There was an opportunity for self improvement. There was adventure.",
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
      .append(formattedName + formattedRole)
      .append(formattedMobile)
      .append(formattedLocation);
    $(".introduction")
      .append(formattedBioPic)
      .append(formattedWelcomeMessage);
    $("#topContacts")
      .append(formattedEmail)
      .append(formattedTwitter)
      .append(formattedGithub);

    if (bio.skills.length > 0) {
      $(".skills").append(HTMLskillsStart);
      for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
      }
    }
  }
}
