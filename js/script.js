// QUESTION 1 //

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock")
}



// QUESTION 2 //

for (var i = 15; i <= 25; i++ ) {
    if (i === 17); {
        console.log(i);
    }
}



// QUESTION 3 //

var games = [
    {
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: undefined,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

var gamesContainer = document.querySelector("ul");

for (var i = 0; i <games.length; i++) {
    var rating = games[i].rating;
    var gamesRating = games[i].title + ": " + games[i].rating;
    if (rating <= 3.5) {
        gamesContainer.innerHTML += "<li>" + gamesRating + "</li";
    }
}



// QUESTION 4 //

function whatIDontLike (dislike) {

    var typeofFirst = typeof dislike;

    if (typeofFirst !=="string") {
        return "Please send in a string";
    }

    return "I don't like" + " " + dislike;
}
var result = whatIDontLike ("peanut");
console.log(result);




// QUESTION 5 // 

function convert (num1, num2) {
   var convertedNum1 = parseFloat(num1);
   var convertedNum2 = parseFloat(num2);

   if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
       return "Invalid argument(s)";
   }

   return convertedNum2 - convertedNum1;
}

var element = document.querySelector('#subtraction')

var sum = convert (true, 20);

element.innerHTML = sum;




// QUESTION 6 // 

var heading = document.querySelector("h1");
var buttonPage = document.querySelector(".page");
var newLink = document.getElementById("h1")



function changeHeading() {
    heading.innerHTML = "Updated heading";
    var body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    heading.style.color = "green";
    heading.style.fontFamily = "impact";
    newLink.innerHTML ="new header"
}
buttonPage.onclick = changeHeading; 
