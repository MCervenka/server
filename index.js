let WSServer = require('ws').Server;
let server = require('http').createServer();
let app = require('./httpServer');

// Create web socket server on top of a regular http server
let wss = new WSServer({

  server: server
});

// Also mount the app here
server.on('request', app);

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
const PORT = process.env.PORT || 8080;

server.listen(PORT, function() {

  console.log(`http/ws server listening on ${process.env.PORT}`);
});

const WebSocket = require('isomorphic-ws')


const ws = new WebSocket('wss://boiling-sands-96880.herokuapp.com', {
  origin: 'https://boiling-sands-96880.herokuapp.com'
});
/*
ws.onopen = function open() {
};

ws.onclose = function close() {
};

ws.onmessage = function incoming(data) {

};
*/