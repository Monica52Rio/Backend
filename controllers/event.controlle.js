const Event = require("../models/event.model")

async function createEvent(req, res) { 
    try {
        const nuevoEvent = await Event.create(req.body)
       await nuevoEvent.save()
       res.send(nuevoEvent)
    } catch (error) {
     console.error(error)
    res.send("Petición fallida")
    }
 }

async function updateEvent(req, res) {
    try {
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida")  
    }
 }

 
async function deleteEvent(req,res) {
    try {
        const eventAborrar = await Event.deleteOne({_id:req.body.id})
        res.send({mensage:"Evento Eliminado"})
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

async function getEvent(req, res) {
    try {
        const evento = await Event.findById(req.params.id)
        if(evento){
            res.send(evento)
        }else{
            res.send({mensaje:"No hay un evento con ese id"})
        }
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

async function getEvents(req, res) {
    try {
    const eventos = await Event.find({})
    res.send(eventos)
        
    } catch (error) {
        console.error(error)
        res.send("Petición fallida") 
    }
 }

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvent,
    getEvents
}
