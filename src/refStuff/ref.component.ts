import {
    Component,
    ViewChild,
    ContentChild,
    ViewContainerRef,
    TemplateRef,
    ElementRef,
    AfterViewInit,
} from '@angular/core';
import { MainFormComponent } from '../forms/main-form.component';
import { RepeatComponent } from '../app/repeat.component';
@Component({
    selector: 'refff',
    template:`
    <ng-template #ngt></ng-template>
    <ng-container #ngc></ng-container>
    <ng-container [ngTemplateOutlet]="ooo"></ng-container>
    <ng-container *ngComponentOutlet="RepeatComponent"></ng-container>
    <div #ref></div>
    <ng-template #ooo><h1>Fuck the police!</h1></ng-template>
    `
})
export class RefComponent implements AfterViewInit {
    // @ViewChild('ngt') ngt: TemplateRef<any>; Gives TemplateRef
    // @ViewChild('ngt', {read: ViewContainerRef}) ngt; Gives ViewContainer with ViewContainerRef
    // @ViewChild('ngt', { read: ElementRef }) ngt; All give elementRef (templates output as comment)
    // @ViewChild('ngc') ngc: ViewContainerRef;
    @ViewChild('ngc', {read: ElementRef}) ngc;

    // @ViewChild('ngc', { read: ViewContainerRef }) ngc: ViewContainerRef; Gives elementRef w/o read
    // @ViewChild('ngc', {read: TemplateRef}) ngc: TemplateRef<any>; Gives undefined w/ templateRef
    // @ViewChild('ref') ref: ElementRef;
    // @ViewChild('ref', {read: TemplateRef}) ref; Gives undefined w/ TemplateRef and ViewContainerRef

    ngAfterViewInit() {
        console.log(this.ngc);
    }
}