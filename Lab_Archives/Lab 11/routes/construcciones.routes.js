const express = require('express');
const router = express.Router();

const construcciones = [{nombre: "casa", imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cc8672e-d273-4bd3-8ff0-001a6bacd05d/dg04qil-0c949860-fda7-4407-854e-ae6935a02c2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYzg2NzJlLWQyNzMtNGJkMy04ZmYwLTAwMWE2YmFjZDA1ZFwvZGcwNHFpbC0wYzk0OTg2MC1mZGE3LTQ0MDctODU0ZS1hZTY5MzVhMDJjMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iPzl5u8ZkXd0cCshh3UkahbxMfEc0ipHKASlnMKU6rA" , 
descripcion: "descripcion ejemplo", 
fecha_actual: new Date().toLocaleDateString(), hora_actual: new Date().toLocaleTimeString()}];

router.get('/construir',(request,response, next) => {
    console.log(request.body);
    response.render('construir')
});

router.post('/construir',(request,response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});

router.get('/',(request, response, next) => {
   response.render('raiz',{
    construcciones:construcciones,
   });
});

module.exports = router;