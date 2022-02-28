const pool = require("../db");


const createContact = async (req, res) =>{
    try{

        const { name, last_name, age, email, avatar, link, tags, telephone } =  req.query;

        const contact = await pool.query("SELECT * FROM contacts WHERE telephone = $1", [telephone]);

        if (contact.rows.length !== 0) {
        return res.status(401).send("product already exists!");
        }

        

        const newContact = await pool.query("INSERT INTO contacts ( name, last_name, age, email, avatar, link, tags, telephone) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [name, last_name, age, email, avatar,  link, tags, telephone]);



        const data = newContact.rows;

    
        res.json({ data });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
}   

module.exports = createContact;