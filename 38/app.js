function describe_city(nameofCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofCity, " is in ").concat(country);
}
// 3 cities
var city1 = describe_city("karachi");
var city2 = describe_city("Dadu");
var city3 = describe_city("Hyderabad");
var city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
