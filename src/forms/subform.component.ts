import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({ 
    selector: 'sub-form',
    template: `
    <div [formGroup]="address">
        <input type='text' formControlName='street'>
        <input type='text' formControlName='zip'>
    </div>
    `
 })

 export class SubFormComponent {
     @Input() address;
 }
