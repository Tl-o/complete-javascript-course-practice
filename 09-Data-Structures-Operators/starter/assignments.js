'use strict';

// Data needed for assignments
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Destructuring
// 1.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// 1.2
// const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRating, threeStarRating = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRating, threeStarRating);

// Destructure Objects
// 2.1
// const [firstBook] = books;

// const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);

// 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// 2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// 2.4
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   return sum;
// };

// console.log(add());
// console.log(add(2, 5, 9));
// console.log(add(12, 35, 91, 294, 851, 8391, 9291, 291));

// Rest Parameter
// 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// 4.2
// const { publisher: bookPublisher, ...restOfBook } = books[1];
// console.log(bookPublisher, restOfBook);

// 4.3
// const printBookAuthorsCount = function (title, ...authors) {
//   let bookInfo = `The book "${title}" has ${authors.length} authors, `;
//   for (let i = 0; i < authors.length; i++)
//     bookInfo +=
//       i == authors.length - 1 ? 'and ' + authors[i] + '.' : authors[i] + ', ';
//   console.log(bookInfo);
// };

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short Circuiting
// 5.1
// const hasExamplesInJava = function (book) {
//   return console.log(
//     book.programmingLanguage === 'Java' || 'No Data Available!'
//   );
// };

// hasExamplesInJava(books[0]);

// 5.2
// const detectOnlineContent = function (books) {
//   for (let i = 0; i < books.length; i++)
//     books[i].onlineContent &&
//       console.log(`${books[i].title} provides online content.`);
// };

// detectOnlineContent(books);

// Logical Operators
// 7.1
// for (let i = 0; i < books.length; i++) books[i].edition ||= 1;

// 7.2
// for (let i = 0; i < books.length; i++)
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// console.log(books);

// For-of loop
// 8.1
// let sum = 0;
// for (const { pages } of books) {
//   sum += pages;
// }
// console.log(sum);

// 8.2
// const allAuthors = [];
// for (const { author } of books) {
//   typeof author === 'object' && allAuthors.push(...author);
//   typeof author === 'string' && allAuthors.push(author);
// }

console.log(allAuthors);

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// const newBook = {
//   [bookData[0][0]]: [bookData[0][1]],
//   [bookData[1][0]]: [bookData[1][1]],
//   [bookData[2][0]]: [bookData[2][1]],
// };

console.log(newBook);

10.1;
function getFirstKeyword(book) {
  console.log(book.keywords?.[0]);
}

getFirstKeyword(books[7]);
getFirstKeyword(books[6]);
getFirstKeyword(books[5]);
getFirstKeyword(books[4]);
getFirstKeyword(books[3]);
getFirstKeyword(books[2]);
getFirstKeyword(books[1]);
getFirstKeyword(books[0]);

// 11.1
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads))
  entries.push([key]);

// // 11.2

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

const entries2 = Object.entries(books[0].thirdParty.goodreads);

// Maps: Fundamentals

const newBook = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

newBook.set('pages', 464);
console.log(`${newBook.get('title')} by ${newBook.get('author')}`);

// Maps : Iteration
const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

for (const [key, value] of firstBookMap)
  typeof value === 'number' && console.log(key);

// Bonus Assignment, Strings
const hideCard = function (card) {
  const str = card.slice(-4).padStart(16, '*');
  console.log(str);
};

hideCard('1565827395381923');
