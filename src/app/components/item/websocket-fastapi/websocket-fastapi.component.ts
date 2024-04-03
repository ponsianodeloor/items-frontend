import { Component } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-websocket-fastapi',
  templateUrl: './websocket-fastapi.component.html',
  styleUrl: './websocket-fastapi.component.css'
})
export class WebsocketFastapiComponent {

  ws: WebSocketSubject<any> = webSocket('ws://localhost:8000/ws');
  message: string = '';
  messages: string[] = [];
  userId: number = 1;

  constructor() {
    //random user id
    this.userId = Math.floor(Math.random() * 10) + 1;
    this.ws = webSocket('ws://localhost:8000/ws/' + this.userId);
    this.ws.subscribe(
      (msg) => {
        this.messages.push(msg);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );

    this.getMessages();
  }

  sendMessage() {
    //console.log(this.message);
    this.ws.next(this.message);
    this.message = '';
  }

  ngOnDestroy() {
    this.ws.complete();
  }

  getMessages() {
    return this.messages;
  }

}
