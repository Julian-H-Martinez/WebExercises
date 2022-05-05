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
console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));








































