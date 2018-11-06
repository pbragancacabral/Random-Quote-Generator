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

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const printQuote = () => {
    const quote = getRandomQuote();
    document.getElementById('quote-box').innerHTML = ` 
        <p class='quote'>${quote.quote}</p>
        <p class='source'>${quote.source}</p>
    `;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);