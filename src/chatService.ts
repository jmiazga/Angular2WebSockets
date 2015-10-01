export class ChatService {
  private ws: WebSocket;
  chat: Array<string>;

  constructor() {
    this.chat = ["Hey", "How's it going?"];

    this.ws = new WebSocket("ws://echo.websocket.org");
    this.ws.onmessage = this.onMessage;
  }

  sendMessage(message: string) {
    console.log(message);
    this.chat.push(message);
    this.ws.send(message);
  }

  onMessage(event: MessageEvent) {
    this.chat.push(event.data);
  }
}
