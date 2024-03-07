const Resena = require('../models/resena.model');

exports.get_escriberesena = (request, response, next) => {
    response.render('escriberesena'); 
};

exports.post_escriberesena = (request, response, next) => {
    console.log(request.body);
    const resena = 
    new Resena(request.body.nombre, request.body.descripcion);
    resena.save();
    
    response.setHeader('Set-Cookie', 'ultima_resena=' + request.body.nombre + '; HttpOnly');;
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_resena = request.get('Cookie');
    if (ultima_resena) {
        ultima_resena = ultima_resena.split('=')[1];
    } else {
        ultima_resena = '';
    }
    console.log(ultima_resena);
    response.render('resenas', {
        resenas: Resena.fetchAll(),
        ultima_resena: ultima_resena,
    });
}