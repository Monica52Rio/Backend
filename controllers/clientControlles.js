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
// Actualizar cliente
async function updateClient(req, res) {
    try {
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida")  
    }
 }

 // Borrar cliente
async function deleteClient(req,res) {
    try {
        const clienteAborrar = await ClienteEx.deleteOne({_id:req.body.id})
        res.send({mensage:"Cliente Eliminado"})
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }
// todo generar funcion getCliente  conseguir Cliente
async function getClient(req, res) {
    try {
        const cliente = await ClienteEx.findById(req.params.id)
        if(cliente){
            res.send(cliente)
        }else{
            res.send({mensaje:"No hay un usuario con ese id"})
        }
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

 // Conseguir clientes
async function getClients(req, res) {
    try {
    const clientes = await ClienteEx.find({})
    res.send(clientes)
        
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

