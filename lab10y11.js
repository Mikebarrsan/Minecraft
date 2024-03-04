const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const construcciones = [
    {
        nombre: "casa", 
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];

app.get('/amor', (request, response, next) => {
    response.send(`
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>¿Qué es el amor?</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item" href="/">
            Home
        </a>
        <a class="navbar-item" href="/amor">
            Amor
        </a>
        <a class="navbar-item" href="/poema">
            Poema
        </a>
        <a class="navbar-item" href="/tiempo">
            Tiempo
        </a>
        <a class="navbar-item" href="/vida">
            Vida
        </a>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-danger">
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
    <section class="hero is-danger">
        <div class="hero-body">
            <p class="title">
            ¿Qué es el amor?
            </p>
            <p class="subtitle">
            Por Mike Barrón
            </p>
        </div>
        </section>

    <section class="section">
        <div class="container">
        <h1 class="title">
            El <strong>amor</strong> es...
        </h1>
        <p>
            <strong>Amor</strong> es pensar en un futuro juntos.
            <br><strong>Amor</strong> es que mi niño interior se sienta seguro contigo.
            <br><strong>Amor</strong> es ese brillo que provocas en mis ojos.
            <br><strong>Amor</strong> es acompañarnos en momentos importantes, sean buenos o malos.
            <br><strong>Amor</strong> es "ese no se qué" que me tiene "no se cómo" que me encanta "no se cuánto".
            <br><strong>Amor</strong> es aceptarnos tal y como somos.
            <br><strong>Amor</strong> es preocuparte y tomar interéspor el otro.
            <br><strong>Amor</strong> es ver belleza en las imperfecciones del otro.
            <br><strong>Amor</strong> es compartir momentos emotivos e inolvidables.
            <br><strong>Amor</strong> es desearle lo mejor al otro aún cuando no podamos estar juntos.
            <br><strong>Amor</strong> es sentir tu presencia y cariño a la distancia.
            <br><strong>Amor</strong> es un viaje de descubrimiento y crecimiento mutuo.
            <br><strong>Amor</strong> es Dios.
            <br><strong>Amor</strong> es dedicar pequeños detalles.
            <br><strong>Amor</strong> son actos desinteresados.
            <br><strong>Amor</strong> son caricias gentiles.
            <br><strong>Amor</strong> es comunicar los sentimientos.
        </p>

        <p>
            <br>El <strong>amor</strong> puede ser muchas cosas, pero nunca dejará de ser lo más importante en mi vida y mi familia.
        </p>
        </div>
    </section>
    </body>
    <footer class="footer">
    <div class="content has-text-centered">
        <p>
        Editor implementado: 
        <a href="https://code.visualstudio.com">Visual Studio Code</a>.
        </p>
    </div>
    </footer>
    </html>
    `); 
});

app.post('/amor', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});

app.get('/tiempo', (request, response, next) => {
    response.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Poema de tiempo</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item" href="/">
                Home
            </a>
            <a class="navbar-item" href="/amor">
                Amor
            </a>
            <a class="navbar-item" href="/poema">
                Poema
            </a>
            <a class="navbar-item" href="/tiempo">
                Tiempo
            </a>
            <a class="navbar-item" href="/vida">
                Vida
            </a>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-danger">
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
        <section class="hero is-info">
            <div class="hero-body">
                <p class="title">
                Poema de tiempo
                </p>
                <p class="subtitle">
                Por Dolores Veintimilla
                </p>
            </div>
            </section>

        <section class="section">
            <div class="container">
            <h1 class="title">
                A UN RELOJ
            </h1>
            <p>
                Con tu acompasado son
                <br>Marcando vas inclemente
                <br>De mi pobre corazón
                <br>La violenta pulsación....
                <br>Dichosa quien no te siente!
                <br><br>Funesto, funesto bien
                <br>Haces reloj....La venida
                <br>Marcas del ser a la vida,
                <br>Y así impasible también
                <br>La hora de la partida.
            </p>
            </div>
        </section>
        </body>
        <footer class="footer">
        <div class="content has-text-centered">
            <p>
            Editor implementado: 
            <a href="https://code.visualstudio.com">Visual Studio Code</a>.
            </p>
        </div>
        </footer>
    </html>
    `); 
});

app.post('/tiempo', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});

app.get('/vida', (request, response, next) => {
    response.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Poema de vida</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item" href="/">
                Home
            </a>
            <a class="navbar-item" href="/amor">
                Amor
            </a>
            <a class="navbar-item" href="/poema">
                Poema
            </a>
            <a class="navbar-item" href="/tiempo">
                Tiempo
            </a>
            <a class="navbar-item" href="/vida">
                Vida
            </a>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-danger">
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
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                Poema de vida
                </p>
                <p class="subtitle">
                Por Shawnee Kellie
                </p>
            </div>
            </section>

        <section class="section">
            <div class="container">
            <h1 class="title">
                Uno
            </h1>
            <p>
                Una sonrisa puede crear una amistad,
                <br>Un apretón de manos puede elevar el alma;
                <br>Una estrella puede guiar un barco al mar,
                <br>Un vitoreo puede lograr un gol.
                <br><br>Un voto puede cambiar una nación,
                <br>Un rayo solar puede levantar una habitación,
                <br>Una sola vela borra la oscuridad,
                <br>Una carcajada conquista la tristeza.
                <br><br>Una mirada puede cambiar dos vidas;
                <br>Un beso puede hacer que el amor florezca
                <br>Con un paso se inicia cada viaje;
                <br>Con una palabra inicia cada orador;
                <br><br>Una esperanza puede elevar nuestros espíritus,
                <br>Un toque es capaz de mostrar que algo nos importa
                <br>Una voz puede hablar con sabiduría
                <br>Un corazón es capaz de saber la verdad.
                <br><br>Una vida puede hacer la diferencia,
                <br>Una vida somos tú y yo …
            </p>
            </div>
        </section>
        </body>
        <footer class="footer">
        <div class="content has-text-centered">
            <p>
            Editor implementado: 
            <a href="https://code.visualstudio.com">Visual Studio Code</a>.
            </p>
        </div>
        </footer>
    </html>
    `); 
});

