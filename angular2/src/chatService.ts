export class ChatService {
  username: string;
  chat: Array<ChatMessage>;
  private socket: Object;

  constructor() {
    this.username = "";
    this.chat = [];
    this.socket = io("localhost:4001/");

    this.socket.on('new message', (d) => this.socketNewMessage(d));
  }

  setUsername(username: string) {
    this.username = username;
    this.socket.emit('add user', this.username);
  }

  socketNewMessage(data: ChatMessage) {
    this.chat.push(data);
  }

  sendMessage(message: string) {
    console.log(message);
    this.chat.push(new ChatMessage(){ message: message, username: this.username });
    this.socket.emit('new message', message);
    //clear message
  }

  onMessage = (event) => {
    this.chat.push(new ChatMessage(){ message: event.message, username: event.username });
  }
}

export class ChatMessage {
  username: string;
  message: string;
}