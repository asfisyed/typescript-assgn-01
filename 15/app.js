var guestlist = ["Sualiha", "ADULLAH", "Quratulain", "Moiz"];
var dontCome = guestlist[3];
console.log(dontCome, "Nai asakta");
guestlist.splice(3, 3, "Arshad");
guestlist.forEach(function (guest) { return console.log("Salaam ".concat(guest, ", would you like to dinner with me?")); });
