const quotes = [
  "The best way to get started is to quit talking and begin doing.Walt Disney",
  "Don't let yesterday take up too much of today. Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. Vince Lombardi",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.  Winston Churchill",
  "Dream big and dare to fail. Norman Vaughan",
  "Do what you can with all you have, wherever you are.  Theodore Roosevelt"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
