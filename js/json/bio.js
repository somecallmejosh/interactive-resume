var bio = {
  "name" : "Joshua Briley",
  "role" : "FED Ninja <strong>&#9775;</strong> In Training",
  "contacts" : {
    "mobile" : "(860) 531-8250",
    "email" : "josh@thebrileys.com",
    "facebook" : "http://www.facebook.com/joshua.briley",
    "github" : "http://www.github.com/somecallmejosh",
    "twitter" : "http://www.twitter.com/joshuabriley",
    "linkedIn" : "http://www.linkedin.com/pub/joshua-briley/54/a17/15a/",
    "dribbble" : "https://dribbble.com/joshuabriley",
    "location" : "Manchester, CT"
  },
  "biopic" : "img/bio/bio-pic.jpg",
  "welcomeMessage" : "<h1>Designing Sites for Work &amp; Fun</h1><p>From single page web sites to large scale fantasy sports gaming applications, I enjoy designing and developing the visible portion of the web.</p><p>Feel free to poke around at some of my Github <a href='https://github.com/somecallmejosh?tab=repositories'>Repos</a> and <a href='https://gist.github.com/somecallmejosh'>Gists</a>, or some of my past <a href='https://plus.google.com/u/0/photos/100101056654578620650/albums/5761096065075023137'>Design projects</a>.</p><p>Most importantly, <strong>Go Huskies!</strong></p>",
  "skills" : [
    {
      "title" : "Front End Dev",
      "subTitle" : "HTML, CSS, Javascript",
      "largeImage" : "img/teasers/fed-desktop.jpg",
      "smallImage" : "img/teasers/fed-handheld.jpg"
    },
    {
      "title" : "App Design",
      "subTitle" : "Form & Data Design",
      "largeImage" : "img/teasers/app-design-desktop.jpg",
      "smallImage" : "img/teasers/app-design-handheld.jpg"
    },
    {
      "title" : "Site Design",
      "subTitle" : "Marketing Websites",
      "largeImage" : "img/teasers/site-design-desktop.jpg",
      "smallImage" : "img/teasers/site-design-handheld.jpg"
    }
  ],
  "display" : function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage),
        formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile),
        formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
        formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook),
        formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn),
        formattedGitHub = HTMLgitHub.replace("%data%", bio.contacts.github),
        formattedDribbble = HTMLDribbble.replace("%data%", bio.contacts.dribbble);

    $(".identity").append(formattedName);
    $(".site-name").append(bio.name);
    $(".role").append(formattedRole);
    $(".welcome-message").append(formattedWelcomeMessage);
    $("footer div").prepend(formattedPhone);
    $(".nav__contact")
      .append(formattedEmail)
      .append(formattedFacebook)
      .append(formattedTwitter)
      .append(formattedLinkedIn)
      .append(formattedGitHub)
      .append(formattedDribbble);

    // Include the array of skills
    // This has been modified from the original project spec to include
    // imagery, and a skill description.
    if (bio.skills.length > 0) {
      for (skill in bio.skills) {
        var skillPath = bio.skills[skill],
            formattedLargeImage = HTMLSkillLargeImage.replace("%data%", bio.skills[skill].largeImage),
            formattedSmallImage = HTMLSkillSmallImage.replace("%data%", bio.skills[skill].smallImage),
            formattedSkillTitle = HTMLSkillTitle.replace("%data%", bio.skills[skill].title),
            formattedSkillSubtitle = HTMLSkillSubTitle.replace("%data%", bio.skills[skill].subTitle);
        $(".teasers").append(HTMLskillsStart);
        $(".teaser__item:last")
          .append(
            "<div class='teaser__description'>" +
              formattedLargeImage +
              formattedSmallImage +
              formattedSkillTitle +
              formattedSkillSubtitle +
            "</div>"
          );
      }
    }
  }
}

// Invoke the bio.display function.
bio.display();
