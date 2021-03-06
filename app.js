const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();
      
var mongoose = require('mongoose');
mongoose.connection.openUri('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