app.post('/tiempo', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});

app.get('/poema', (request, response, next) => {
    response.send(`
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Poema de amor</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item" href="/">
            Home
        </a>
        <a class="navbar-item" href="/amor">
            Amor
        </a>
        <a class="navbar-item" href="/poema">
            Poema
        </a>
        <a class="navbar-item" href="/tiempo">
            Tiempo
        </a>
        <a class="navbar-item" href="/vida">
            Vida
        </a>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-danger">
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
    <section class="hero is-danger">
        <div class="hero-body">
            <p class="title">
            Poema de amor
            </p>
            <p class="subtitle">
            Por Gerardo Salomón
            </p>
        </div>
        </section>

    <section class="section">
        <div class="container">
        <p>
            Quiero escribir un poema de <strong>amor</strong>, 
            <br>Que la gente lo lea y se inspire,
            <br>que su vida se llene de <strong>color</strong>, 
            <br>que al escucharlo quieran desbordar <strong>amor</strong>.
            <br><br>¿Para escribir un poema tengo que saber qué es el <strong>amor</strong>?
            <br>No, solo soltar la pluma y poder escuchar mi <strong>interior</strong>.
            <br>Una sonrisa amargada, un saludo de <strong>alegría</strong>, 
            <br>una ceja alzada, una depedida nada fría.
            <br><br>Levantar junto al amanecer tus <strong>ánimos</strong>
            <br>Abandonando tus lágrimas la noche en su <strong>doler</strong>
            <br>Permanecer callado mientras tu amigo llora,
            <br>y no dejar de lado en esta su <strong>peor hora</strong>.
            <br><br>Responder a ese llamado,
            <br>el que se encuentra dentro de ti,
            <br>el que dice que no has llegado,
            <br>a la persona en la que te puedes <strong>convertir</strong>.
            <br><br><strong>Sufrir</strong> con el que está sufriendo,
            <br>decidiendo cuando el no tuvo la oportunidad de <strong>decidir</strong>,
            <br>aceptar la efimeridad de la vida
            <br>y darle cabida a momentos de espontaneidad.
            <br><br><strong>Expresar</strong> lo que sentimos,
            <br><strong>sentir</strong> lo que pensamos.
            <br>Darle sentido a nuestro <strong>actuar</strong>,
            <br>para contagiar a los demás la alegría del <strong>ayudar</strong>.
            <br><br>Que la <strong>bondad</strong> de ti brote,
            <br>a pesar de que parezca,
            <br>que a nadie más le importe.
            <br><br>Darle importancia a lo <strong>tuyo</strong>,
            <br>pero también dársela a lo <strong>suyo</strong>.
            <br>Ama a la persona que <strong>hoy</strong> eres,
            <br>ama aún más a la que <strong>mañana</strong> ser puedes.
            <br><br>Entiende que <strong>amar es la respuesta y suficiente razón</strong>,
            <br>para reparar la <strong>herida</strong> expuesta en tu humano corazón.
            <br>Las <strong>semillas</strong> que hoy siembres de amor,
            <br>mañana cocechas de paz estarán a tu <strong>favor</strong>
        </p>
        </div>
    </section>
    </body>
    <footer class="footer">
    <div class="content has-text-centered">
        <p>
        Editor implementado: 
        <a href="https://code.visualstudio.com">Visual Studio Code</a>.
        </p>
    </div>
    </footer>
    </html>
    `); 
});

app.post('/poema', (request, response, next) => {
    console.log(request.body);
    construcciones.push(request.body);
    response.redirect('/');
});

app.get('/', (request, response, next) => {
    let html_respuesta = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Poems</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item" href="/">
                        Home
                    </a>
                    <a class="navbar-item" href="/amor">
                        Amor
                    </a>
                    <a class="navbar-item" href="/poema">
                        Poema
                    </a>
                    <a class="navbar-item" href="/tiempo">
                        Tiempo
                    </a>
                    <a class="navbar-item" href="/vida">
                        Vida
                    </a>
                    </div>
                
                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                        <a class="button is-danger">
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
                    <h1 class="title">Poemas</h1>
                    <p> Esta página tiene como objetivo compartir poemas/fragmentos escritos sobre temas de interés (en este caso el amor).<p>
                </div>
            </section>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                    Editor implementado: 
                    <a href="https://code.visualstudio.com">Visual Studio Code</a>.
                    </p>
                </div>
            </footer>
        </body>
    </html>
    `; 
    response.send(html_respuesta);
});

app.use((request, response, next) => {
    response.status(404);
    response.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Minecraft</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body>
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item" href="/">
                    Home
                </a>
                <a class="navbar-item" href="/amor">
                    Amor
                </a>
                <a class="navbar-item" href="/poema">
                    Poema
                </a>
                <a class="navbar-item" href="/tiempo">
                    Tiempo
                </a>
                <a class="navbar-item" href="/vida">
                    Vida
                </a>
                </div>
            
                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-danger">
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
                    <h1 class="title">ERROR 404 :(</h1>
                </div>
            </section>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                    Editor implementado: 
                    <a href="https://code.visualstudio.com">Visual Studio Code</a>.
                    </p>
                </div>
            </footer>
        </body>
    </html>
    `);
});

app.listen(1011);