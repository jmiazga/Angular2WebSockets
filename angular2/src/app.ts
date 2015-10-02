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
  chat: Array<ChatMessage>;
  chatService: ChatService;
  username: string;

  constructor(chatService: ChatService) {
    this.chat = chatService.chat;
    this.chatService = chatService;
    this.setUsername("User_" + new Date().getTime());    
  }  

  setUsername(username: string) {
    this.username = username;
    this.chatService.setUsername(this.username);
  }
  sendMessage(message: string) {
    this.chatService.sendMessage(message);
  }
}

bootstrap(AppComponent);
