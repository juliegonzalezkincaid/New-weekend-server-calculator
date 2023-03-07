
console.log("working");

// history of past calculations


let total = 0;
let firstNumberIn='';
let secondNumberIn = '';
let operator= ''
let symbolValue=" ";
let history = [];




function symbol(event){
console.log(event.target.value)
operator= event.target.value
};





function getInputs(){
    axios.get('/inputs').then((response) => {
        console.log(response);
        let serverCalulations =response.data;
        let inputsDiv = document.querySelector('#view');
            inputsDiv.innerHTML= '';
        for (let inputs of serverCalulations) {
            inputsDiv.innerHTML += `
            <p>${inputs.firstNumberIn}
               ${symbol.operator}
               ${inputs.secondNumberIn} =
               ${inputs.equals}
             </p>  
            `;
            
        }
        getView();
}).catch((error) => {
    console.log(error);
    alert('Something went wrong.');
});
    
};



function getView () {
    axios.get('/view').then((response) => {
        let viewForServer = response.data.result;
        let view= document.querySelector('#view');
        view.innerHTML = viewForServer;
    }).catch((error) => {
    console.log(error);
    alert('Something went wrong.')
})

};

function calculate(event) {
    // event.preventDefault();
    let firstNumberIn= Number(document.querySelector('#First Number').value);
    let secondNumberIn = Number(document.querySelector('#Second Number').value);
        console.log(firstNumberIn, secondNumberIn);
    // let operator= document.getElementById('symbol').value

        let calculationForServer = {
            firstNumber : firstNumberIn,
            symbol : operator,
            secondNumber : secondNumberIn,
 };
console.log(calculationForServer);

axios.post('/inputs', calculationForServer).then((response) => {
    console.log(response);
    // calculate();
    getInputs();
    // showInputs();
 }).catch((error) => {
    console.log(error);
    alert('Something went wrong.');
});
// event.target.reset('/inputs');
}
// function clearAll(event) {
//     console.log(event.target.value);
//     operator = event.target.value;
// }

//  function getAnswer(event) {
//  getAnswer()

// function button
// object for server 
// let buttons = document.querySelector('#button').class;
//     console.log(buttons)
// getInputs();
// function history(){
//     console.log( 'in history' );
    // axios call to server to get koalas
   
//   }
  

//  let inputs = document.querySelector('#input');
// inputs.innerHTML ='';   
// function clearAll(event) {
// let clearButtonVal = document.querySelector('#clearButton').value= '';
//     console.log(clearButtonVal);
//     clearButtonVal.innerHTML = `
//     <button onClick="clearAll(event)" id="clearButton" type="button">C</button>
//             `;}
// 
// let additionVal = document.querySelector('#addition').value;
 // console.log(additionVal);
 // function getJokes() {
//     axios.get('/outputDiv').then((response) => {
//         console.log(response);
//         let outpFromServer = response.data;
//         let outputDiv = document.querySelector('#outputDiv');
//             outputDiv.innerHTML = '';
//         for (let joke of jokesFromServer) {
//             outputDiv.innerHTML += `
               
//             `;
//         }
//     });



// function submitForm(event){
//     console.log('submitForm');
// let symbol = '';
// function additionval(event) {
// 	operation = "+";
// }
// function subtractButton(event) {
// 	operation = "-";
// }
// function divideButton(event) {
// 	operation = "/";
// }
// function multiplyButton(event) {
// 	operation = "*";
// } 
