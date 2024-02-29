const express = require('express');
const router = express.Router();

const footer=
    `</div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </body>
  <script>

  function cambiarEstilo() {
    document.getElementById("miParrafo").className = "is-size-1 has-text-danger";
    document.getElementById("miParrafo").innerHTML = "BOO! ah te espante";
  };

  function restaurarEstilo() {
    document.getElementById("miParrafo").className = "is-size-4";
    document.getElementById("miParrafo").innerHTML = "Pasa el cursor sobre este texto";

    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString();
    const horaFormateada = fechaActual.toLocaleTimeString();
  
    document.getElementById('fecha').textContent = fechaFormateada;
    document.getElementById('hora').textContent = horaFormateada;

  };

  </script>
  </html>`;

const header=
`  <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Minecraft</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="https://i.makeagif.com/media/10-27-2020/OfyFOh.gif" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
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
          </nav>
        <section class="section">
            <div class="container">`;

const construcciones = [{nombre: "casa", imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg" , 
descripcion: "descripcion ejemplo", 
fecha_actual: new Date().toLocaleDateString(), hora_actual: new Date().toLocaleTimeString()}];

router.get('/sorpresa',(request,response,next)=>{
    console.log(request.body);
    response.send(header +`
    <div class="container">
    <h1 class="title has-text-centered is-italic is-1 is-family-code">WOOOW encontraste mi pagina secreta muajaajja</h1>
    <p id='result'></p>

    <p id="miParrafo" class="is-size-4" onmouseover="cambiarEstilo()" onmouseout="restaurarEstilo()">Texto sorpresa</p>
    ` + footer);

});

router.get('/compra',(request,response,next)=>{
    console.log(request.body);
    response.send(header +`` + footer);
});

router.get('/info',(request,response,next)=>{
    console.log(request.body);
    response.send(header + 
    `<blockquote> El archivo package.json es un componente fundamental en proyectos de JavaScript y es utilizado por npm, el gestor de paquetes más popular. Contiene metadatos importantes sobre el proyecto, como su nombre, versión, dependencias necesarias y scripts disponibles para su ejecución </blockquote>
    <p class="has-text-centered"> Unos de los campos mas comunes en un archivo package.json son:</p> 
    <ol type="I">
    <li> name: Nombre del proyecto, librería o paquete. Se recomienda que coincida con el nombre del repositorio.</li>
    <li> version:  Versión del paquete. Generalmente se utiliza semver (Semantic Versioning) para especificar versiones.</li>
    <li> description: Breve descripción del paquete o proyecto. </li>
    <li> main: Punto de entrada del proyecto. Por lo general, es index.js (para Node.js) o index.html (para navegadores).</li>
    <li> scripts: Colección de scripts del proyecto. Estos scripts pueden ser ejecutados con comandos como npm run <script-name>.</li>
    <li> keywords: Palabras clave relacionadas con el proyecto. Útil para búsquedas.</li> 
    <li> author: Nombre del autor del paquete o proyecto.</li>
    <li> license: Tipo de licencia del paquete o proyecto. Por defecto, suele ser ISC.</li>
    <li> dependencies:  Colección de paquetes necesarios para producción y sus versiones instaladas.</li>
    <li> devDependencies: Colección de paquetes necesarios para desarrollo y sus versiones instaladas.</li>
    <li> homepage: URL de la página principal del paquete.</li>
    <li> repository: URL del repositorio. Debe indicar el tipo (por ejemplo, git) y la ruta.</li>
    <li> bugs: Objeto con un campo url que apunta a la página de issues del proyecto.</li>
    </ol>` + footer);

});

router.get('/construir',(request,response, next) => {
    console.log(request.body);
    const fecha = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString()
    response.send(header + `<h1 class="title">CONSTRUYE TU REPERTORIO DE IMAGENES</h1>
    <form action="construir" method="POST">
        <label class="label" for="nombre">Nombre</label>
        <input name="nombre" id="nombre" type="text" class="input"><br>
        <label class="label" for="imagen">Imagen</label>
        <input name="imagen" id="imagen" type="text" class="input"><br><br>
        <label class="label" for="descripcion">Descripcion</label>
        <input name="descripcion" id="descripcion" type="text" class="input"><br>
        <input type="hidden" name= "fecha_actual" id="fecha_actual"value=${fecha}>
        <input type="hidden" name= "hora_actual" id="hora_actual"value=${hora}>
        <input class="button is-danger" type="submit" value="Construir">
    </form>` + footer);
});

router.post('/construir',(request,response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});

router.get('/',(request, response, next) => {
    let tarjetas_construcciones = '';

    for(let construccion of construcciones){
        tarjetas_construcciones +=
            `<div class="column">
            <div class="card">
                <div class="card-image">
                <figure class="image is-4by3">
                    <img src="${construccion.imagen}" alt="Placeholder image">
                </figure>
                </div>
                <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="${construccion.imagen}" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="media-content">
                    <p class="title is-4">${construccion.nombre}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
            
                <div class="content">
                    ${construccion.descripcion} 
                    <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time>${construccion.fecha_actual}</time>
                    <time>${construccion.hora_actual}</time>
                </div>
                </div>
            </div>
        </div>`;
    }
    console.log('Otro middleware!');
    response.send(header +
        `<section class="section">
        <div class="container">
            <h1 class="title">MI PAGINA WOWOWOWOWOOW!</h1>

            <div class="columns">
            <div class="column is-half">
                
                <div class="block">
                <figure class="image">
                    <img id="imagen_construir" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3cc8672e-d273-4bd3-8ff0-001a6bacd05d/dg04qil-0c949860-fda7-4407-854e-ae6935a02c2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjYzg2NzJlLWQyNzMtNGJkMy04ZmYwLTAwMWE2YmFjZDA1ZFwvZGcwNHFpbC0wYzk0OTg2MC1mZGE3LTQ0MDctODU0ZS1hZTY5MzVhMDJjMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iPzl5u8ZkXd0cCshh3UkahbxMfEc0ipHKASlnMKU6rA" alt="Imagen de casa en construcción">
                </figure>
                </div>
        <div class="columns">` + tarjetas_construcciones + footer
    ); //Manda la respuesta
});

module.exports = router;