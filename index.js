let quotes = [
    {
      quote:
        "You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.",
      author: "Nicholas Sparks"
    },
    {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll"
    },
    {
      quote: "Be the change that you wish to see in the world",
      author: "Mahatma Gandhi"
    },
    {
      quote:
        "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde"
    },
    {
      quote:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi"
    },
    {
      quote:
        "It is better to be hated for what you are than to be loved for what you are not.",
      author: "Andre Gide"
    }
  ];
window.onload = init();
function init(){
    chooseQuote();
}

function chooseQuote(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("text").innerText = quotes[randomNumber].quote;
    document.getElementById("author").innerText = quotes[randomNumber].author;
};