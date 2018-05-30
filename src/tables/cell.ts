import {
    Component,
    Directive,
    ElementRef,
    TemplateRef,
} from '@angular/core';
@Component({
    selector: 'table-cell',
    template: '<ng-content></ng-content>',
    host: {
        'class': 'ins-table-cell',
        'role': 'gridcell'
    }
})
export class TableCell {
    constructor(public elementRef: ElementRef) { }
}

@Component({
    selector: 'table-header-cell',
    template: '<ng-content></ng-content>',
    host: {
        'class': 'ins-header-cell',
        'role': 'columnheader'
    }
})
export class TableHeaderCell {
    constructor(public elementRef: ElementRef) { }
}

@Directive({
    selector: '[headerCell]',
})
export class CellHeader {
    constructor(public tref: TemplateRef<any>) { }
}
@Directive({
    selector: '[cellBody]'
})
export class CellDirective {
    constructor(public tRef: TemplateRef<any>) { }
}

@Component({
    selector: 'header-cell',
    template: '<b>{{data}}</b>',
    styles: [`:host { display: table-cell; }`]
})
export class HeaderCell {
    data;
}
@Component({
    selector: 'cell',
    template: `{{data}}`,
    styles: [`:host { display: table-cell; }`]
})
export class Cell {
    data;
}