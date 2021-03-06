const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

/**************** M I D D L E W A R E ******************/ 
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if(req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else
      next();
  })
}
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/**************** A P I  R O U T E S ******************/ 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/workshops', require('./routes/api/workshops'));
app.use('/api/contact', require('./routes/api/contact'));

/**************** C A T C H  A L L  R O U T E  ******************/ 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});