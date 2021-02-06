const express = require('express');
const server = express();

const bodyParser = require('body-parser');

async function runServer() {
  await require('./db').connect();

  server.use(bodyParser.json());

  server.use('/api/v1/projects', require('./routes/projects'));

  server.get('/test', (req, res) => {
    res.json({message: 'Hello World'});
  })

  // server.get('*', (req, res) => {
  //   res.json({message: 'Welcome to Portfolio api backend...'});
  // })

  server.get('', (req, res) => {
    res.sendFile('index.html', {root:__dirname});
  })


  const PORT = parseInt(process.env.PORT, 10) || 3002;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log('Server ready on port:', PORT);
  })
}

runServer();