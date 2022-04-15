const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Global variable
let apiQuotes = [];

// Show new quote function
function newQuote() {
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

    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
      const response = await fetch(apiUrl); //response nece biti ucitan, dok ne sakupi neke podatke iz APIa
      apiQuotes = await response.json(); //menjamo vrednost global variable tako sto joj dodajemo quotes

     newQuote();

    } catch (error) {
        //Catch Error Here
    }
}

// On Load
getQuotes();