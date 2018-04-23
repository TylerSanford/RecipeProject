require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const recipesEndpoints = require('./endpoints/recipesEndpoints.js');
const usersEndpoints = require('./endpoints/usersEndpoints.js');
// const actionsEndpoints = require('./endpoints/actionsEndpoints.js');
// const contextsEndpoints = require('./endpoints/contextsEndpoints.js');

// HEROKU ASSIGNS TO PORT; LOCAL USES LOCAL_PORT
const PORT = process.env.PORT || process.env.LOCAL_PORT;
const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/api/recipes', recipesEndpoints);
server.use('/api/users', usersEndpoints);
// server.use('/api/actions', actionsEndpoints);
// server.use('/api/contexts', contextsEndpoints);

// USED FOR PRODUCTION ONLY
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
  // server.use(express.static(path.join('client/build')));

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

server.listen(PORT, () => console.log(`running on port ${PORT}`));
