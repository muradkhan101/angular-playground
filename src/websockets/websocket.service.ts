import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { curry, flow } from 'lodash';
@Injectable()
export class WebsocketService {
    socket: WebSocket;
    eventEmitter: Subject<any>;
    constructor(private http: HttpClient) {
        let url = 'wss://ws-feed-public.sandbox.gdax.com'
        this.socket = new WebSocket(url);
        this.initializeSocket(this.socket);
        this.eventEmitter = new Subject();
    }
    initializeSocket(socket: WebSocket) {
        socket.onopen = () => socket.send(
            JSON.stringify({
            "type": "subscribe",
            "product_ids": [
                "ETH-USD",
                "BTC-USD"
            ],
            "channels": [
                "level2",
                {
                    "name": "ticker",
                    "product_ids": [
                        "ETH-USD",
                        "BTC-USD"
                    ]
                }
            ]
        }))
        socket.onmessage = (event: MessageEvent) => this.sendMessage(event.data)
        socket.onerror = (event: MessageEvent) => this.sendMessage(event.data)
    }
    sendMessage(msg) {
        this.eventEmitter.next(msg);
    }
    subscribe(fn: any) {
        return this.eventEmitter.subscribe(fn);
    }
}

function composeString([...args]) {return args.join(' - '); }
function getProp(obj, prop) { return obj[prop]; }
function getProductId(obj) { return getProp(obj, 'product_id');}
function getPrice(obj) { return getProp(obj, 'price'); }