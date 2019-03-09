let questionSet = [{
    question:  "What is the title of The Allman Brothers Band instrumental used as the theme to the BBC motoring show, 'Top Gear'?",
    answer: ["Jessica", "Angela", "Erica", "Sandra"],
    correctAnswer: "Jessica"
}, {
    question: "Which football player is featured on the international cover version of the video game FIFA 16?",
    answer: ["Lionel Messi", "Cristiano Ronaldo", "Wayne Rooney", "David Beckham"],
    correctAnswer: "Lionel Messi"
}, {
    question: "What two characters from the game Undertale are never in a relationship or not related?",
    answer: ["Frisk & Chara", "Sans & Papyrus", "Toriel & Asgore", "Alphys & Undyne"],
    correctAnswer: "Frisk & Chara"
},{
    question: "Which franchise had a special event hosted in the popular MMORPG Final Fantasy XIV: A Realm Reborn?",
    answer: ["Yo-kai Watch", "Pokemon", "Yu-gi-oh", "Buddyfight"],
    correctAnswer: "Yo-kai Watch"
},{
    question: "In what year did the first 'The Walking Dead' comic come out?",
    answer: ["2003", "2001", "2006", "1999"],
    correctAnswer: "2003"
},{
    question: "'The first rule is: you don't talk about it' is a reference to which movie?",
    answer: ["Fight Club", "The Island", "Unthinkable", "American Pie"],
    correctAnswer: "Fight Club"
},{
    question: "What household item make the characters of 'Steins; Gate' travel through time?",
    answer: ["Microwave", "Computer", "Refrigerator", "Televison"],
    correctAnswer: "Microwave"
},{
    question: "What three movies, in order from release date, make up the 'Dollars Trilogy'?",
    answer: ["'A Fistful of Dollars', 'For a Few Dollars More', 'The Good, the Bad, and the Ugly'","'The Good, the Bad, and the Ugly', 'For A Few Dollars More', 'A Fistful of Dollars'", "'For a Few Dollars More', 'The Good, the Bad, and the Ugly', 'A Fistful of Dollars'", "'For a Few Dollars More', 'A Fistful of Dollars', 'The Good, the Bad, and the Ugly'"],
    correctAnswer: "'A Fistful of Dollars', 'For a Few Dollars More', 'The Good, the Bad, and the Ugly'"
},{
    question: "In Guild Wars 2, which jumping puzzle rewards players with a Rich Silver Vein instead of a chest at the end?",
    answer: ["Grendich Gamble", "Branded Mine", "Pig Iron Quarry", "Coddler's Cove"],
    correctAnswer: "Grendich Gamble"
},{
    question: "Which M83 album is the song 'Midnight City' featured in?",
    answer: ["Hurry Up, We're Dreaming", "Saturdays = Youth", "Before the Dawn Heals Us", "Junk"],
    correctAnswer: "Hurry Up, We're Dreaming"
}]

let timeLimit = 120;
let correct = 0;
let incorrect = 0;


$("#start").on("click", function() {
    gameStart();
})

function counter() {
    timeLimit--;
    $("#counter").text(timeLimit + " Seconds");
    if (timeLimit <= 0) {
        console.log("You've run out of time");
        gameOver();
    }
}

function gameStart() {
    // creates a timer that ticks every second
    timer = setInterval(counter, 1000);
    // remove all content inside main. Just the start button as of now
    $("#start").hide();
    $("#main").prepend("<h2 id='timeRemain'>Remaining Time: <span id='counter'>120 Seconds</span></h2><br>");
    for (let i = 0; i < questionSet.length; i++) {
        $("#main").append("<h2>Q" + (i+1) + ": " + questionSet[i].question + 
        "</h2>");
        for (let j = 0; j < questionSet[i].answer.length; j++) {
            let inputName = "question"+i;
            $("#main").append("<input type='radio' name='" + inputName + "' value='" +questionSet[i].answer[j]+"'>" + questionSet[i].answer[j] +"<br>");
        }
    }

}

function gameOver() {
    // console.log("ingameover")
    // this goes through every question and checks if the checked answers are the correct ones
    for (let i = 0; i < questionSet.length; i++) {
        // console.log("in gameOver Loops", i);
        // console.log($("input[name='question"+i+"']:checked"));
        $.each($("input[name='question"+i+"']:checked"),function() {
            if ($("input[name='question"+i+"']:checked").val() === questionSet[i].correctAnswer) {
                // if checked answer is correct, correct count increases
                correct++;
            } else {
                // if checked answer is incorrect, incorrect count increases
                incorrect++;
            }
        })
    }
    result();
}

function result() {
    clearInterval(timer);
    $("#main").empty();
    $("#main").append("<h1>All Done!</h1>")
    $("#main").append("<p>Questions Correct:" + correct + "</p>");
    $("#main").append("<p>Questions Incorrect:" + incorrect + "</p>");
    $("#main").append("<button id='restart'>Restart</button>")
    $("#restart").on("click", function() {
        $("#main").empty();
        correct = 0;
        incorrect = 0;
        timeLimit = 120;
        $("#start").show();
        gameStart();
    })
    
}