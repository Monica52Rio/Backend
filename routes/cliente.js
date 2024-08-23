const {createClient, getClient, getClients, deleteClient,updateClient } = require("../controllers/clientControlles");

const {Router } = require("express")
const router = Router()
router.post("/",createClient);
router.get("/",  getClients);
router.get("/:id", getClient);
router.put("/:id",  updateClient);
router.delete("/:id", deleteClient);

module.exports = router

