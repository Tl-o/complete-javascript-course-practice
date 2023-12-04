// Assignment 1, declaring variables.
const country = "Saudi Arabia", continent = "Asia"; let population = 20.95;
const isIsland = false, language = "Arabic";
console.log(country + " " + continent + " " + population + " " + isIsland + " " + language);


// Assignment 2, console logging.
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population > 33);
const description = `${country} is in ${continent}, ${population} million people live in it and speak ${language}`;
console.log(description);

// Assignment 3, if statements.
if(population > 33) {
    console.log(`${country} has an above average population, specifically ${population - 33} million above average.`)
}
else {
    console.log(`${country} has a below average population, specifically ${33 - population} million below average.`)
}

// Assignment 4, predicting the result of the conversions.
console.log('9' - '4'); // 5;
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 14
console.log('123' < 57) // False
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143