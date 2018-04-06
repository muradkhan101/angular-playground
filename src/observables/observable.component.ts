import { Component, Input, HostListener } from '@angular/core';
import { ObservableService } from './observable.service';
import * as Rx from 'rxjs';

@Component({
    selector: 'obs',
    template: `
    <h1>Count 1: {{count}} (Observables)</h1>
    <button (click)="subscription.unsubscribe()">Un-subscribe</button>
    `,
})
export class ObservableComponent {
    o;
    obs: Rx.Observable<any> = Rx.Observable.create((obs) => {
        this.o = obs;
        obs.next(1);
    });
    // IIFE doesnt work on host listener
    // (() => {
    //     let o;
    //     this.obs = Rx.Observable.create( (obs) => {
    //         o = obs;
    //     });
    //     return function(e) {
    //         o.next(e);
    //         this.count++;
    //     };
    // })(event)
    @Input() multiplier: number;
    
    count = 0;
    subscription: Rx.Subscription;
    constructor(private ob: ObservableService) {
        // this.subscription = o.observable.map(val => val * this.multiplier).subscribe(val => this.count = val)
        this.obs.subscribe(() => this.count++);
    } 
    @HostListener('click', ['$event']) c(e) {
        this.o.next(1);
    }
}