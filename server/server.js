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
let inputs= [];
let history = [];

app.get('/inputs',(req, res) =>{
      console.log('GET Request made for /inputs');
      res.send(inputs);
  });



app.get('/viewCalculation', (req,res) => {
  console.log('POST Request made for /inputs');
  console.log(req.body);
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
app.post('/inputs', (req, res) => {
  console.log('POST Request made for /inputs');
  //Any data we send from the client is available
 //as a property of req.body.
  console.log(req.body);
  let inputsArray= req.body;
  inputs.push(inputs);
  res.sendStatus(201);//Sucess!!
});


