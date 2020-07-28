
var tvshow = "friends";

var characters = 6;
characters = 8;
var rating = 7.5;
var hasshowfinished = true;
var name = "ZuZu";
var sentence = "My name is" + name + "and I'm learning javascript"


var sentence3 = "is the show finished? ${hasshowfinished}. The show was called ${tvshow} with ${characters} and a rating of ${rating}"

var answer = prompt("I'm having a party, would you like to RSVP")
if (answer == "yes") {alert("welcome to the party")} else (answer == "no"); {alert("maybe next time!")}
var countries = ["macedonia", "montenegro", "france"]
countries.push("spain");
countries.shift();
countries.splice(1, 0, "England");
var countrylist = countries.join(',')


//week 5 work below//

for (i = 0; i < 11; i++) { console.log("this number is " + i) }
for (x = 0; x>11; i--) {console.log("this number is " + x)}; //this counts down, the above counts up//

function myName() {return prompt("name please")};
var name = myName();
console.log(name)

function movieDetails (title, released) {return title + ' was released in ' + released +"."};
var movie = movieDetails ("The Lion King", 1994);
console.log(movie)


function shoppingBasket (item, cost, balance){if (cost>balance){return "This is too expensive" + item} else{return "You can afford the " + item}};
var Me = shoppingBasket ('some voddy', 10, 30);
console.log(Me)

var You = shoppingBasket ('a will to live', 10000000000, 9);
console.log(You);

function reverse(word){var splitString = word.split("");
var reversearray = splitString.reverse ();
var joinArray = reversearray.join("");
return joinArray };




//loops over array and capitalises each one//

function cap(str){
    const newLocal = str.tolowerCase().split('');
    var splitString = newLocal;
    for (var i=0; i,splitString.length; i++) { i,splitString(i).charAt(0).toUpperCase()+splitString(i).substring(1);
} 
return splitString.join('')
}

//tells us what data type we are putting in//


// week 3 thursday //

var simp = { name: 'ryan',
    age: 23,
    friends: ["e-girl", "onlyfans", "brad"]
, payGirlsMoney: true,

}
console.log(simp.friends)


