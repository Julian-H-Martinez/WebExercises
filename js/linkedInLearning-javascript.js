/* ---OBJECTS--- */

var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
};

var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
}

var bookOfKnowledge = {
    'lunch time': "12:30 PM",
    'the ultimate answer': 42,
    bestSong: "Lonnie's Lament",
    earth: "Mostly harmless."
};

// bird.color = "black";
// // console.log(bird);
// bird['where it lives'] = "in a tree";
// // console.log(bird);
// delete bird['where it lives'];

/*
this does not make a copy of an object
reusing reference to same value and same location in computer memory

var bear2 = bear;
console.log(bear2);
*/

/*
bonus: make a copy of object safely
converts object to a string of JSON
then reparse into an object
animal2 = JSON.parse(JSON.stringify(animal));
 */

/* ---ARRAYS--- */
/*
ARRAYS PRESERVES ORDER THAT IT'S BEEN ARRANGED AS
ARRAYS HAVE KEYS THAT ARE NOT DISPLAYED (INDEX) AND
 AUTOMATICALLY ASSIGNED STARTING AT 0
 HENCE WHY ARRAYS ARE CALLED 0 INDEXED
"SECRETLY" AN ARRAY IS AN OBJECT WITH SPECIAL TREATMENT
ARRAYS CAN BE CREATED WITH ANY KIND OF DATA
ARRAYS OFTEN USED FOR LISTS
ARRAYS KNOW HOW MANY THINGS ARE IN THEM (.length)
*/
var myArray = [];
// myArray = [0, 1, 2, 'string1', 'string2', 'string3', true, false]
// console.log(myArray);
// console.log(myArray.length);
// console.log(typeof myArray[myArray.length-1]);

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// console.log(daysOfTheWeek);
// console.log(typeof daysOfTheWeek);
// console.log(daysOfTheWeek.length);

var counties = [
    'Bexar',
    'Guadalupe',
    'Comal',
    'Gonzalez'
]
// console.log(counties);
// console.log(counties.length);

var arrayOfStuff = [
    {'name': 'value'},
    [1,2,3],
    true,
    420,
    'This javascript stuff is pretty dope!'
];
// console.log(arrayOfStuff);
// console.log(arrayOfStuff.length);
// console.log(arrayOfStuff[1][2]);
// console.log(arrayOfStuff[0].name);

/* ---ARRAYS_MANIPULATING--- */

/*
push() and pop() work with the end of an array
shift() and unshift() work with the beginning of an array
splice() allows you to work with items in middle of array
 */

/* - changing item in array - */
counties[2] = "Hays";

/* - adding item to end of array - */
counties[4] = "Comal";
counties[counties.length] = "Travis";
counties.push("Bell");

/* - removing an item from end of array - */
// console.log(counties.pop());

/* - removing an item from middle of array - */
//  delete would only remove item but array.length would remain the same
delete counties[2];
//  splice allows you to remove completely items from anywhere within the array
//  takes in 2 parameters -
//  (1) which index in array you want to do the operation to
//  (2) number of items wanting to remove
// console.log(counties.splice(2, 1));

/* ---READABILITY: WHITESPACE--- */
/*
whitespace is ignored by js
all will work but what's more readable?
 */
//  NO SPACE
// var year=2022, month='May', day=5, holiday='Cindo de Mayo';
//  WITH SPACE
// var year    = 2022,     month   =   'May', day =    5,          holiday='Cinco de Mayo';
//  SEPARATE LINES
// var year = 2022,
//     month = 'May',
//     day = 5,
//     holiday = 'Cinco de Mayo';
//  NO SPACE OBJECT
// var tinyAlmanac={'year':2022,'month':'May','day':5,'holiday':'Cinco de Mayo'};
//  SEPARATE LINES OBJECT
// var tinyAlmanac = {
//     'year' : 2022,
//     'month' : 'May',
//     'day' : 5,
//     'holiday' : 'Cinco de Mayo'
// };

/* ---REGULAR EXPRESSIONS (REGEX)--- */
/*
SEARCHING TEXT FOR PATTERNS
LOOKING FOR A PARTICULAR SOMETHING BUT NOT AN EXACT SOMETHING
ALLOWS YOU TO DESCRIBE SOMETHING YOU ARE LOOKING FOR IN AN ABSTRACT WAY
IS A DATATYPE LIKE NUMBERS, STRINGS, OBJECTS, ETC
ALLOWS YOU TO CHECK FOR A WORD OR BLOCK OF TEXT QUICKLY
MODIFIERS AVAILABLE TO CHANGE HOW REGEX WORKS

 */

