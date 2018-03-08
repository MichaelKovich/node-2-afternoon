const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./products_controller');
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

app.get('/api/products', controller.getAll);
app.get('/api/product/:id', controller.getOne);
app.put('/api/product/:id', controller.update);
app.post('/api/product', controller.create);
app.delete('/api/product/:id', controller.deleteProduct);

app.listen(process.env.PORT || 3000, () => console.log('Listening!'));
