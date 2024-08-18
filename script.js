// Step 1: Create an array of motivational quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "The only way to do great work is to love what you do.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "You are never too old to set another goal or to dream a new dream.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it."
];

// Step 2: Generate a random index to pick a quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Step 3: Output the random quote
console.log(getRandomQuote());
