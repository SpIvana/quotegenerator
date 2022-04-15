const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Global variable
let apiQuotes = [];

//Show Loading
function loading () {
    loader.hidden = false;  //kad je loader aktivan, necemo videti container
    quoteContainer.hidden = true;
}

//Hide loading
function complete () {
    quoteContainer.hidden = false; //bice sakriven loader
    loader.hidden = true;
}

// Show new quote 
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author field is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = "unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
// Set quote, Hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes From API
async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
      const response = await fetch(apiUrl); //response nece biti ucitan, dok ne sakupi neke podatke iz APIa
      apiQuotes = await response.json(); //menjamo vrednost global variable tako sto joj dodajemo quotes

     newQuote();

    } catch (error) {
        //Catch Error Here
    }
}

// Tweet Quote
function tweetQuote () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;  //template string!
    window.open(twitterUrl, '_blank'); //otvara twitter windon u novom tabu
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();