const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const dishRouter = require('./routes/dishRouter');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes', dishRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});