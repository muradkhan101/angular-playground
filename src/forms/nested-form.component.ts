import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'nested-form',
    template:`
    <div [formGroup]="mainform">
        <div formArrayName="array" *ngFor="let entry of mainform.get('array').controls; let i = index;">
            <div [formGroupName]="i">
                <input type="text" formGroupName="first" [value]="entry.value.first+i">
                <input type="text" formGroupName="last" [value]="entry.value.last+i">
                <button (click)="addAddress(i)">Address</button>
                <div formArrayName="addresses" *ngFor="let address of entry.get('addresses').controls; let j = index;">
                    <div [formGroupName]="j" style="{background: 'cyan';}">
                        <input type="text" formGroupName="number" [value]="address.value.number+i+j">
                        <input type="text" formGroupName="street" [value]="address.value.street+i+j">
                    </div>
                </div>
            </div>
        </div>
        <button (click)="addPerson()">Person</button>
    </div>
    `
})
export class NestedFormComponent implements OnInit {
    mainform: FormGroup;
    peopleArray: FormArray;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    createForm() {
        this.peopleArray = this.fb.array([]);
        this.mainform = this.fb.group({
            array: this.peopleArray
        })
    }
    makePerson() {
        return this.fb.group({
            first: 'Hu',
            last: 'Liana',
            addresses: this.fb.array([this.makeAddress()])
        })
    }
    makeAddress() {
        return this.fb.group({
            number: 123,
            street: 'Westor Drive'
        })
    }
    addPerson() {
        console.log(this.mainform);
        this.peopleArray.controls.push(this.makePerson())
    }
    addAddress(index) {
        let addressArray = this.peopleArray.controls[index].get('addresses') as FormArray;
        addressArray.controls.push(this.makeAddress());
    }
    ngOnInit() { this.mainform.valueChanges.subscribe(val => console.log(val)); }
}