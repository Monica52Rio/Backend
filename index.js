require('dotenv').config();
const express = require('express');
const cors = require ('cors');

const routesClientes = require("./routes/cliente")
const routerEvents = require("./routes/event")
const conn =require("./configdb/db")

const app = express();
const port = 3000 || process.env.PORT;

//llamar a la funcion conectarBD
conn();
console.log(process.env.MONGO_URL); 
app.use(cors());
app.use(express.json())

//Ruta desde el proyecto
app.use('/api/clientes', routesClientes)
app.use('/api/eventos', routerEvents)

//Ruta desde la web

app.get('/', (req, res) => {
    res.send("Bienvenidos estamos desde el navegador");
})

app
  .listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  })
  .on("error", (error) => {
    console.log(`Error: ${error.message}`);
  });