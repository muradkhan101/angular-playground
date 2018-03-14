import {
    ContentChild,
    Directive,
    Input,
    TemplateRef,
} from '@angular/core';

@Directive({selector: '[cellDef]'})
export class CellDef {
    constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
    selector: '[columnDef]',
})
export class ColumnDef {
    private _name: string;
    @Input('columnDef')
    get name() { return this._name; }
    set name(name: string) {
        if (!name) return;
        this._name = name;
    }
    @ContentChild(CellDef) cell: CellDef;
}