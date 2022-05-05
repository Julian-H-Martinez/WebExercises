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