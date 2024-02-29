const express = require('express');
const router = express.Router();

router.get('/sorpresa',(request,response,next)=>{
    console.log(request.body);
    response.render('sorpresa')
});

router.get('/info',(request,response,next)=>{
    console.log(request.body);
    response.render('info');

});

module.exports = router;
