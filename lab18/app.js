const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
//-----------------------------CAMBIOS----------------------------------
app.use((request, response, next) => {
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/users', rutasUsuarios);

const rutasResenas = require('./routes/resenas.routes');
app.use('/', rutasResenas);

const rutasMain = require('./routes/main.routes');
app.use('/', rutasMain);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
      path.join(__dirname, 'views', '404.html')
    );
  });

app.listen(1200);