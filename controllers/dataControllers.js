const Table = require("../models/Table")

module.exports = {
    addTable : async (req, res) => {
        try{
            
            const { name , date } = req.body
            console.log(date)
            await Table.create({name , date})
            res.json({StatusCode: 201 , msg:"Detaills added Sucssesfully"})
            
        }catch(err){
            throw(err)
        }
    },
    getTable: async(req,res) => {
        try{

            const Tables = await Table.find({})
            res.json({StatusCode: 201 , Tables})

        }catch(err){
            throw{err}
        }
    }
}