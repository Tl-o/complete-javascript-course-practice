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
