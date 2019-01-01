

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
    {javaTrainScheduler: "https://wagnerandy.github.io/Train-Scheduler/"}
    ];

var descriptionArr = [
    { javaWordGame: "You have 10 guesses to guess a fruit. If you guess correctly before your guess count reaches 0, you win. Otherwise, you lose." },
    { javaCrystalGame: "Each crystal has a numeric value. Every time you click a crystal, your total will increase by it's value.  Your goal is to match the number above without going over." },
    { javaGifTastic: "Authors have cool GIFs too." },
    { javaTrainScheduler: "Enter a train name, destination, first train time (in military time HH:mm) and frequency in minutes. Then the table will display the train name, destination, frequency, time of next arrival and minutes until the next train." }
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

