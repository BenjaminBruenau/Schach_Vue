export const webSocketMixin = {
    data: function () {
        return {
            webSocket: Object,
            timerId: 0,
        }
    },
    methods: {
        connectToWebSocket: function (userToken) {
            if (this.webSocket.readyState && this.webSocket.readyState === WebSocket.OPEN) {
                console.log("[WebSocket] Web Socket already exists")
                return;
            }

            this.webSocket = new WebSocket("ws://localhost:9000/websocket", [userToken]);

            this.webSocket.onopen = () => {
                console.log("[WebSocket] Connected to WebSocket: ", this.webSocket.url);
                this.sendWebSocketRequest("connect");
                this.keepAlive();
            };

            /// Default
            this.webSocket.onmessage = message => console.log("[WebSocket] Received Message: ", message);

            this.webSocket.onerror = event => console.error(event);

            this.webSocket.onclose = () => setTimeout(this.connectToWebSocket, 5000); console.log("[WebSocket] Reconnecting to WebSocket");
        },
        keepAlive: function () {
          const timeout = 20000; // 20s
            if (this.webSocket.readyState && this.webSocket.readyState === WebSocket.OPEN) {
                this.sendWebSocketRequest('Keep Alive');
            }
            this.timerId = setTimeout(this.keepAlive, timeout);
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