var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

//  this IS REGULAR EXPRESSION LITERAL
//  WILL SEARCH FOR 'this' WHEN CALLED AND TESTED
// var regex = /this/;

//  ADDING SOMETHING TO END OF REGULAR EXPRESSION (AFTER SLASH) IS CALLED A FLAG
//  i STANDS FOR caseInsensitive
// var regex = /this/i;
//  ^ CHECKS BEGINNING OF STRING IF PRESENT
// var regex = /^this/i;
//  TO CHECK END OF STRING ADD $ TO END OF REGULAR EXPRESSION BEFORE LAST /
// var regex = /this$/i;
//  . CHECKS REGEX WITH ANY CHARACTER AT END
// var regex = /ever.$/i;
//  TO CHECK FOR A LITERAL DOT YOU NEED TO \ ESCAPE THE DOT
var regex = /ever\.$/i;

//  .test method to test regex of string for pattern set with variable regex
// console.log(regex.test(string1));
// console.log(regex.test(string2));
// console.log(regex.test(string3));
// console.log(regex.test(string4));

/* ---OPERATORS AND CONTROL STRUCTURES--- */

//  SIMPLE COMPARISONS
var one = 1, two = 2;

//  strict equality (===) compares values and data types
//  equality (==) compares only values

// console.log(one === one);   //  true
// console.log(one === two);   //  false
// strict inequality
// console.log(one !== one);   //  false
// console.log(one !== two);   //  true

//  RELATIONAL COMPARISONS
// console.log(one < two);     //  true
// console.log(one <= two);    //  true
// console.log(one > two);     //  false
// console.log(one >= two);    //  false
// console.log(one < one);     //  false
// console.log(two > two);     //  false
// console.log(one <= one);    //  true
// console.log(two >= two);    //  true

//  ARITHMETIC OPERATORS
/*
add +
subtract -
multiplication *
division /
modulus % divides first number by second and identify the remainder

check if number is even ( num1 % num2 == 0)

var counter = 0;
INCREMENTING
counter = counter + 1;
counter += 1;   //  can increment by any number (even negative)
counter ++;     //  only increments by 1

DECREMENTING
counter = counter - 1;
counter -= 1;   //  can decrement by any number (even negative)
counter --;     //  only decrements by 1

Can be incremented and decremented by multiplication (*) and division (/) respectively
 */

//  MAIN LOGICAL OPERATORS
/* AND(&&) and OR(||) */
var animal1 = 'monkey';
var animal2 = 'bear';
var animal3 = 'tiger';

//  every condition needs to be true in order to return true
// console.log(animal1 === 'monkey' && animal2 === 'bear');    //  true
// console.log(animal1 === 'ape' && animal2 === 'bear');       //  false
// console.log(animal1 === 'ape' || animal2 === 'bear');       //  true
// console.log(animal1 === 'ape' || animal2 === 'turtle');     //  false
// console.log(animal1 === 'monkey' && animal2 === 'bear' && animal3 === 'tiger');     //  true
// console.log(animal1 === 'monkey' && animal2 === 'bear' && animal3 === 'tiger');     //  true
// console.log(animal1 === 'monkey' || animal2 === 'bear' && animal3 === 'tiger');     //  true
//  ! inverts the expressions outcome true is now false and false is now true

//  CONDITIONALS: if
var answer = window.confirm("Click OK, get true. Click cancel, get false.");
answer;

// if(answer === true){
//     console.log("You said true!");
// }
/*
if(answer === true){
    console.log("You said true!");
}else{
    console.log("You said something else");
}

var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");
if(answer === "YES"){
    console.log("You said YES!");
}else if(answer === "MAYBE"){
    console.log("You said MAYBE. I don't know what to make of that.");
}else if(answer === "NO"){
    console.log("You said NO! :(");
}else{
    console.log("You rebel, you!");
}
*/

