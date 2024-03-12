const Emulador = require('../models/emulador.model')

exports.get_sorpresa = (request,response,next)=>{
    console.log(request.body);
    response.render('sorpresa',{
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.get_info = (request,response,next)=>{
    console.log(request.body);
    response.render('info',{
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.get_emulador = (request,response,next)=>{
    console.log(request.body);
    response.render('emulador',{
        emuladores: Emulador.fetchAll(),
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });

};