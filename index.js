const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express(); // Instantiates Express
app.use(bodyParser.json()); // Parses POSTed information
app.use(cors()); // Basic security package

// Invoke Massive and pass in the CONNECTION_STRING set in process.env
massive(process.env.CONNECTION_STRING)
  .then((dbInstance) => {
    // Massive returns a dbInstance using the CONNECTION_STRING
    app.set('db', dbInstance); // Set db on the app object equal to the database instance
  })
  .catch(err => console.log(err));

app.listen(process.env.PORT || 3001, () => console.log('Listening!'));
