function describe_city(nameofCity: string, country: string = "Pakistan"){
    return `${nameofCity} is in ${country}`;
}

// 3 cities

let city1 = describe_city("karachi");
let city2 = describe_city("Dadu");
let city3 = describe_city("Hyderabad");
let city4 = describe_city("Dubai", "UAE");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
