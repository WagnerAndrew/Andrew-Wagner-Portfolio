$( document ).ready(function() {

// Start language menu collapse/expand script /////////////////////////////////////////////////////////////////////////////
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function (event) {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Start project select script /////////////////////////////////////////////////////////////////////////////////////////////

$(".projectLink").on('click', function(event) {
event.preventDefault();

// console.log("this.id is " + $(this).attr('id'));

var projectLink = $(this).attr('id');

var projectArr = [
    {javaWordGame: "https://wagnerandy.github.io/Word-Guess-Game/"},
    {javaCrystalGame: "https://wagnerandy.github.io/unit-4-game/"},
    {javaGifTastic: "https://wagnerandy.github.io/GifTastic/"},
    {javaTrainScheduler: "https://wagnerandy.github.io/Train-Scheduler/"},
    {nodeLIRI: "https://drive.google.com/file/d/1EbpmkKu2hDE9ljmxgz7sQ20MBVLPveO8/preview"},
    {nodeBamazon: "https://drive.google.com/file/d/1h7tvBUtxoK6KUKsEJfz7Q1VUQLvbJPai/preview"},
    {expressFriendFinder: "https://limitless-anchorage-24722.herokuapp.com/"},

    ];

var descriptionArr = [
    { javaWordGame: "<strong>Description:</strong><br>This is a fruit themed word guess game like hangman.<p>It uses for-loops to find matches from user inputs against letters stored in arrays. The correct letter arrays and incorrect letter arrays are repopulated based on the match results. It dynamically track guesses, win/loss count and word generation.<p><strong>Technical:</strong><br>HTML, Bootstrap, JavaScript" },
    { javaCrystalGame: "<strong>Description:</strong><br>This game generates random numeric values to four different crystals. The goal is to match the master number by adding up the crystals correctly.<p>It evaluates the user’s total sum against the number to match every time a crystal is clicked. It also generates a random master number, random crystal values, tracks win/loss count and dynamically assigns values to each crystal button every time the game resets.<p>This code uses setTimeouts, random number generation, and value attributes.<p><strong>Technical:</strong><br>HTML, Bootstrap, JavaScript, jQuery" },
    { javaGifTastic: "<strong>Description:</strong><br>This is an author themed application that uses the Giphy API and AJAX calls to display GIFs for each author.<p>This code dynamically appends GIFs when jSON data is returned from the AJAX call that queried the author value from the button the user clicked. The GIFs are appended as static with a rating caption but when the user clicks on a GIF it animates.<p>A user can also submit a new author via the form field. The user’s author is added to the author array in the code and displayed as a new button with the author value attribute included.<p><strong>Technical:</strong><br>HTML, CSS,  Bootstrap, JavaScript, jQuery, AJAX, APIs" },
    { javaTrainScheduler: "<strong>Description:</strong><br>This is a train scheduling application that takes in user input, stores it in Google’s Firebase, and appends it to the front end train table.<p>Based on the first train time and the frequency input from the user, the code calculates when the next arrival will be and how many minutes away the train is.<p>Using <em>Moment.js</em>, the time is formatted and displayed in local time.<p><strong>Technical:</strong><br>HTML, CSS,  Bootstrap, JavaScript, jQuery, AJAX, APIs, Google Firebase" },
    {nodeLIRI: "<strong>Description:</strong><br>This a command line NODE application that takes in user input from the terminal to search for concert listings, song information or movie information.<p>It uses the <em>axios</em> NPM package to send requests to the Bands In Town, Spotify and OMDB APIs.<p>Additional NPM packages include: <em>Moment, DotEnv, Inquirer and Node-Spotify-API.</em><p><strong>Technical:</strong><br>Node, NPM Package, JavaScript, jQuery, AJAX, APIs"},
    {nodeBamazon: "<strong>Description:</strong><br>This a command line NODE application that operates like a mock storefront .<p>It accesses a MySQL database where product information is stored.<p>A user can operate as a customer or manager and different accessibility will change accordingly. Customers can view products and purchase them in different quantities.  If the product quantity is available, the total cost will be calculated for the customer.  If there is not enough product, the sale will not go through.<p>In manager mode, products can be added, quantities less than 5 can be viewed and quantities can be updated.<p><strong>Technical:</strong><br>MySQL, Node, NPM Package, JavaScript, jQuery, AJAX"},
    {expressFriendFinder: "<strong>Description:</strong><br>This is a full-stack site that takes in results from user surveys, then compares the answers with those from other users.<p>Then the app displays the name and picture of the user with the best overall match.<p>It uses Express to handle routing.<p><strong>Technical:</strong><br>Express, HTML, CSS,  Bootstrap, JavaScript, jQuery, AJAX, API"},

];
 
var descPara = $("<p>");
var projButton = $("<button class='open'>View This Application</button>")

    for (i=0; i<projectArr.length; i++){

        if (projectLink == Object.keys(projectArr[i]) && Object.keys(descriptionArr[i])){
            
            $("#description").empty();
            $("#description").append(descPara, Object.values(descriptionArr[i]), projButton);
            $("#project").attr("src", Object.values(projectArr[i]))
            
        }
    }
    });

//Modal functionality ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).on("click", ".open", function(){
    $(".popup-overlay, .popup-content").addClass("activeModal");
  });
  
  
$(".close, .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("activeModal");
  });

});
