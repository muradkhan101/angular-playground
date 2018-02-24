import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ObservableService } from './observable.service';
import * as Rx from 'rxjs';

@Component({
    selector: 'obs-form',
    template: `
    <input type="text" #input>
    `,
})
export class ObsFormComponent implements OnInit {
    @ViewChild('input', {read: ElementRef}) input: ElementRef;
    subscription: Rx.Subscription;
    constructor(private obs: ObservableService) {
        
    }
    ngOnInit() {
        // this.obs.formObs = this.input.nativeElement
    }
}
@Component({
    selector: 'form-watcher',
    template:`
    {{formData}}
    `
})
export class FormWatcher implements OnInit {
    @Input() filter: (x, i) => boolean;
    formData;
    constructor(private obs: ObservableService) {}
    ngOnInit() {
        // this.obs.formObs.filter(this.filter).subscribe(data => this.formData = data);
    }
}