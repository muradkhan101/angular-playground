import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OtherService } from './other.service';

@Component({
    selector: 'other',
    template: `
    <h1>Count 1: {{service.count}} (Directly from service)</h1>
    <h1>Count 2: {{count}} </h1>
    `,
})
export class PromisesComponent implements OnChanges {
    count = 0;
    constructor(private service: OtherService) {
        this.count = this.service.count;
        console.log(this.service);
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
}