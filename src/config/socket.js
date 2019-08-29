module.exports = {
    socketUrl: 'ws://localhost:3000/chat',
    websocket: function() {
        let socket = new WebSocket(this.socketUrl);
        socket.onopen = this.websocketOpen;
        socket.onmessage = this.websocketMessage;
        socket.onerror = this.websocketError;
        socket.onclose = this.websocketClose;
    },
    websocketOpen: function() {

    },
    websocketError: function() {
        this.websocket();
    },
    websocketMessage: function() {

    },
    websocketClose: function() {

    }
}