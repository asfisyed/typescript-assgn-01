// Creating an Array
var userNames = ["Junaid", "Fahad", "Owais", "Taha", "Shazoab"];
// Using ForEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would u like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
