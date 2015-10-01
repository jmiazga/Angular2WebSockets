var ChatService = (function () {
    function ChatService() {
        this.chat = ["Hey", "How's it going?"];
        this.ws = new WebSocket("ws://echo.websocket.org");
        this.ws.onmessage = this.onMessage;
    }
    ChatService.prototype.sendMessage = function (message) {
        console.log(message);
        this.chat.push(message);
        this.ws.send(message);
    };
    ChatService.prototype.onMessage = function (event) {
        this.chat.push(event.data);
    };
    return ChatService;
})();
exports.ChatService = ChatService;
//# sourceMappingURL=chatService.js.map