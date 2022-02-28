const router = require("express").Router();

const createContact = require("./functions/createContact");
const getContacts = require("./functions/getContacts");
const updateContact = require("./functions/updateContact");




router.get("/createContact", createContact);
router.get("/getContacts", getContacts);
router.get("/updateContact", updateContact);

module.exports= router;

