const Emulador = require('../models/emulador.model')

exports.get_sorpresa = (request,response,next)=>{
    console.log(request.body);
    response.render('sorpresa')
};

exports.get_info = (request,response,next)=>{
    console.log(request.body);
    response.render('info');

};

exports.get_emulador = (request,response,next)=>{
    console.log(request.body);
    response.render('emulador',{
        emuladores: Emulador.fetchAll(),
    });

};