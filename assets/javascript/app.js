var questionSet = [{
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
},


$("#start").on("click", function(){
    console.log("game started");
    $("#main").empty();
    for (let i = 0; i < questionSet.length; i++) {

    }
 



    // utilizing ajax for the set of questions
    // // gets a set of trivia questions with correct answers and incorrect answers
    // $.ajax({
    //     url: "https://opentdb.com/api.php?amount=10",
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response.length);
    //     for (let i = 0; i < response.length; i++) {
            
    //     }

    // });
});