const express = require('express');
const fetch = require('node-fetch');

const app = express();

let arr = [];

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async function (req, res) {
    await fetch('http://www.raydelto.org/agenda.php')
        .then(res => res.json())
        .then(data =>  res.json(data))
        .catch(err => res.json(arr))
   ;
})

app.post('/', function (req, res) {
    const body = req.body;
    arr.push(body);

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST', 
        headers: {
      
          
        },
        body: JSON.stringify({
          nombre:body.nombre,
          apellido:body.apellido,
          telefono:body.telefono
      }),
      })

    res.status(201).json(body);
})

app.listen(3000, function () {
    console.log("api run");
})
