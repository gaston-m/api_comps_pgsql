const pool = require('../database');

ctrl = {};

ctrl.getComps = async (req, res) => {

    const data = await pool.query('SELECT * FROM  comps');

    if (data.rows.length > 0){
        res.json(data.rows);

    } else {
        res.json({message: 'No hay Comprobantes Creados'});
    }
}
    

ctrl.getCompsUser = async (req, res) => {

    const data = await pool.query('SELECT * FROM comps WHERE userid = $1', [ req.params.userid ]);

    if (data.rows.length < 1) {
        res.status(200).json({ message: 'El usuario no tiene Companys'})
    } else {
        res.status(200).json(data.rows);
    }
}
 
ctrl.getComp = async (req, res) => {
   
   const id =  req.params.id;

    var data = await pool.query('SELECT * FROM comps WHERE id = $1', [id]);
    
    console.log(data);

    if (data.rows.length > 0) {
        res.json(data.rows);
    } else {
        res.status(203).json({ message: 'El Comprobante No Existe' });
    }

}


ctrl.create = async (req, res) => {

    console.log(req.body);
    const { name, address, sector, cuit, userid } = req.body;

    var errors = [];

    if ( !name || ! userid){

        errors.push({ message: 'Los campos name y userid deben poseer un valor'});
        return res.status(400).json(errors);
    }



    const data = await pool.query('INSERT INTO comps (name, address, sector, cuit, userid) VALUES ($1, $2, $3, $4, $5)', [ name, address, sector, cuit, userid ] );

    console.log(data);

    res.json({ message: 'Company created'});
    
} 

module.exports = ctrl;