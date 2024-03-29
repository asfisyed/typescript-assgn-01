//array as a parameter

function mySandwiches(...items: string []){
    return`I want Sandwich of ${items}`;
};

let collection1 = mySandwiches("Cheeze", "Subway", "lettuce"); // can add as many you wish

let collection2 = mySandwiches("Swiss", "Turkey");

let collection3 = mySandwiches();  // without arrguement

console.log(collection1);
console.log(collection2);
console.log(collection3);