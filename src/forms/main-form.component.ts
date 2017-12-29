import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { flow, curry } from 'lodash';

@Component({
    selector : 'main-form',
    template: `
        <div ngClass='form'>
            <form [formGroup]="mainform" (ngSubmit)="onSubmit()">
                <ng-container formArrayName="items" *ngFor="let f of mainform.get('items').controls; let i = index;">
                    <div [formGroupName]="i">
                        <input type='text' formControlName="name" placeholder='Enter Your Name'>
                        <sub-form [address]="f.controls.address"></sub-form>
                    </div>
                </ng-container>
                <button (click)="bClick()">Add thing</button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    `
})
export class MainFormComponent implements OnInit {
    mainform: FormGroup;
    formData: Object;
    formStuff: FormArray;

    constructor(
        private fb: FormBuilder,
    ) { this.createForm(); }
    createForm() {
        this.mainform = this.fb.group({
            items: this.fb.array([this.addControl()]),
        });
    }
    ngOnInit() {
        this.mainform.valueChanges.subscribe( val => { console.log(val); this.formData = val; });
    }
    onSubmit() {
        console.log(this.mainform.value, this.formData );
    }
    bClick() {
        this.formStuff = flow(
            curry(getProp)('items'),
            getAsFormArray,
            curry(addToArray)(this.addControl())
        )(this.mainform);
    }
    addControl(): FormGroup {
        return this.fb.group({
            name: ['Toby', Validators.required],
            address: this.fb.group({
                street: [9954],
                zip: 6546,
            })
        });
    }
}
function getProp(prop, obj) {
    return obj.get(prop);
}
function getAsFormArray(obj) {
    return obj as FormArray;
}
function addToArray(item, arr: Array<FormGroup>) {
    arr.push(item);
    return arr;
}
