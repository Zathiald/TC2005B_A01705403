
exports.get_sorpresa = (request,response,next)=>{
    console.log(request.body);
    response.render('sorpresa')
};

exports.get_info = (request,response,next)=>{
    console.log(request.body);
    response.render('info');

};