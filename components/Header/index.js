// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header"> ------header
//    <span class="date">SMARCH 28, 2019</span> ------date
//    <h1>Lambda Times</h1> ------headline
//    <span class="temp">98°</span> ------temp
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //creating new elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headline = document.createElement('h1');
    const temp = document.createElement('span');
    //end new elements

    //composing elements
    header.appendChild(date);
    header.appendChild(headline);
    header.appendChild(temp);
    //end composing

    //adding class
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //end class

    //text content
    date.textContent = 'MAY 5, 2020';
    headline.textContent = 'Lambda Times';
    temp.innerHTML = '98&#730';
    //end text content

    return header
}

const headContainer = document.querySelector('.header-container');

headContainer.appendChild(Header());