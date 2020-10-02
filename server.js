const express = require("express");
const app = express();


//const methodOverride = require('method-override')



const porta = 3001;

const rotas = require('./srcs/rotas/rotas');

rotas(app);

app.listen(porta, ()=> console.log("Toc toc!"));