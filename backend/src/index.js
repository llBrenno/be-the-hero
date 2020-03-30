const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();



//Antes de colocar a rota é importante chamar a função abaixo, ela dirá que estamos utilizando
//o formato JSON no corpo das requisições
app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);