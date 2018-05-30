import {
    Component,
    ContentChild,
    Directive,
    ElementRef,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import { CellHeader, CellDirective} from './cell'

@Directive({ selector: 'ng-container[cellCol]' })
export class colDef {
    @Input() cellCol;
    @ContentChild(CellHeader, { read: TemplateRef }) header;
    @ContentChild(CellDirective, { read: TemplateRef }) body;
}


@Component({
    selector: 'header-row',
    template: `<ng-container #headerOutlet></ng-container>`,
    styleUrls: ['./table.scss']
})
export class HeaderRow {
    @ViewChild('headerOutlet', { read: ViewContainerRef }) headerOutlet: ViewContainerRef;

}
@Component({
    selector: 'row',
    template: `<ng-container #rowOutlet></ng-container>`,
    styleUrls: ['./table.scss']
})
export class Row {
    @ViewChild('rowOutlet', { read: ViewContainerRef }) rowOutlet: ViewContainerRef;
}