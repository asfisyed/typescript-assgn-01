//Creating a Guest list Array
let guestlist = ["Sualiha", "Abdullah", "Quratulain", "Moiz"];

// Making Variable for those guest who cant come



let dontCome = guestlist[3];

//print the name of guest who cant come
console.log(dontCome, "Nai Asaktay Ha");

//Add or Remove Values for Guest List Array
guestlist.splice(3, 3, "Moiz");

//Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");

//Adding a new guest at starting index of array
guestlist.unshift("Asfia");

//Adding a new guest at ending index of array
guestlist.push("Aliya");

// Get a middle index of our guestlist array
let middleindex: number = Math.floor(guestlist.length/ 2);

//Adding a new guest of middle index of array
guestlist.splice(middleindex, 0, "John");

// print Message of updated list
console.log("updated list of our Guests");

// sending an invitation message to our guests one by one with their names
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));