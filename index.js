const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const recipesEndpoints = require('./endpoints/recipesEndpoints.js');
const usersEndpoints = require('./endpoints/usersEndpoints.js');
// const actionsEndpoints = require('./endpoints/actionsEndpoints.js');
// const contextsEndpoints = require('./endpoints/contextsEndpoints.js');

const server = express();

server.use(express.static(path.join(__dirname, 'client/build')));

server.use(bodyParser.json());
server.use(cors());

server.use('/api/recipes', recipesEndpoints);
server.use('/api/users', usersEndpoints);
// server.use('/api/actions', actionsEndpoints);
// server.use('/api/contexts', contextsEndpoints);

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`running on port ${port}`));
