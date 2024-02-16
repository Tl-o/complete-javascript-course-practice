const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [player1, player2] = game.players; // Split players, destructuring.
// const [gk, ...playerField] = player1; // To round up the remaining or 'rest', I used the rest parameter.
// const allPlayers = [...player1, ...player2]; // To round up all players, I used spread operator.
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team1, x: draw, team2 } = game.odds;

// const printGoals = function (...playerNames) {
//   for (let i = 0; i < playerNames.length; i++)
//     console.log(`${playerNames[i]} has scored a goal.`);
//   console.log(`The total number of goals is ${playerNames.length}`);
// };

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: By ${player}.`);
// }

// let avgOdd = 0;
// for (const odd of Object.values(game.odds)) avgOdd += odd;
// console.log(avgOdd / Object.values(game.odds).length);

// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${key === 'x' ? 'draw' : `victory for ${game[key]}`}: ${value}`
//   );
// }

// const scorers = {};
// for (const scorer of game.scored) {
//   scorers[scorer] &&= scorers[scorer] += 1;
//   scorers[scorer] ||= 1;
// }
// console.log(scorers);
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = new Set();
// for (const [, event] of gameEvents) events.add(event);

// console.log(events);
// gameEvents.delete(64);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );

// for (const [key, event] of gameEvents) {
//   const str = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${str} ${key} : ${event}`);
// }

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const camelCaseConversion = function (varNames) {
//   const stringArray = varNames.toLowerCase().split('\n');
//   for (const [index, str] of stringArray.entries()) {
//     const _Index = str.indexOf('_');
//     const firstHalf = str.slice(0, _Index);
//     const secondHalf = str.slice(_Index - str.length + 1).replace();
//     const fullStr =
//       firstHalf +
//       secondHalf.replace(secondHalf[0], secondHalf[0].toUpperCase());
//     console.log(fullStr.padEnd(20, ' ') + `${'✅'.repeat(index + 1)}`);
//   }
// };

// document.querySelector('button').addEventListener('click', () => {
//   camelCaseConversion(document.querySelector('textarea').value);
// });

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const splitFlights = flights.replace(/_/g, ' ').split('+');
for (const info of splitFlights) {
  const [status, from, to, time] = info.split(';');
  const isDelayed = status.startsWith(' Del') ? '🔴' : '';
  const str = `${isDelayed} + ${status} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ':',
    'h'
  )})`;
  console.log(str.padStart(50));
}
