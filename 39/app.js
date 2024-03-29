function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Jeddah", "Saudia Arabia"));
console.log(city_country("Texas", "USA"));
