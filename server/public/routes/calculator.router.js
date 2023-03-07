// const express = require('express');
// const calculatorRouter = express.Router();

// let inputsArray =[];
// // let historyList={};

// //GET
// calculatorRouter.get('/', (req, res) => {
//     console.log('GET Request made for /quotes');
//     res.send(inputsArray);
// });

// // POST
// calculatorRouter.post('/', (req, res) => {
//     console.log('POST Request made for /')
//     console.log(req.body);
//     let calculationForServer = req.body;
//     inputsArray.push(calculationForServer);
//     res.sendStatus(201);
// })
// router.get('/inputs',(req,res) => { 
//     console.log('GET Request made for /inputs')
//     res.send(historyList);
// } );
// // ??? POST request save user input
// router.post('/', (req, res) => {
//     console.log('POST Request made for /inputs');
//     // Any data we send from the client is available
//     // as a property of req.body.
//     console.log(req.body);
//     let inputsToAdd = req.body;
//     //! inputsList
//     //quotesList.push(quoteToAdd);
//     historyList.push(inputsToAdd);
//     res.sendStatus(201);
// });

// // ??? DELETE request to remove information
// // router.delete
// router.delete('/:id', (req, res) => {
//     //app.delete('/:id', (req, res) => {
//         console.log(req.params.id); // Similar to req.body
//         const deleteIndex = Number(req.params.id);
//         historyList = historyList.filter((inputs, index) => index !== deleteIndex);
//         res.sendStatus(200); // Success!
//     });
//     module.exports = calculatorRouter;
