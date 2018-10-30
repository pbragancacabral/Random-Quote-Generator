document.getElementById('loadQuote').addEventListener("click", printQuote, false);

const quotes = [
    {
        quote: "What comes, when it comes, will be what it is.",
        source: "Alberto Caeiro"
    },
    {
        quote: "I wasn’t meant for reality, but life came and found me.",
        source: "Fernando Pessoa"
    },
    {
        quote: "Words that come from the heart are never spoken, they get caught in the throat and can only be read in ones's eyes",
        source: "José Saramago"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function printQuote() {
    let html = "";
    const quote = getRandomQuote();
    html += "<p class='quote'>" + quote.quote + "</p>";
    html += "<p class='source'>" + quote.source + "</p>";
    document.getElementById('quote-box').innerHTML = html;
}