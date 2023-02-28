const express = require( 'express' );
const app = express();
// const bodyParser = require( 'body-parser' );
const PORT = 5056;
// const Port = process.env.PORT || 5056;
// use bodyParser.urlencoded throughout the app with this:
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('server/public'));
app.listen(PORT, () => {
  console.log(`server running on: ',${ PORT}`);
}); // end spin up server

