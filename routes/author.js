const express = require("express")
const router = express.Router()

router.get("/",  (req, res) => {
    res.render("author/index")
})

router.get("/new",  (req, res) => {
    res.render("author/new")
})

router.post("/new",  (req, res) => {
    res.send("create")
})

module.exports = router