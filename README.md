Udacity Interactive Résumé Project
==================================

*"I hereby confirm that this submission is my work. I have cited above the origins of any parts of the submission that were taken from Websites, books, forums, blog posts, github repositories, etc. By including this in my email, I understand that I will be expected to explain my work in a video call with a Udacity coach before I can receive my verified certificate."*

This is an attempt to make this project my own, by using the theme I created in the initial project. Rather than a single page, I've decided to span the data across multiple pages, for a potentially better user experience. The bio data is repeated from page to page, while the projects, work and education are more focused on single pages.

[View this project on GitHub Pages](http://somecallmejosh.github.io/interactive-resume/index.html).



## Personal Evaluation

### Content

I believe all resume sections include real or fake data.

### Function Use

All resume sections seem to be built using modular functions which can run in any order. Each section is invoked in the following manner:

`bio.display();`, `education.display();`, `project.display();`, `work.display();`

None of the variables in these functions enter the global scope.


### Encapsulation

All code to display each resume section is contained within the object with the data for the same section. Doesn't appear to be int he global scope.

The display of each section is set as an object of the JSON itself, and later invoked, as seen in the **Function Use** section above.

### Additional Interactivity
The resume contains the **google map** and the **internationalization button**. Additionally, the resume spans multiple pages, and the **JSON has been partialized** and included only when necessary on a given page.

Because the `helper.js` file is included on every page, the following was included conditionally, to avoid js errors in the console.

```
if(typeof google !== 'undefined') {
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);
};
```

```
if(typeof google !== 'undefined') {
  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}
```

I considered the charts and graphs that were presented in the video, but I didn't find they added any significant value to the project. While they look cool, and demonstrate a particular skill, I think their use would be superfluous.

### Artistic Creativity
Styles are completely custom. No reliance on third party templating tools such as Bootstrap or Foundation.

## Features

* Built locally with Python SimpleHTTPServer.
  * `python -m SimpleHTTPServer 8000`
* Custom design.
* Partialized JSON, for easier code management.
  * Not great for performance, but the Critical Rendering Path Class should help with that.
* Responsive.
* Sass based.
  * uses config.rb to define sass parameters
* JQuery

## References

* [JSON Lint](http://www.jsonlint.com) - Used www.jsonlint.com to validated JSON.
* [My Personal Mock Portfolio Project](https://github.com/somecallmejosh/mock-portfolio) - I reused a lot of features from this project.
* [Stack Overflow](http://stackoverflow.com/a/858193/1696060) - Test for undefined variable condition, because Google Map module was causing errors on pages where the Google API wasn't being included.
* [GitHub Pages](https://pages.github.com/) - using GitHub to host this project.
