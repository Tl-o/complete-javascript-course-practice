'use strict';

// Kate & Julia's Dog Challenge
const checkDogs = function (juliaArr, kateArr) {
  // It's bad practice to mutate original function arguments, so create shallow copies.
  // Remove cat owners from array.
  const juliaArrCorrect = juliaArr.slice(1, -2);
  const combArr = [...juliaArrCorrect, ...kateArr];

  combArr.forEach(function (val, i) {
    const str =
      val >= 3
        ? `Dog number ${i + 1} is an adult, and is ${val} years old.`
        : `Dog number ${i + 1} is still a puppy! Take good care of them. 🐶`;
    console.log(str);
  });
};

const juliaData = [3, 5, 2, 12, 7];
const kateData = new Array(4, 1, 15, 8, 3);

checkDogs(juliaData, kateData);

// Kate & Julia's Dog Challenge, 2
const calcAvg = function (dogAges) {
  // Conver to human ages.
  const humanAges = dogAges
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(value => value >= 18);
  console.log(humanAges);

  // Calc avg.
  const avg = humanAges.reduce(function (total, value, i, arr) {
    total += value;
    if (i === arr.length - 1) return total / arr.length;
    return total;
  });
  console.log(avg);
};

calcAvg([5, 2, 4, 1, 15, 8, 3]);

// Kate & Julia's dog challenge, 3
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
const calculateFood = function (dogs) {
  dogs.forEach(
    curr => (curr.recommendedFood = Math.trunc(curr.weight ** 0.75 * 28))
  );
};

const dogFoodAmount = function (dog) {
  const recommended =
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9;

  return recommended;
};

const determineDogStatus = function (dog) {
  const status = dogFoodAmount(dog)
    ? 'Acceptable'
    : dog.curFood > dog.recommendedFood
    ? 'Too much'
    : 'Too little';

  return status;
};

const findDogOwner = function (dogs, owner) {
  return dogs.find(dog => dog.owners.includes(owner));
};

const groupOwners = function (dogs, condition) {
  return dogs
    .filter(curr => determineDogStatus(curr) === condition)
    .flatMap(dogs => dogs.owners);
};

calculateFood(dogs);
console.log(dogs);
console.log(determineDogStatus(findDogOwner(dogs, 'Michael')));

const ownersEatTooLittle = groupOwners(dogs, 'Too little');
const ownersEatTooMuch = groupOwners(dogs, 'Too much');
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(curr => curr.curFood === curr.recommendedFood));
console.log(dogs.some(curr => determineDogStatus(curr) === 'Acceptable'));
const ownersEatOkay = dogs.filter(
  dog => determineDogStatus(dog) === 'Acceptable'
);
const ascendingOrder = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(ownersEatOkay);
console.log(ascendingOrder);
