const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasApp = require('./routes/construcciones.routes')

app.use('/',rutasApp);

app.use((request,response,next)=>{
    response.status(404);
    response.sendFile(
      path.join(__dirname,'views','404.html')
      );
});

app.listen(3000);