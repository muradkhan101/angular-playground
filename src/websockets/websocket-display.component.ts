import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';
@Component({
    selector: 'web-sockets',
    template:`
    <div>
        <p *ngFor="let message of messages">
          {{message}}
        </p>
    </div>`
})
export class WebsocketDisplayComponent implements OnInit {
    messages: Array<any> = [];
    constructor(private websockets: WebsocketService) {}

    ngOnInit() {
        this.websockets.subscribe(val => this.addMessage(val))
    }

    addMessage(msg) {
        if (this.messages.length >= 20) { this.messages.pop() }
        this.messages.unshift(msg)
    }
}