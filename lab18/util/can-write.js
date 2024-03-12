module.exports = (request, response, next) => {

    let can_write = false;
    for (let permiso of request.session.permisos) {
        if(permiso.funcion == 'escribir') {
            can_write = true;
        }
    }

    if (can_write) {
        next();
        
    } else {
        return response.redirect('/users/logout');
    }
    
}