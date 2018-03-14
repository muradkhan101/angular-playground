import {
    ContentChildren,
    Component,
    Directive,
    Input,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { CellDef, ColumnDef } from './table-cell';
import { RowDef } from './table-row';

@Directive({selector: '[rowPlaceHolder]'})
export class RowPlaceHolder {
    constructor(public viewContainer: ViewContainerRef) {}
}

@Component({
    selector: 'bt-table',
    template: `
    <ng-container rowPlaceHolder></ng-container>
    `
})
export class TableComponent {
    @ViewChild(RowPlaceHolder) rowPlaceholder;
    @ContentChildren(ColumnDef) columns: QueryList<ColumnDef>;

}