exports.get_home = (request, response, next) => {
    response.render('home'); 
};

exports.get_amor = (request, response, next) => {
    response.render('amor'); 
};

exports.get_poemaamor = (request, response, next) => {
    response.render('poemaamor'); 
};

exports.get_tiempo = (request, response, next) => {
    response.render('tiempo'); 
};

exports.get_vida = (request, response, next) => {
    response.render('vida'); 
};
