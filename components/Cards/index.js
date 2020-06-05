// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card"> ------card
//   <div class="headline">{Headline of article}</div> ------headline
//   <div class="author"> ------author
//     <div class="img-container"> ------imgContain
//       <img src={url of authors image} /> ------img
//     </div>
//     <span>By {author's name}</span> ------byAuthor
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardContain = document.querySelector('.cards-container');

function cardMaker(data){
    //creating elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContain = document.createElement('div');
    const img = document.createElement('img');
    const byAuthor = document.createElement('span');
    //end new elements

    //composing elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContain);
    author.appendChild(byAuthor);
    imgContain.appendChild(img);
    //end composing

    //adding class
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContain.classList.add('img-container');
    //end of class

    //adding content and attributes
    headline.textContent = data.headline;
    byAuthor.textContent = data.authorName;
    img.setAttribute('src', `${data.authorPhoto}`);
    //end of content and attributes

    return card;
}

function getData(){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        const bootstrap = response.data.articles.bootstrap;
        const javascript = response.data.articles.javascript;
        const jquery = response.data.articles.jquery;
        const node = response.data.articles.node;
        const technology = response.data.articles.technology;

        bootstrap.forEach(item => {
            const articleCard = cardMaker(item);
            cardContain.appendChild(articleCard);
        });
        javascript.forEach(item =>{
            const articleCard = cardMaker(item);
            cardContain.appendChild(articleCard);
        });
        jquery.forEach(item =>{
            const articleCard = cardMaker(item);
            cardContain.appendChild(articleCard);
        });
        node.forEach(item =>{
            const articleCard = cardMaker(item);
            cardContain.appendChild(articleCard);
        });
        technology.forEach(item =>{
            const articleCard = cardMaker(item);
            cardContain.appendChild(articleCard);
        });
    })
    .catch(error =>{
        console.log('this is the error: ', error)
    })
}

getData();