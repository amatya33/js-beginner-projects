const quotes = [{
        name: 'Person A',
        quote: 'Be Happy.'
    },
    {
        name: 'Person B',
        quote: 'Be Generous.'
    },
    {
        name: 'Person C',
        quote: 'Be Kind.'
    },
    {
        name: 'Person D',
        quote: 'Be Happy.'
    },
    {
        name: 'Person E',
        quote: 'Be Silly.'
    },
    {
        name: 'Person F',
        quote: 'Be Stupid.'
    },
    {
        name: 'Person G',
        quote: 'Be Strong.'
    },
    {
        name: 'Person H',
        quote: 'Be You.'
    }
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    const number = Math.floor(Math.random() * quotes.length);
    // console.log(number);
    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
    // console.log(quotes[number]);


}
// const simpleQuotes = [{
//     name:'author number 1',
//     quote: 'Hey lo'
// }];