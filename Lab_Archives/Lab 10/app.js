/* PRIMER SERVIDOR WEB */

// Módulo de node con todas las funciones de un servidor web
const http = require("http");

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
// Código asincrono, el arreglo lo imprime en orden
for (let item of arreglo){
    suma +=item;
};

let promedio = suma/arreglo.length;

console.log(`El promedio del arreglo es ${promedio}`)


const footer=
    `<footer class="footer">
<div class="content has-text-centered">
  <p>
    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
  </p>
</div>
</footer>
<script>
  function cambiarEstilo() {
  document.getElementById("miParrafo").className = "is-size-1 has-text-danger";
  document.getElementById("miParrafo").innerHTML = "BOO! ah te espante";
}

function restaurarEstilo() {
  document.getElementById("miParrafo").className = "is-size-4";
  document.getElementById("miParrafo").innerHTML = "Pasa el cursor sobre este texto";
}
</script>`;

const header=
` <head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Minecraft</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cc8672e-d273-4bd3-8ff0-001a6bacd05d/dg04qil-0c949860-fda7-4407-854e-ae6935a02c2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYzg2NzJlLWQyNzMtNGJkMy04ZmYwLTAwMWE2YmFjZDA1ZFwvZGcwNHFpbC0wYzk0OTg2MC1mZGE3LTQ0MDctODU0ZS1hZTY5MzVhMDJjMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iPzl5u8ZkXd0cCshh3UkahbxMfEc0ipHKASlnMKU6rA" width="112" height="28">
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
  
        <a class="navbar-item" href="/construir">
           Construir
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>`;

const construcciones = [{nombre: "casa", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg"}];

// Creas el servidor con create server
const server = http.createServer( (request, response) => {
    // Imprime el url que pidio el usuario con el servidor (cuando busca localhost:3000)
    console.log(request.url);
    
    if(request.url == '/'){
        
        // Le dice al servidor que responda con contenido de html y de texto
        response.setHeader("Content-Type", "text/html");
        response.write(header);
        response.write(
                `<section class="section">
                    <div class="container">
                        <h1 class="title">Hola mundo de Minecraft!</h1>
        
                        <div class="columns">
                          <div class="column is-half">
                            
                            <div class="block">
                              <figure class="image">
                                <img id="imagen_construir" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cc8672e-d273-4bd3-8ff0-001a6bacd05d/dg04qil-0c949860-fda7-4407-854e-ae6935a02c2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYzg2NzJlLWQyNzMtNGJkMy04ZmYwLTAwMWE2YmFjZDA1ZFwvZGcwNHFpbC0wYzk0OTg2MC1mZGE3LTQ0MDctODU0ZS1hZTY5MzVhMDJjMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iPzl5u8ZkXd0cCshh3UkahbxMfEc0ipHKASlnMKU6rA" alt="Imagen de casa en construcción">
                              </figure>
                            </div>
        
                        <div class="columns">`);

                        let tarjetas_construcciones = '';

                        for(let construccion of construcciones){
                            tarjetas_construcciones +=
                            ` <div class="column">
                            <div class="card">
                              <div class="card-image">
                                <figure class="image is-4by3">
                                  <img src=${construccion.imagen} alt="Placeholder image">
                                </figure>
                              </div>
                              <div class="card-content">
                                <div class="media">
                                  <div class="media-left">
                                    <figure class="image is-48x48">
                                      <img src=${construccion.imagen} alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="media-content">
                                    <p class="title is-4">${construccion.nombre}</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                  </div>
                                </div>
                            
                                <div class="content">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                  <a href="#">#css</a> <a href="#">#responsive</a>
                                  <br>
                                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                </div>
                              </div>
                            </div>
                      </div>`;
                    }
        response.write(tarjetas_construcciones);
        response.write(`</div>`);
        response.write(footer);
        // Envía la respuesta del servidor
        response.end();
    }

    else if(request.url == '/sorpresa'){
      response.write(header);
      response.write(`<div class="container">
      <h1 class="title has-text-centered is-italic is-1 is-family-code">Lab 6</h1>
      <p id='result'></p>
  
      <p id="miParrafo" class="is-size-4" onmouseover="cambiarEstilo()" onmouseout="restaurarEstilo()">Texto sorpresa</p>
      `)
      response.write(footer);
    }

    else if(request.url == '/construir' && request.method=="GET"){
        response.write(header);
        response.write(`
            <h1 class="title">CONSTRUYE CONSTRUYE MAMAHUEVO</h1>
            <form action="construir" method="POST">
                <label class="label" for="nombre">Nombre</label>
                <input name="nombre" id="nombre" type="text" class="input"><br>
                <label class="label" for="imagen">Imagen</label>
                <input name="imagen" id="imagen" type="text" class="input"><br><br>
                <input class="button-is-danger" type="submit" value="Construir">
            </form>
        `)
        response.write(footer);
        response.end();
    }

    else if(request.url == '/construir' && request.method=="POST"){

        const datos=[];

        request.on('data', (dato)=>{
            console.log(dato);
            datos.push(dato);
        });

        const filesystem = require('fs');
        
        return request.on('end',() =>{
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const imagen = datos_completos.split('&')[1].split('=')[1];
            console.log(imagen);
            const decodedimagen = decodeURIComponent(imagen);
            console.log(decodedimagen);
            construcciones.push({nombre: nombre, imagen: decodedimagen});
            const dataToSave = `Nombre: ${nombre}, Imagen: ${decodedimagen}\n`;
            filesystem.appendFileSync("datos.txt", dataToSave);
            return response.end();
        });
    }

    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
                <section class="section">
                    <div class="container">
                        <h1 class="title">Ups,no existe tu mundo!</h1>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae2dd6cb-d761-4361-a4fb-c278ed98e7e0/detqtlt-d5792735-d39e-4081-ba59-90e1021d52b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlMmRkNmNiLWQ3NjEtNDM2MS1hNGZiLWMyNzhlZDk4ZTdlMFwvZGV0cXRsdC1kNTc5MjczNS1kMzllLTQwODEtYmE1OS05MGUxMDIxZDUyYjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MjhNrGbPzJZzeqgMI4lRdS5E8n2X-Qe_AOWhE09gaec" alt="Placeholder image">

                    </div>`);
        response.write(footer);
        response.end();
    }
});

// Para que el servidor este activo, hay que decirle que escuche peticiones en un puerto (3000)
server.listen(3000);