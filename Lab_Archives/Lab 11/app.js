const express = require('express');
const app = express();

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
    response.send(`
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
    </nav>

    <section class="section">
    <div class="container">
        <h1 class="title">Ups,no existe tu mundo!</h1>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae2dd6cb-d761-4361-a4fb-c278ed98e7e0/detqtlt-d5792735-d39e-4081-ba59-90e1021d52b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlMmRkNmNiLWQ3NjEtNDM2MS1hNGZiLWMyNzhlZDk4ZTdlMFwvZGV0cXRsdC1kNTc5MjczNS1kMzllLTQwODEtYmE1OS05MGUxMDIxZDUyYjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MjhNrGbPzJZzeqgMI4lRdS5E8n2X-Qe_AOWhE09gaec" alt="Placeholder image">
    </div>

    <footer class="footer">
    <div class="content has-text-centered">
    <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
    </div>
    </footer>
    `);
});

app.listen(3000);