/*******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
*******************************************/

// `quotes` array
var quotes = [
    {
        quote: 'What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.',
        source: 'Pericles',
    },
    {
        quote: 'The best way to predict the future is to invent it',
        source: 'Alan Kay',
        citation: 'Twitter',
    },
    {
        quote: 'Life is pure adventure, and the sooner we realize that, the quicker we will be able to treat life as art.',
        source: 'Maya Angelou',
        citation: 'Wouldn\'t Take Nothing from My Journey Now',
        year: '1993',
        tags: ['life', 'inspirational', 'women', 'female empowerment' ],
    },
    {
        quote: 'Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring',
        source: 'Marilyn Monroe',
        year: '1960',
    },
    {
        quote: 'When something is important enough, you do it even if the odds are not in your favor. If you get up in the morning and think the future is going to be better, it is a bright day',
        source: 'Elon Musk',
    },
];

// `getRandomQuote` function
function getRandomQuote() {
    /* define var that stores random number between 0 and 4, because this is the last index of the array */
    var randomNum = Math.floor(Math.random()*(quotes.length));
    return quotes[randomNum];
}

var rgbColor;

// create function that picks a random rgb number
function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

// create a new var color that produces the aboe rgb function 3 times to create a color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

// `printQuote` function
function printQuote() {
    var randomQuoteObj = getRandomQuote(); /* create object that calls getRandomQuote() function, so it can access properties of objects in quotes array */
    
    // use the var rgbColor (defined earlier) and assign it to the output of randomColor()
    rgbColor = randomColor();
    
    // changes background to random color with each new quote
    document.body.style.backgroundColor = rgbColor;
    
    // add all quotes to htmlString
    var htmlString = '<p class="quote">' + randomQuoteObj.quote + '</p>'; 
    
    // then add all sources to htmlString
    htmlString += '<p class="source">' + randomQuoteObj.source; 
    if (randomQuoteObj.citation != null) {
        htmlString += '<span class="citation">' + randomQuoteObj.citation + '</span>';
    }
    if (randomQuoteObj.year != null) {
        htmlString += '<span class="year">' + randomQuoteObj.year + '</span>';
    }
    
    // adding condition for new property "tags"
    if (randomQuoteObj.tags != null) {
        htmlString += '<br><span class="tags"> (related topics: ' + randomQuoteObj.tags.join(', ') + ')</span>';
    }
    // add the paragraph closing tag
    htmlString += "</p>";
    
    // print htmlString to the html div
    return document.getElementById('quote-box').innerHTML = htmlString; 
}

setInterval(printQuote, 9000);

// click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);