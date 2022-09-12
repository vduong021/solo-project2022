const express = require('express');
const path = require('path');
const api = require('./routes/api');

const PORT = 3010;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    message: { err: 'An error occurred' },
    log: 'Express error handler caught unknown middleware error',
    status: 400,
  };
  const errObj = Object.assign(defaultErr, err);
  console.log('ErrorObject Log: ', errObj.log);
  res.status(errObj.status).send(errObj.message);
});

// Fire it up
app.listen(PORT, () => {
  console.log(`Express Node server listening on ${PORT}`);
});