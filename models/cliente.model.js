const mongoos = require("mongoose");
const esquemaCliente = new mongoos.Schema({
    _id: mongoos.Schema.Types.UUID,

    nombre: {
        type: String,
        required: true,
    },

    apellido: {
        type: String,
        required: true, 
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    tlefono: {
        type: Number,
        required: true,
    },

    direcciom: {
        type: String,
        required: true,
    },

    ciudad: {
        type: String,
        required: true,
    },

    pais: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        required: true,
    },

    updatedAt: {
        type: Date,
        required: true,
    },
 })

 module.exports = mongoos.model("cliente", esquemaCliente);
