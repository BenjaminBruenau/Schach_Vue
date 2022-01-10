export const webSocketMixin = {
    data: function () {
        return {
            webSocket: Object,
        }
    },
    methods: {
        connectToWebSocket: function () {
            if (this.webSocket.readyState && this.webSocket.readyState === WebSocket.OPEN) {
                console.log("[WebSocket] Web Socket already exists")
                return;
            }
            this.webSocket = new WebSocket("wss://schach-play-server.herokuapp.com/websocket")

            this.webSocket.onopen = () => {
                console.log("[WebSocket] Connected to WebSocket: ", this.webSocket.url);
                this.sendWebSocketRequest("connect");
            };

            /// Default
            this.webSocket.onmessage = message => console.log("[WebSocket] Received Message: ", message);

            this.webSocket.onerror = event => console.error(event);

            this.webSocket.onclose = () => setTimeout(this.connectToWebSocket, 5000); console.log("[WebSocket] Reconnecting to WebSocket");
        },
        setOnMessage: function (func) {
            this.webSocket.onmessage = func;
        },
        setOnError: function (func) {
            this.webSocket.onerror = func;
        },
        setOnClose: function (func) {
            this.webSocket.onclose = func;
        },
        sendWebSocketRequest: function (request) {
            this.webSocket.send(request);
        },
    }
}