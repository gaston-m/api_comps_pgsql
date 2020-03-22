const pool = require('../database');

ctrl = {};

ctrl.getUsers = async (req, res) => {

    const data = await pool.query('SELECT * FROM users');
   
    if (data.rows.length > 0) {
        res.status(200).json(data.rows);
    } else { 
        res.status(404).json({ message: 'User Not Found'})
    }    
}

ctrl.getUser = async (req, res) => {

    const data = await pool.query('SELECT * FROM users WHERE id = $1', [ req.params.id ]);

    if (data.rows.length > 0) {
        console.log(data);
        res.status(200).json(data.rows[0]);
    } else { 
        res.status(404).json({ message: 'User Not Found'})
    }    

}

ctrl.create = async (req, res) => {

    console.log(req.body);
    const { name, email, password } = req.body;

    const data = await pool.query('INSERT INTO users (name, email, password) values ($1, $2, $3)', [ name, email, password ]);
    
    console.log(data);

    res.json({ message: 'Usuario Creado'});
}


module.exports = ctrl;