//  CONDITIONALS: switch
/*
var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");
if(answer === "YES"){
    console.log("You said YES!");
}else if(answer === "MAYBE"){
    console.log("You said MAYBE. I don't know what to make of that.");
}else if(answer === "NO"){
    console.log("You said NO! :(");
}else{
    console.log("You rebel, you!");
}
 */
/* ---CAN BE WRITTEN AS A switch AS FOLLOWS--- */
//  BE SURE TO USE break; OTHERWISE A FALL THRU WILL OCCUR
//  OPERATION WILL CONTINUE DOWN UNTIL A BREAK IS HIT
//  LEAVE break; OUT IF YOU WANT TO CASCADE DOWN TO OTHER CONDITIONS
var answer = window.prompt("Type YES, NO, or MAYBE. Then click OK.");

switch (answer){
    case "YES":
        console.log("You said yes!");
        break;
    case "MAYBE":
        console.log("You said MAYBE. I don't know what to make of that.");
        break;
    case "NO":
        console.log("You said NO. :(");
        break;
    default:
        console.log("You rebel, you!");
        break;
}

//  TERSE ifs
//  FORMS TO MAKE if STATEMENTS SHORTER
var cherub = "Cupid";
//  charub = 'Some Other Guy';

//  one liner - no curly braces
//  rarely used
if(cherub === "Cupid") console.log("Ouch, an arrow! Ooo, I'm in love!");

if(cherub === "Cupid") console.log("Ouch, an arrow! Ooo, I'm in love!");
else console.log("I feel nothing!");

var wantForChristmas = "puppy",
    gotForChristmas = "puppy",
    cryAboutIt = false;

if(wantForChristmas === gotForChristmas){
    console.log("Yay! The little children are so pleased!");
    cryAboutIt = false;
}else{
    console.log("Oh no! Sad Christmas!");
    cryAboutIt = true;
}

//  condition that's a variable just by itself
if(cryAboutIt){
    console.log("Child says: WAAAAAAAAAAAAAAAAAAAAA!");
}

if(!cryAboutIt){
    console.log("Child says: YAY!");
}


var animal = 'cat';
//  animal = 'dog';

//  ternary operator
animal === 'cat'    //  conditional followed by ? (asking if true or false)
    ? console.log("You will be a cat herder.")      //  if true this happens
    : console.log("You will be a dog catcher.");    //  else false this happens

//  ternary operator often used to set a variable
var job = animal === "cat" ? "cat herder" : "dog catcher";


//  TYPE CHECKING
//  javascript is loosely typed

var thing = 12;
thing = "twelve";

console.log(typeof thing);
//  in js, arrays are objects with the property of length
//  to check if typeof is really an array
thing = {};
console.log(typeof thing === "object" && thing.hasOwnProperty("length"));   //  false
thing = [];
console.log(typeof thing === "object" && thing.hasOwnProperty("length"));   //  true

//  NaN is not a way to check if variable is a number
console.log(typeof NaN);    //  number will be returned
console.log(Number.isNaN());    //  correct way to check if a variable is/is not a number
console.log(typeof null);   //  returns an object
thing = null;
console.log(thing === null)//  strict equality operator is needed to check if variable is null

/* ---ITERATING WITH LOOPS--- */
//  FOR LOOPS: SEQUENTIAL

//  first - set initialization var i = 0; this is where to start
//  second - setup ending condition i < 10; this is when loop will end
//  third - how to get from start to end i++ -> INCREMENT || DECREMENT by 1 or what's being asked
for(var i = 0; i < 10; i++){
    console.log("Value of i is: " + i);
}

var pageNames = [
    "Home",
    "About Us",
    "Contact Us",
    "JavaScript Playground",
    "News",
    "Blog"
];

/* notice repeating pageNames[i] - use variable in place to better identify */
// for(i=0; i<pageNames.length; i++){
//     if(document.title === pageNames[i]){
//         console.log("We ARE here: " + pageNames[i]);
//     }else{
//         console.log("We are NOT here: " + pageNames[i]);
//     }
// }

for(i=0; i<pageNames.length; i++){
    var currentPageTitle = pageNames[i];

    if(document.title === currentPageTitle){
        console.log("We ARE here: " + currentPageTitle);
        break;  //  add break to get out of loop
    }else{
        console.log("We are NOT here: " + currentPageTitle);
    }
}
































































































































































































































































































































































