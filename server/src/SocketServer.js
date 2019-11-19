const WebSocket = require('ws');
const moment = require('moment');

class SocketServer {
  constructor(server) {
    this._timeClients = [];
    this._wss = new WebSocket.Server({noServer: true});
    this._wss.on('connection', (ws, request) => {
      this.registerClient(ws);
    });
    if (server) {
      this.register(server);
    }
  }

  register(server) {
    server.on('upgrade', (request, socket, head) => {
      this._wss.handleUpgrade(request, socket, head, (ws) => {
        this._wss.emit('connection', ws, request);
      });
    });
  }

  disconnect(sender) {
    return () => {
      this._timeClients = this._timeClients.filter(client => client !== sender);
    }
  }

  sendTime() {
    this._timeClients.forEach(client => client.send(moment().toString()));
  }

  registerClient(ws, name) {
    console.log('New client joined');
    ws.on('close', this.disconnect(ws));
    this._timeClients.push(ws);
  }
}

module.exports = SocketServer;
