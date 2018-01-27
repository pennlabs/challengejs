const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/api', routes);

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on Port 8080!');
  }
});