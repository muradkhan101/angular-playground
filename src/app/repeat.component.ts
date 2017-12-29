import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'repeat',
    template: `
    <div [ngClass]='classes'>
        {{ inp }}
    </div>
    `
})
export class RepeatComponent implements OnInit {
    @Input() inp = 'wow';
    classes = {
        'first' : 'wowowow'
    };
    data: object = {
    };
    constructor() {
        console.log(this);
    }
    ngOnInit() {
        this.data[this.inp] = 100;
        this.classes[this.inp] = true,
        console.log(this);
    }
}
