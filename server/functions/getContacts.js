const pool = require("../db");


const getContacts = async (req, res) =>{
    try{

        const contacts = await pool.query("SELECT * FROM contacts");

        const data = contacts.rows;

    
        res.json({ data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
}   

module.exports = getContacts;