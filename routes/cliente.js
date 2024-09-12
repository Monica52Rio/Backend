const {createClient, getClient, getClients, deleteClient,updateClient } = require("../controllers/clientControlles");

const {Router } = require("express")
const router = Router()

//Todo Rutas del crud, que es agregar, modificar,eliminar y buscar
router.post("/",createClient);
router.get("/",  getClients);
router.get("/:id", getClient);
router.put("/:id",  updateClient);
router.delete("/:id", deleteClient);

module.exports = router;

