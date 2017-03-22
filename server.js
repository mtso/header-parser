const express = require('express');

const app = express();
const api = express.Router();
const port = process.env.PORT || 3750;

api.route('/').get(headerHandler);
app.use('/api', api);
app.listen(port);
console.log('Listening on ' + port);

exports = module.exports = app;

function headerHandler(req, res) {
  const headers = req.headers;
  res.json({
    ipaddress: req.ip,
    language: headers['accept-language'],
    software: headers['user-agent']
  });
}