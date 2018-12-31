

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
    {javaTrainScheduler: "https://wagnerandy.github.io/Train-Scheduler/"}
    ];

var descriptionArr = [
    {javaWordGame: "You guess the word"},
    {javaCrystalGame: "You add the crystals"},
    {javaTrainScheduler: "You schedule trains"}
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

