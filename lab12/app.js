const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
//-----------------------------CAMBIOS----------------------------------
app.use((request, response, next) => {
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//Registrar el middleware con el módulo resenas
const rutasResenas = require('./routes/resenas.routes');

app.use('/', rutasResenas);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
      path.join(__dirname, 'views', '404.html')
    );
  });

app.listen(1200);