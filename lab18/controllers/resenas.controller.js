const Resena = require('../models/resena.model');

exports.get_escriberesena = (request, response, next) => {
    response.render('escriberesena', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }); 
};

exports.post_escriberesena = (request, response, next) => {
    console.log(request.body);
    const resena = 
    new Resena(request.body.nombre, request.body.descripcion);
    resena.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 
                'ultima_resena=' + request.body.nombre + '; HttpOnly');
            response.redirect('/');
        })
        .catch((error) => {console.log(error)});
};

exports.get_resena = (request, response, next) => {
    console.log('Ruta /');
    let ultima_resena = request.get('Cookie');
    if (ultima_resena) {
        ultima_resena = ultima_resena.split('=')[1];
    } else {
        ultima_resena = '';
    }
    console.log(ultima_resena);
    
    Resena.fetch(request.params.resena_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('resenas', {
            resenas: rows,
            ultima_resena: ultima_resena,
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error);
    });
}