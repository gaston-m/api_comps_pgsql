const { Pool } = require ('pg');
const { URI } = require('./keys');
const { promisify } = require('util');

const pool = new Pool(URI);

pool.connect()
     .then(client => { 
         
            client.release();
            console.log('PostgreSQL Conectado :vd')
    
        })
     .catch(err => console.log(err))

     module.exports = pool;

