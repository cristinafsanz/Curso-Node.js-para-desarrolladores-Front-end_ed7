# CLASE 8

https://github.com/Fictizia/Curso-Node.js-para-desarrolladores-Front-end_ed7/tree/master/clase8

Instalar npm install -g yo generator-hubot

mkdir myhubot
cd myhubot
yo hubot

- Bot adapter slack (https://github.com/slackapi/hubot-slack)

Example.coffee: module.exports = (robot) -> // instancia

/hola ([a-z]+)/i // para recoger nombre después de hola (i, may o minúsculas)

/hola|hi|hello/i

Hear: escucha todo en un canal

Respond: responde con reply en el mismo hilo

messageRoom: Enviar un mensaje

Res.match[1] // el 1 es el resultado si ha ido bien

https://regex101.com/

Brain: Como una base de datos

Ejercicio 1:

Que diga Buenos días, buenas tardes, buenas noches

Hello.js

module.exports = function(robot) {
    robot.hear(/hola/i, function(res) {
        res.send('Hola!');
    })
}


./bin/hubot (y dar a Enter)

myhubot> adiós
myhubot> Hasta luego!
adiós!
myhubot> Hasta luego!

myhubot> @my-bot adios
myhubot> Hasta luego!


Quitar heroku-keepalive y redis para que no den los mensajes de error

npm install hubot-help --save

Añadir en external-scripts también


robot.respond(/dime ([0-5]) películas/i, function(res) {
        const number = res.match[1];
        const myFilms =  films.slice(0, number);

        res.reply(myFilms.join(', '));
    });


myhubot> @myhubot dime 3 películas
myhubot> Shell: Venom, Johny English, Ola de crímenes


Adaptar slack: https://slackapi.github.io/hubot-slack/

ghibli-user4
xoxb-209826631984-449261222595-Y8tNnXmYjl3s2ScE6CNfOjRZ

En consola:
HUBOT_SLACK_TOKEN=xoxb-209826631984-449261222595-Y8tNnXmYjl3s2ScE6CNfOjRZ ./bin/hubot

En hubot: -adapter slack

Tenemos que ver en los logs: INFO Connected to Slack RTM

Canal slack adm-github-org

https://adm-github-org.slack.com/messages/DD8R99TC6/

Si fuéramos administrador podríamos añadir Hubot y añadir los token

Se puede diferenciar si estamos en consola, en slack… con robot.adapterName

Creamos carpeta lib: para código que no interactúe con código entrada bot

Formatter.js

https://api.slack.com/docs/message-formatting

Message builder y copiar ejemplo

JSON de studio gibli


Librería más fácil request-promise-native

https://www.npmjs.com/package/request-promise-native

npm i --save request-promise-native

Menos código:

robot.respond(/listado de pel[íi]culas/i, function(res) {
        request('https://ghibliapi.herokuapp.com/films').then((data) => {
            const films = JSON.parse(data);
            res.send(format.formatFilms(films));
        });
    });


Siguiente ejercicio: Pedir x películas y si las primeras o últimas

dime las primeras 5 películas

dime las últimas 3 películas


Dialogflow: con inteligencia artificial



