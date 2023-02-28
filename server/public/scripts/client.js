
console.log("working");


let calculation = [];
let total = 0;
let firstNumber =0

function submitTable(event){
    console.log('submitTable');
    event.preventDefault();
};

let firstNumberVal = document.querySelector('#First Number').value;
console.log(firstNumberVal);

let secondNumberVal = document.querySelector('#Second Number').value;
console.log(secondNumberVal);

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