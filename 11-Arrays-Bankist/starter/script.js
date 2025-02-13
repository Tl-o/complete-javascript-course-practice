'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Current User Data
let currAccount,
  currBalance,
  sort = false;

const displayMovements = function (acc, srt = false) {
  containerMovements.innerHTML = ''; // Clear HTML.
  const move = srt
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  move.forEach(function (move, i) {
    const status = move > 0 ? 'deposit' : 'withdrawal';
    const movementHTML = `
    <div class="movements__row">
      <div class="movements__type movements__type--${status}">${
      i + 1
    } ${status}</div>
      <div class="movements__value">${move}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movementHTML);
  });
};

const computerUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value.charAt(0))
      .join('');
  });
};

const computeBalance = function (acc) {
  currBalance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${currBalance}€`;
};

const computeSummary = function (acc) {
  const moves = acc.movements;
  const sumIn = moves
    .filter(pos => pos > 0)
    .reduce((total, curr) => (total += curr));
  labelSumIn.textContent = `${sumIn}€`;

  const sumOut = moves
    .filter(neg => neg < 0)
    .reduce((total, curr) => (total += curr));
  labelSumOut.textContent = `${Math.abs(sumOut)}€`;

  const interest = moves
    .filter(pos => pos > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((total, curr) => (total += curr));
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function () {
  computeBalance(currAccount);
  computeSummary(currAccount);
  displayMovements(currAccount);
};

computerUsernames(accounts);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (!(currAccount?.pin === Number(inputLoginPin.value))) return;

  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
  inputLoginUsername.blur();
  labelWelcome.textContent = `Welcome, ${currAccount.owner}!`;
  containerApp.style.opacity = 1;
  updateUI();
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  // Check if account exists, and if balance is there.
  let transferTo = accounts.find(acc => acc.username === inputTransferTo.value);
  let amount = Number(inputTransferAmount.value);
  if (!(transferTo && transferTo !== currAccount && currBalance >= amount))
    return;

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferTo.blur();
  inputTransferAmount.blur();
  currAccount.movements.push(-amount);
  transferTo.movements.push(amount);

  updateUI();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // Check if loan amount is bigger
  const loanAmount = Number(inputLoanAmount.value);
  const approved = currAccount.movements.some(
    movement => movement >= loanAmount * 0.1
  );
  if (!approved || !(loanAmount > 0)) return;

  inputLoanAmount.value = 0;
  inputLoanAmount.blur;
  currAccount.movements.push(loanAmount);
  updateUI();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    // If credentials are wrong, return.
    !(
      currAccount.username === inputCloseUsername.value &&
      currAccount.pin === Number(inputClosePin.value)
    )
  )
    return;

  // Delete user.
  inputClosePin.value = inputCloseUsername.value = '';
  accounts.splice(
    accounts.findIndex(acc => acc.username === currAccount.username),
    1
  );

  // Hide UI & change login message.
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  sort = !sort;
  console.log(sort);
  displayMovements(currAccount, sort);
});

labelBalance.addEventListener('click', function () {
  const movementsArr = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.slice(0, -1))
  );
  console.log(movementsArr);
});

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const strArray = title.toLowerCase().split(' ');
  const result = strArray
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return result;
};

convertTitleCase('this is a LONG title but not too long');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

currencies.forEach(function (val, key, map) {
  console.log(`${key} currency, stands for ${val}.`);
});
