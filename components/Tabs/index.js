// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

function tabs (){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        const tabs = response.data.topics
        tabs.forEach(element => {
            const topic = document.createElement('div')
            topic.classList.add('tab')
            topic.textContent = element
            topics.appendChild(topic)
        })
        return tabs
    })
    .catch(error =>{
        console.log('this is the error:', error)
    })
};

tabs()