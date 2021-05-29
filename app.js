const quote = document.getElementById('quote');
const author = document.getElementById('author');
const url = 'https://api.quotable.io/random';
const generateQuote = document.getElementById('generate-quote');
generateQuote.addEventListener('click',()=>{
  fetch(url)
  .then(quote => quote.json())
  .then(data => {
      console.log(data);
      quote.innerText = `"${data.content}"`;
      author.innerText = '- ' + data.author;
  })
  .catch(error => alert(error));  
})
