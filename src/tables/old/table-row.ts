import {
    ContentChild,
    Directive,
    Input,
    TemplateRef,
    Component
} from '@angular/core';

import { CellDef, ColumnDef } from './table-cell';

@Directive({
    selector: '[rowDef]',
    inputs: ['columns: rowDef']
})
export class RowDef {
    columns: Array<string>;
}

@Component({
    selector: 'table-row',
    template: '<ng-container cellOutlet></ng-container>'
})
export class TableRow {}