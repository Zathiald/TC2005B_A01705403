const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: false,
    });
};

exports.post_login = (request, response, next) => {
    console.log("Post login");
    Usuario.fetchOne(request.body.username)
        .then(([users, fieldData]) => {
            console.log(users);
            if(users.length == 1) {
                const user = users[0];
                bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        return request.session.save(err => {
                            response.redirect('/construcciones');
                        });
                    }
                    else{
                        return response.redirect('users/login');
                    }
                }).catch(error => {
                    response.redirect('users/login');
                });
            }
        })
        .catch((error) => {console.log(error)});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password);
    nuevo_usuario.save()
        .then(([rows, fieldData])=>{
            response.redirect('/users/login');
        })
        .catch((error)=>{console.log(error);});
};  