
console.log("working");


let calculation = [];
let total = 0;

function submitForm(event){
    console.log('submitForm');
    event.preventDefault();
};

// function getJokes() {
//     axios.get('/jokes').then((response) => {
//         console.log(response);
//         let jokesFromServer = response.data;
//         let outputDiv = document.querySelector('#outputDiv');
//             outputDiv.innerHTML = '';
//         for (let joke of jokesFromServer) {
//             outputDiv.innerHTML += `
//                 <p>
//                     <td> Whose Joke: ${joke.whoseJoke}</td>
//                     <td> Question :${joke.jokeQuestion}</td>
//                     <td> Punchline:${joke.punchLine}</td>
//                 </p>    
//             `;
//         }
//     };