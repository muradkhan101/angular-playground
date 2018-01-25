import { Component, OnInit } from '@angular/core';
import { AsyncService } from './async.service';

@Component({
    selector: 'async',
    template: `
    <!-- Can use async pipe with subject and send unresolved promise
         but that makes data disappear for a bit -->
    <p>subject: {{dataFromSubject}}</p>
    <p>prop: {{dataFromProp | async}}</p>
    `
})
export class AsyncComponent implements OnInit {
    dataFromProp;
    dataFromSubject;
    constructor(private service: AsyncService) {}
    ngOnInit() {
        this.service.subject.subscribe(val => this.dataFromSubject = val)
        this.dataFromProp = this.service.data;
    }
}

@Component({
    selector: 'late-async',
    template: `
    <hr>
    Late initialized subject: {{data}}
    `
})

export class LateInititalizedComponent implements OnInit {
    data;
    constructor(private service: AsyncService) {}
    ngOnInit() {
        setTimeout( () => this.service.subject.subscribe(val => this.data = val), 3500 )
    }
}