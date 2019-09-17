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


server.listen(process.env.PORT, function() {

  console.log(`http/ws server listening on ${process.env.PORT}`);
});