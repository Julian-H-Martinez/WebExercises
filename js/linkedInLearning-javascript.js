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
/*
//  first - set initialization var i = 0; this is where to start
//  second - setup ending condition i < 10; this is when loop will end
//  third - how to get from start to end i++ -> INCREMENT || DECREMENT by 1 or what's being asked

//  while loop preserves order when iterating over an object, unlike the 'for' loop

//  objects and enumerative 'for' loops cannot guarantee order preservation
 */

//  FOR LOOPS: SEQUENTIAL

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

//  notice repeating pageNames[i] - use variable in place to better identify //
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

//  FOR LOOPS: ENUMERATIVE
//  CAN BE USED ON ARRAYS AND OBJECTS
//  order is not guaranteed when using a 'for in' loop
//  initialize variable like sequential loop followed by
//  keyword 'in' followed by
//  the array/object to loop through
for(var p in pageNames){
    console.log(p, pageNames[p]);
}

var pages = {
    first: "Home",
    second: "About Us",
    third: "Contact Us",
    fourth: "JavaScript Playground",
    fifth: "Blog"
};
for (var p in pages){
    if(pages.hasOwnProperty(p)){
        console.log(p + ": ", pages[p]);
    }
}

//  WHILE LOOPS
/*
- WHILE LOOPS ARE USED WHEN YOU DON'T KNOW HOW MANY TIMES TO LOOP OVER SOMETHING
- DANGER WITH WHILE LOOPS - IT'S EASY TO CREATE AN INFINITE LOOP (DOES NOT BREAK OR STOP)
 */
//  for comparison
/*
//  first - set initialization var i = 0; this is where to start
//  second - setup ending condition i < 10; this is when loop will end
//  third - how to get from start to end i++ -> INCREMENT || DECREMENT by 1 or what's being asked

for (var i = 0; i < 10; i++){
    console.log(i);
}
 */

var i = 0;  //  initializing variable (first)

while (i < 10){     //  keyword 'while' followed by terminating/ending condition (second)
    //  do something
    console.log(i + "... This will go until we hit 10!");
    //
    i += 1;    //  reaching endpoint by INCREMENT || DECREMENT (third)
}

var myArray = [true, true, true, false, true, true];

var myItem = null;

while(myItem !== false){
    console.log(
        "myArray has "
        + myArray.length
        + " items now. This loop will go until we pop a false!"
    );
    myItem = myArray.pop();
}

var counter = 1;
while(true){
    console.log(counter);
    counter++;
    break;  //  comment out this break statement to make this loop go forever and potentially lock up your web browser
}

myItem = false;
//  do while loop ensures that something is executed at least once
do{
    console.log(
        "myArray has " +
        myArray.length +
        " items now. This loop will go until we pop a false."
    );
    myItem = myArray.pop();
}while(myItem !== false);


/* ---FUNCTIONS--- */
/*
//  methods of objects are functions
//  to create function need:
keyword 'function' followed by
'nameOfFunction' followed by
parenthesis () for parameter(s) followed by
open curly brace '{' followed by
doing something followed by
closing curly brace '}'

function someName(){ // do something // }

functions can have as many arguments as you want

when creating a function it's good to ensure that typeof argument being passed is what's required


 */
//  BASIC FUNCTIONS
console.log('Arf');
console.log('Woof');
console.log('Meow');
console.log('Moooooo');

function speak(){
    console.log('Arf');
    console.log('Woof');
    console.log('Meow');
    console.log('Moooooo');
}

speak();

//  ARGUMENTS IN FUNCTIONS
//  modifying data
function fuddify(speech){
    //  if it's not a string, return an error message
    //  typeof allows us to ensure argument is a string
    if(typeof speech !== 'string'){
        console.error("Nice twy, wabbit!");
        return;
    }

    //  otherwise, make it sound like Elmer Fudd
    //  .replace using regex to replace with given value 'w' 'W'
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/R/g, "W");

    return speech;
}

var griping = fuddify("Really trying my nerves silly Rabbit!!!");

function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//  when only evaluating to true or false you can compress the above code with below
function isEven(num){
    return num % 2 === 0;
}

isEven(44);
isEven(45);

//  MORE ON ARGUMENTS

function speakSomething(what, howMany){
    //  this pattern works nicely for default values
    //  check if the argument is undefined, and if it is, provide a default value
    var what = (typeof what !== 'undefined') ? what : "Default speech";
    var howMany = (typeof howMany !== 'undefined') ? howMany : 10;

    //  shorter version that could get tripped up by truthiness
    /*
    what = what || 'Default speech';
    howMany = howMany || 10;
     */

    for(var i=0; i < howMany; i += 1){
        console.log(what + " (" + i + ")");
    }
}

