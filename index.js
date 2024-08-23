require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routesClientes = require("./routes/cliente")
const conn =require("./configdb/db")

const app = express();
const puerto = 3000 || process.env.PORT;

//llamar a la funcion conectarBD
conn();
console.log(process.env.MONGO_URL); 
app.use(cors());
app.use(express.json())

//Ruta desde el proyecto
app.use('/api/clientes', routesClientes)

//Ruta desde la web

app.get('/', (req, res) => {
    res.send("Bienvenidos estamos desde el navegador");
})

app
  .listen(puerto, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", (error) => {
    console.log(`Error: ${error.message}`);
  });








