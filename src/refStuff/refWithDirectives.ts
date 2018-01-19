import {
    Directive,
    Component,
    ContentChildren,
    TemplateRef,
    ViewContainerRef,
    ContentChild,
    ViewChild,
    QueryList,
    AfterContentInit,
    AfterViewInit,
} from '@angular/core';

@Directive({selector: 'ng-template[title]'})
export class TitleDirective {
    constructor(public tRef: TemplateRef<any>) {}
}

@Directive({selector: 'ng-template[list]'})
export class ListDirective {
    constructor(public tRef: TemplateRef<any>) {}
}

@Component({
    selector: 'bodyc',
    template:`
    <div class="body">
    <ng-container #title></ng-container>
    <ng-container #list *ngFor="let item of listItems">
        <div> Loop </div>
        <h1> THE </h1>
        <h5> Things!</h5>
    </ng-container>
    <ng-template #template></ng-template>
    </div>
    `
})
export class BodyComponent implements AfterContentInit, AfterViewInit {
    @ViewChild('title', {read: ViewContainerRef}) body: ViewContainerRef;
    @ViewChild('list', {read: ViewContainerRef }) list: ViewContainerRef;
    @ViewChild('template', {read: TemplateRef}) templateC: TemplateRef<any>;
    @ContentChild(TitleDirective) title: TitleDirective;
    @ContentChildren(ListDirective) listItems: QueryList<ListDirective>;

    ngAfterContentInit() {
        this.body.createEmbeddedView(this.title.tRef);
    }
    ngAfterViewInit() {
        this.templateC.createEmbeddedView(this.title.tRef);
        `
        <div table>
            <ng-container headers> All the headers would have templateRefs(ng-templates) and the ng-container would have view container
            <ng-container rows> Same for rows
        </div>
        `
    }
}