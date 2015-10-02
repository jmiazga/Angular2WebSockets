var ChatService = (function () {
    function ChatService() {
        var _this = this;
        this.onMessage = function (event) {
            _this.chat.push(new ChatMessage(), { message: event.message, username: event.username });
        };
        this.username = "";
        this.chat = [];
        this.socket = io("localhost:4001/");
        this.socket.on('new message', function (d) { return _this.socketNewMessage(d); });
    }
    ChatService.prototype.setUsername = function (username) {
        this.username = username;
        this.socket.emit('add user', this.username);
    };
    ChatService.prototype.socketNewMessage = function (data) {
        this.chat.push(data);
    };
    ChatService.prototype.sendMessage = function (message) {
        console.log(message);
        this.chat.push(new ChatMessage(), { message: message, username: this.username });
        this.socket.emit('new message', message);
        //clear message
    };
    return ChatService;
})();
exports.ChatService = ChatService;
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
})();
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=chatService.js.map