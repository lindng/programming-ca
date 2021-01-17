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
var remove = document.querySelector("ul");
var body = document.querySelector("body");

function changeHeading() {
    heading.innerHTML = "Updated heading";

    
    body.style.backgroundColor = "yellow";

    heading.style.color = "green";

    heading.style.fontFamily = "impact";

    heading.innerHTML = heading.innerHTML + "<h1>" + "<a href='#'>" + "Programming Foundation Course Assignment" + "<a>" + "<h1>";

    
    remove.style.padding = "none";
    remove.style.listStyleType = "none";
}
buttonPage.onclick = changeHeading; 



// QUESTION 7 //

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

console.log(toys);

var toyList = document.querySelector('#total');
var priceButton = document.querySelector(".price");

function buttonClick() {
    for (var i = 0; i < toys.length; i++) {

        var item = toys[i];
    
        console.log(item.name);
    
        console.log(item.price);
    
        toyList.innerHTML += "<p>" + item.name + " " + item.price + "</p>"
    }
}
priceButton.onclick = buttonClick;