const pool = require("../db");


const updateContact = async (req, res) =>{
    try{

        const { name, last_name, age, email, link, tags, telephone, id } =  req.query;
        const {avatar} = req.body;

        const contact = await pool.query("UPDATE contacts SET name=$1, last_name=$2, age = $3, email = $4, avatar= $5, link = $6, tags=$7, telephone=$8 WHERE id= $9",[name, last_name, age, email, avatar, link, tags, telephone,id]);

        if (contact.rows.length !== 0) {
        return res.status(401).send("product already exists!");
        }

        const data = contact.rows;

    
        res.json({ data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
}   

module.exports = updateContact;