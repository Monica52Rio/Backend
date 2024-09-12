const {createEvent, getEvent, getEvents, deleteEvent, updateEvent } = require("../controllers/event.controlle");

const {Router } = require("express")
const router = Router()

//Todo Rutas del crud, que es agregar, modificar,eliminar y buscar
router.post("/",createEvent);
router.get("/",  getEvents);
router.get("/:id", getEvent);
router.put("/:id",  updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;