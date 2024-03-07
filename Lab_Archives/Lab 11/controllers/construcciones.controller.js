const Construccion = require('../models/construccion.model')

exports.get_construir = (request, response, next) => {
    response.render('construir',{
        username: request.session.username || '',
    }); 
};

exports.post_construir = (request,response, next) => {
    console.log(request.body);
    const construccion = 
        new Construccion(request.body.nombre,
            request.body.imagen,
            request.body.descripcion,
            )
    construccion.save();
    response.setHeader('Set-Cookie','ultima_construccion=' +
        request.body.nombre + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let cookies = request.get('Cookie');
    if (cookies){
        cookies = cookies.split('=')[1];
    }
    else{
        cookies = '';
    }
    console.log(cookies);

    Construccion.fetchAll().then(([rows,fieldData]) => {
        console.log(rows);
        response.render('raiz',{
            construcciones: rows,
            cookies: cookies,
            username: request.session.username || '',
        });
    })

    .catch((error)=> {
        console.log(error)
    })

 };



