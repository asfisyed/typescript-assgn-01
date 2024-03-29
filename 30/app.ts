// Creating an Array
let userNames = ["Junaid", "Fahad", "Owais", "Taha", "Shazoab"];

// Using ForEach Loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would u like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})







