const { addContact } = require("../controller/contactController")

const router = require("express").Router()

router
    .post("/add", addContact)


module.exports = router