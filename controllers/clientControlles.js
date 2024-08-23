const ClienteEx = require("../models/cliente.model")

async function createClient(req, res) { 
    try {
        const nuevoCliente = await ClienteEx.create(req.body)
       await nuevoCliente.save()
        

    } catch (error) {
     console.error(error)
    res.send("Petición fallida")
    }
 }

async function updateClient(req, res) {
    try {
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida")  
    }
 }

async function deleteClient(req,res) {
    try {
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

async function getClient(req, res) {
    try {
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

async function getClients(req, res) {
    try {
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

module.exports = {
    createClient,
    updateClient,
    deleteClient,
    getClient,
    getClients
}

