const express = require('express');

const app = express();
const api = express.Router();
const port = process.env.PORT || 3750;

const SOFTWARE_PATTERN = /\(.*;[^\/]*\)/;

api.route('/whoami')
   .get(headerHandler);

app.use('/api', api);

app.listen(port);
console.log('Listening on ' + port);

exports = module.exports = app;

function headerHandler(req, res) {
  const headers = req.headers;
  const agent = headers['user-agent'].match(SOFTWARE_PATTERN)[0];
  res.json({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress; // req.ip,
    language: headers['accept-language'],
    software: agent
  });
}
