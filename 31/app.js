var userNames = ["Junaid", "Fahad", "Owais", "Admin", "Taha"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array is Empty we need to find some users!");
}
else {
    //using forEach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would u like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
