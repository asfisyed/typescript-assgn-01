let guestlist = ["Sualiha", "ADULLAH", "Quratulain", "Moiz"];

let dontCome = guestlist[3];

console.log(dontCome, "Nai asakta");

guestlist.splice(3, 3, "Arshad");

guestlist.forEach(guest => console.log(`Salaam ${guest}, would you like to dinner with me?`));