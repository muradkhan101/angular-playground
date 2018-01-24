import { Component, Input } from '@angular/core';
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
    @Input() multiplier: number;
    count;
    subscription: Rx.Subscription;
    constructor(private obs: ObservableService) {
        this.subscription = obs.observable.map(val => val * this.multiplier).subscribe(val => this.count = val)
    } 
}