import {
    Directive,
    Component,
    ContentChildren,
    TemplateRef,
    ViewContainerRef,
    ContentChild,
    ViewChild,
    QueryList,
    AfterContentInit
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
    <ng-container #list></ng-container>
    </div>
    `
})
export class BodyComponent implements AfterContentInit {
    @ViewChild('title', {read: ViewContainerRef}) body: ViewContainerRef;
    @ViewChild('list', {read: ViewContainerRef }) list: ViewContainerRef;
    @ContentChild(TitleDirective) title: TitleDirective;
    @ContentChildren(ListDirective) listItems: QueryList<ListDirective>;

    ngAfterContentInit() {
        this.body.createEmbeddedView(this.title.tRef);
        this.listItems.forEach((item: ListDirective, i) => {
            this.list.createEmbeddedView(item.tRef);
        })
    }
}