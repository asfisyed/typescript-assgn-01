// function myAlbum(artistName: string, albumTitle: string){
// return {artistName, albumTitle}
// }

// let album1 = myAlbum("Aliya", "Rangde");
// let album2 = myAlbum("Arisha", "Rangoli");
// let album3 = myAlbum("Meer", "Mausam");

// console.log(album1);
// console.log(album2);
// console.log(album3);


// Number of tracks
function myAlbum2(artistName: string, albumTitle: string, 
numberOfTracks?: number){
    return {artistName, albumTitle, numberOfTracks}
}

let album1 = myAlbum2("Aliya", "Rangde", 30);
let album2 = myAlbum2("Arisha", "Rangoli", 55);
let album3 = myAlbum2("Meer", "Mausam");

console.log(album1);
console.log(album2);
console.log(album3);

