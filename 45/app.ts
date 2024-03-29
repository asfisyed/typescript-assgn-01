function carDetails (manufacturer: string, modelName: string, ... additionInfo){

    const car = {manufacturer, modelName, ...Object.fromEntries(additionInfo)};
    return car;
};

const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'],
['year', 2023]);

console.log(myCarDetails);







