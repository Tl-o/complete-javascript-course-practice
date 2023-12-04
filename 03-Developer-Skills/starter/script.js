// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const thermometer = {
  temperatures,
  calcAmp: function () {
    if (this.amplitude) return amplitude;

    let lowest = 0,
      highest = 0;
    for (let i = 0; i < this.temperatures.length; i++) {
      if (typeof this.temperatures[i] === "string") continue;

      if (this.temperatures[i] > highest) highest = this.temperatures[i];
      if (this.temperatures[i] < lowest) lowest = this.temperatures[i];
    }

    this.highest = highest;
    this.lowest = lowest;
    this.amplitude = highest - lowest;
    return this.amplitude;
  },
};

console.log(`According to our smart thermometer system, the amplitude is ${thermometer.calcAmp()}.
The lowest recorded temperature of the day was ${
  thermometer.lowest
} and the highest was ${thermometer.highest}`);

// Assignment 2
function calcTemp(arr) {
  let prediction = "";
  for (let i = 0; i < arr.length; i++) {
    prediction += `... ${arr[i]}° in ${i + 1} days `;
  }

  return prediction;
}

console.log(calcTemp([12, 5, -5, 0, 4]));
