const quote = document.querySelector(".quote");
const authr = document.getElementById("au");

const api = 'https://official-joke-api.appspot.com/random_joke';

function newQuote() {
  authr.classList.remove("fade-in-text");
  quote.classList.remove("fade-in-text");
  fetch(api)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      quote.innerHTML = data.setup;
      authr.innerHTML = data.punchline;
      authr.classList.add("fade-in-text");
      quote.classList.add("fade-in-text");
    })
    .catch(error => console.log(error.message));
}

newQuote();

