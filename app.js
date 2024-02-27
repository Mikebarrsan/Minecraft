const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/construir', (request, response, next) => { //Lo específico debe ir antes de lo general
  console.log(request.body);
  response.send('Respuesta de la ruta "/construir"'); //Por ejemplo las respuestas o acciones de rutas específicas
});

app.use((request, response, next) => {
  console.log('Otro middleware!');
  response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);