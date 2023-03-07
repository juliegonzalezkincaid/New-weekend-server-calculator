const express = require( 'express' );
const app = express();
// const bodyParser = require( 'body-parser' );
const PORT = 5056;
// const calculatorRouter = require('.routes/calculator.router')
// const quoteRouter = require('./routes/inputs.router.js');
// const Port = process.env.PORT || 5056;
// use bodyParser.urlencoded throughout the app with this:
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('server/public'));
app.listen(PORT, () => {
  console.log(`server running on: ',${ PORT}`);
}); // end spin up server
// app.use('/inputs',inputsRouter);

// app.use('/inputs', calculatorRouter);
// let inputsArray =[];
let inputsArray= [];
let answer =0;


app.get('/inputs',(req, res) =>{
      console.log('GET Request made for /inputs');
      res.send(inputsArray);
  });



app.get('/view', (req,res) => {
  console.log('GET Request made for /view');
  console.log(req.body);
  res.send({view});
});

app.post('/inputs', (req, res) => {
  console.log('POST Request made for /inputs');
  console.log(req.body);
  let inputNew= req.body;
  let firstNum = Number(inputNew.firstNumberIn);
  let secNum = Number(inputNew.secondNumberIn)  
  let symbol = inputNew.operator

  const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
      result = n1 + n2
    } else if (operator === 'subtract') {
      result = n1 - n2
    } else if (operator === 'multiply') {
      result = n1 * n2
    } else if (operator === 'divide') {
      result = n1 / n2
    }
    
    return result
  }
  inputs.push(inputs);
  res.sendStatus(201);//Sucess!!
});
//   function get calculation() {
//     axios.get('/calculation').then((response) => {
//         console.log(response);
//         let calculationFromServer = response.data;
//         let outputDiv = document.querySelector('#outputDiv');
//             outputDiv.innerHTML = '';
//         for (let joke of calculationFromServer) {
//             outputDiv.innerHTML += `
//                 <p>
//                     <td> Whose Joke: ${joke.whoseJoke}</td>
//                     <td> Question :${joke.jokeQuestion}</td>
//                     <td> Punchline:${joke.punchLine}</td>
//                 </p>    
//             `;
//         }
//     }).catch((error) => {
//         console.log(error);
//         alert('Something went wrong.');
//     });
// }

  //Any data we send from the client is available
 //as a property of req.body.
  


