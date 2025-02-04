const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

// Function to fetch a random quote from an API
async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.log("Error fetching quote", error);
        quoteText.textContent = "Oops! Something went wrong.";
        quoteAuthor.textContent = "";
    }
}

// Tweet the current quote
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${quoteAuthor.textContent}`;
    window.open(tweetUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", fetchQuote);
tweetBtn.addEventListener("click", tweetQuote);

// Fetch a quote on page load
/*
const apiUrl = "https://api.adviceslip.com/advice"; // Alternative API

async function fetchQuote() {
    try {
        console.log("Fetching new quote...");
        const response = await fetch(apiUrl);
        const data = await response.json();

        // This API returns advice instead of quotes
        quoteText.textContent = `"${data.slip.advice}"`;
        quoteAuthor.textContent = `- Unknown`; // This API does not provide authors
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.textContent = "Oops! Something went wrong.";
        quoteAuthor.textContent = "";
    }
}

*/



const apiUrl = "https://dummyjson.com/quotes/random"; // This API includes authors

async function fetchQuote() {
    try {
        console.log("Fetching new quote...");
        const response = await fetch(apiUrl);
        const data = await response.json();

        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.textContent = "Oops! Something went wrong.";
        quoteAuthor.textContent = "";
    }
}
