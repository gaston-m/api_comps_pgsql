const express = require('express');
const morgan = require('morgan');

// INICIALIZACIONES

const app = express();
require('./database');

// SETTINGS

app.set('port', process.env.PORT || 4000);


//  MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES

app.use('/users', require('./routes/users.route'));
app.use('/comps', require('./routes/comps.route'));



/// INICIALIZANDO EL SERVIDOR

app.listen(app.get('port'), () => {

    console.log('Express Server on Port', app.get('port'))
});