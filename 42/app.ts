let magicianNames = ["Ayaz", "Faez", "Aman", "Fahad"];

function show_magicians(greet: string){

    for(let item of magicianNames){
        console.log(greet, item);
    }
};

show_magicians("Hello, How are you Mr.");
show_magicians("Hello, .");    //2nd time calling




