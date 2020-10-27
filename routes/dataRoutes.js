const express = require('express')
const router = express.Router()

const { addTable , getTable} = require("../controllers/dataControllers")

router.post("/add/table" , addTable)
router.get("/get/table" , getTable)

module.exports = router