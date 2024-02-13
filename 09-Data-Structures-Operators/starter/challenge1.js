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

const [player1, player2] = game.players; // Split players, destructuring.
const [gk, ...playerField] = player1; // To round up the remaining or 'rest', I used the rest parameter.
const allPlayers = [...player1, ...player2]; // To round up all players, I used spread operator.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...playerNames) {
  for (let i = 0; i < playerNames.length; i++)
    console.log(`${playerNames[i]} has scored a goal.`);
  console.log(`The total number of goals is ${playerNames.length}`);
};
