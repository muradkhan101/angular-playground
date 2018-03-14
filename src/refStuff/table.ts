import {
    ViewContainerRef,
    TemplateRef,
    Directive,
    Component,
    ContentChild,
    ContentChildren
} from '@angular/core';

@Directive({ selector: 'header-cell'})
export class HeaderCell {
    constructor() { }
}
