
console.log("working");

// history of past calculations
let history = [];
let total = 0;
let firstNumber =0

function submitTable(event){
    console.log('submitTable');
    event.preventDefault();
   
};

function symbol (event){
console.log(event.target.value)

// }
//  // object for server 
//     let calculation = {
//         firstNumber : addFirstNumber,
//         symbol : addSymbol,
//         secondNumber :addSecondNumber
//         // firstNumber,symbol,secondNumber 

 }



// let firstNumberVal = document.querySelector('#First Number').value += ''
// console.log(firstNumberVal);

// let secondNumberVal = document.querySelector('#Second Number').value;
// console.log(secondNumberVal);

// let clearButtonVal = document.querySelector('#clearButton').value;
// console.log(clearButtonVal);

// let additionVal = document.querySelector('#addition').value;
// console.log(additionVal);
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
    //         let resetButton = document.querySelector('#reset')
    //         resetButton.innerHTML = `
    //         <button onClick= "nextRound()">Reset 1 - 25</button>
    //         `;