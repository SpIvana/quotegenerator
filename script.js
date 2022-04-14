// Global variable
let apiQuotes = [];

// Show new quote function
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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