

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

// console.log("projectLink is: " + projectLink);

var projectArr = [
    {javaWordGame: "https://wagnerandy.github.io/Word-Guess-Game/"},
    {javaCrystalGame: "https://wagnerandy.github.io/unit-4-game/"},
    {javaGifTastic: "https://wagnerandy.github.io/GifTastic/"},
    {javaTrainScheduler: "https://wagnerandy.github.io/Train-Scheduler/"},
    {nodeLIRI: ""},
    {nodeBamazon: ""},
    {expressFriendFinder: "https://limitless-anchorage-24722.herokuapp.com/"},

    ];

var descriptionArr = [
    { javaWordGame: "This is a fruit themed word guess game like hangman.<br>This vanilla JavaScript code uses for-loops to find matches from user inputs against letters stored in arrays.<br>The correct letter arrays and incorrect letter arrays are repopulated based on the match results.<br>It dynamically track guesses, win/loss count and word generation." },
    { javaCrystalGame: "This is a game that generates random numeric values to four different crystals.<br>The goal is to match the master number by adding up the crystals correctly.<br>This jQuery code uses setTimeouts, random number generation, and value attributes.<br> It evaluates the user’s total sum against the number to match every time a crystal is clicked.<br>It also generates a random master number, random crystal values, tracks win/loss count and dynamically assigns values to each crystal button every time the game resets." },
    { javaGifTastic: "This is an author themed application that uses the Giphy API and AJAX calls to display GIFs for each author.<br>This code dynamically appends GIFs when jSON data is returned from the AJAX call that queried the author value from the button the user clicked. <br>The GIFs are appended as static with a rating caption but when the user clicks on a GIF it animates.<br>A user can also submit a new author via the form field.<br>The user’s author is added to the author array in the code and displayed as a new button with the author value attribute included." },
    { javaTrainScheduler: "This a train scheduling application that takes in user input, stores it in Google’s Firebase, and appends it to the table.<br>Based on the first train time and the frequency input from the user, the code calculates when the next arrival will be and how many minutes away the train is.<br>Using Moment.js, the time is formatted and displayed in local time." },
    {nodeLIRI: "This a command line NODE app that takes in user input from the terminal to search for concert listings, song information or movie information.<br>It uses the <em>axios</em> NPM package to send requests to the Bands In Town, Spotify and OMDB APIs.<br>Additional NPM packages include: <em>Moment, DotEnv, Inquirer and Node-Spotify-API.</em><br>A video of this application’s functionality viewed here: <strong><a href='https://drive.google.com/file/d/1EbpmkKu2hDE9ljmxgz7sQ20MBVLPveO8/view?usp=sharing' target='_blank'>LIRI Application</a></strong>"},
    {nodeBamazon: "This a command line NODE app that takes in user input from the terminal to search for concert listings, song information or movie information.<br>It uses the <em>axios</em> NPM package to send requests to the Bands In Town, Spotify and OMDB APIs.<br>Additional NPM packages include: <em>Moment, DotEnv, Inquirer and Node-Spotify-API.</em><br>A video of this application’s functionality viewed here: <strong><a href='https://drive.google.com/file/d/1h7tvBUtxoK6KUKsEJfz7Q1VUQLvbJPai/view?usp=sharing' target='_blank'>Bamazon Application</a></strong>"},
    {expressFriendFinder: "This is a full-stack site that takes in results from user surveys, then compare their answers with those from other users.<br>Then the app displays the name and picture of the user with the best overall match<br> It uses Express to handle routing."},

];
 
var descPara = $("<p>");




for (i=0; i<projectArr.length; i++){

    if (projectLink == Object.keys(projectArr[i]) &&  Object.keys(descriptionArr[i])){
        console.log("Description Array Value is " + Object.values(descriptionArr[i]));
        $("#description").empty();
        $("#description").append(descPara, Object.values(descriptionArr[i]))
        // console.log("Project Array Value is " + Object.values(projectArr[i]));
        $("#project").attr("src", Object.values(projectArr[i]))
    }
}
});

