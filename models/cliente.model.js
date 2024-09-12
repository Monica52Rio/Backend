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

    documento: {
        type: Number,
        require: true,
    },

    correo: {
        type: String,
        required: true,
        unique: true,
    },
    
        telefono: {
          type: Number,
          required: true,
        },
    
        direccion: {
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
        }},{versionKey:false, timestamps:true})

 module.exports = mongoos.model("clientes", esquemaCliente);
