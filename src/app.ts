import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {ChatService} from './chatService';

@Component({
  selector: 'my-app',
  bindings: [ChatService]
})
@View({
  templateUrl: 'app.html',
  directives: [NgFor]
})
class AppComponent {
  chat: Array<string>;
  chatService: ChatService;

  constructor(chatService: ChatService) {
    this.chat = chatService.chat;
    this.chatService = chatService;
  }

  sendMessage(message: string) {
    this.chatService.sendMessage(message);
  }
}

bootstrap(AppComponent);
