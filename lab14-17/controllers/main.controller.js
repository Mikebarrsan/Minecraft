exports.get_home = (request, response, next) => {
    response.render('home', {
        username: request.session.username || '',
    }); 
};

exports.get_amor = (request, response, next) => {
    response.render('amor', {
        username: request.session.username || '',
    }); 
};

exports.get_poemaamor = (request, response, next) => {
    response.render('poemaamor', {
        username: request.session.username || '',
    }); 
};

exports.get_tiempo = (request, response, next) => {
    response.render('tiempo', {
        username: request.session.username || '',
    });  
};

exports.get_vida = (request, response, next) => {
    response.render('vida', {
        username: request.session.username || '',
    });  
};
