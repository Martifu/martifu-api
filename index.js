const express = require('express');
const path = require('path');
require('dotenv').config();
const lib = require('lib')({ token: 'tok_dev_Gsqu2JvEt5LVYKb2z72zC2ywv9duzy51uXsJV9CPPS13rRhstsyd9sVL1GUgeFaw' });


// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


const NOMBRES = [{
        "nombre": "monse",
        "telefono": "5218715160152"
    },
    {
        "nombre": "mario",
        "telefono": "5218714696506",
    },
]



server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});


const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if (message.body === '!ping') {
        message.reply('pong');
    }
});

app.get('/envia', (req, res) => {
    console.log(req.query.mensaje);
    var mensaje = req.query.mensaje;
    var numero = req.query.numero;
    var nombre = '';
    for (let index = 0; index < NOMBRES.length; index++) {
        if (NOMBRES[index].telefono === numero) {
            nombre = NOMBRES[index].nombre;
        }
    }
    client.sendMessage(numero + '@c.us', mensaje).then(message => {
        console.log(message);
        res.json({
            ok: true,
            message: "El mensaje ha sido enviado con exito",
            nombre: nombre
        });

    });
});

app.get('/ultima-partida', async(req, res) => {
    let result = await lib.halo.infinite['@1.4.0'].stats.players['service-record'].multiplayer.matchmade.all({
        gamertag: `martifu`
    });

    res.json(result.data.core.summary);
});



client.initialize();