function addingMachine(){
    var total = 0;

    //  keyword arguments is an object every function should know about
    //  array like object that provides some of the array tools

    for(var i = 0; i < arguments.length; i += 1){
        //  grab the next number
        var number = arguments[i];

        //  check if the argument is a number
        //  if so, add it to the running total
        if(typeof number === 'number'){
            total += number;
        }
    }

    //  done - return total
    return total;
}

//  OBJECTS, REFERENCES, AND FUNCTIONS

var calvin = {
    name: "Calvin",
    bestFriend: "Hobbes",
    form: "human boy"
};

//  you can also pass an object to a function
//  because objects are passed by reference, the argument will be modified
//  function below will modify original object and not create a copy
function transmogrifier(calvin){
    if(typeof calvin !== 'object'){
        console.error("argument is of the wrong type");
        return;
    }

    //  generate a random number between 1 and 5
    var randomNumber = Math.floor((Math.random()*5) + 1);

    switch(randomNumber){
        case 1:
            calvin.form = 'tyrannosaurus';
            break;
        case 2:
            calvin.form = 'grey wolf';
            break;
        case 3:
            calvin.form = 'bengal tiger';
            break;
        case 4:
            calvin.form = 'grizzly bear';
            break;
        case 5:
            calvin.form = 'canary';
            break;
        default:
            //  he stays human
            calvin.form = 'human boy';
            break;
    }
}

function transmogrifierCopy(calvin){
    if(typeof calvin !== 'object'){
        console.log("argument is of the wrong type");
        return;
    }

    //  generate a random number between 1 and 5
    var randomNumber = Math.floor(Math.random()*5) + 1;
    //  saving form as a variable so that we can modify the newForm and not original
    var newForm = calvin.form;  //  by default, do not change

    switch(randomNumber){
        case 1:
            newForm = 'tyrannosaurus';
            break;
        case 2:
            newForm = 'grey wolf';
            break;
        case 3:
            newForm = 'bengal tiger';
            break;
        case 4:
            newForm = 'grizzly bear';
            break;
        case 5:
            newForm = 'canary';
            break;
        default:
            //  he stays human
            newForm = 'human boy';
            break;
    }

    //  return a new object that's just like calvin, but transmogrified
    //  new object without modifying the old one
    return {
        name: calvin.name,
        bestFriend: calvin.bestFriend,
        form: newForm
    };
}

//  FUNCTIONS ARE OBJECTS
//  functions are first class citizens in js
//  objects with power to be invoked
//  can pass functions into other functions or set as a variable
//  which makes the function an 'anonymous function'

function speakSomething(what) {
    what = what || "Speaking!";

    for (var i = 0; i < 10; i += 1) {
        console.log(what);
    }
}

var speakSomething = function(what) {
    what = what || "Speaking!";

    for (var i = 0; i < 10; i += 1) {
        console.log(what);
    }
};

window.setTimeout(speakSomething, 5000);

var obj = {
    sayHello: function() {
        console.log("Hello, " + arguments[0]);
    }
};

obj.sayHello();

//  JARGON: SCOPE IN JAVASCRIPT
/*
scope = where is that variable?;
- refers to where variable is defined and what parts of our code can access the variable
- differentiate between GLOBAL vs LOCAL
- GLOBAL - accessible anywhere
- LOCAL - accessible in a more limited capacity
- avoid creating GLOBAL variables which is considered HARMFUL
var|let|const keeps variable in local scope
without var|let|const variable is considered GLOBAL
 */

//  VARIABLE SCOPE IN FUNCTIONS

var myNum = 32;
var myResult = "Success!";

function randomizer(limit) {
    var randomNumber = Math.floor(Math.random() * limit);

    var myNum = randomNumber;

    console.log("myNum is", myNum);
    console.log("Global myNum is", window.myNum);

    console.log("Our result is", myResult);

    return myNum;
}

randomizer(10);

function doubleIt(num) {
    var myNum = num * 2;

    return myNum;
}

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions#Function_scope

//  JARGON: CALLBACK FUNCTIONS
/*
- a function that's passed as an argument into another fn and executed in that fn
- can be rewritten as an arrow function
- JS Arrays map method takes a callback that has one specified parameter
- Array .map() used a lot in js frameworks like React
- .forEach() method is good if you are wanting to iterate through entire array
- .forEach() does not return anything, iterates through array passing each value as argument in callback
 */

function doubleIt(number) {
    return (number *= 2);
}

var myNumbers = [1, 2, 3, 4, 5];

var myDoubles = myNumbers.map(doubleIt);

myNumbers.forEach(function(number) {
    console.log("My array contains", number);
});

//  doubleIt function rewritten as an
//  ARROW FUNCTION
/*
doubleIt -> name of function
= number -> parameter(s) / if multiple params '()' are needed
=> -> ARROW followed by what function does
(number *= 2); -> what function returns / notice no '{}' because of simplicity of return
'()' are also optional but makes things a little clearer
if simple then '{}' can be left off, otherwise '{}' are needed
 */
doubleIt = number => (number *= 2);

// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach














































































































































































































































































































































