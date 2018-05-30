import {
    AfterContentInit,
    Component,
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    HostBinding,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ContentChild,
    ContentChildren,
    QueryList,
} from '@angular/core';

import { Cell } from './cell';
import { colDef, HeaderRow, Row } from './row';

@Component({
    selector: 'a-table',
    template: '<ng-container #tableOutlet></ng-container>',
    styles: [`:host { display: table; }`]
})
export class Table implements AfterContentInit {
    @ViewChild('tableOutlet', { read: ViewContainerRef }) tableOutlet: ViewContainerRef;
    @Input() data: Array<any>;
    @Input() dataMap: object;
    @ContentChildren(colDef) columns: QueryList<colDef>;
    constructor(
        private cfr: ComponentFactoryResolver,
    ) {}
    ngAfterContentInit() {
        this.data.forEach( (data, i) => {
            let rowFactory = this.cfr.resolveComponentFactory(Row);
            let newRow = this.tableOutlet.createComponent(rowFactory, i);
            this.columns.forEach( (col, j) => {
                if (col.body) {
                    newRow.instance.rowOutlet.createEmbeddedView(col.body, { $implicit: data[col.cellCol]})
                } else {
                    let cellFactory = this.cfr.resolveComponentFactory(Cell);
                    let newCell = newRow.instance.rowOutlet.createComponent(cellFactory);
                    newCell.instance.data = data[col.cellCol];
                }   
            })
        })
        // this.data.forEach( (data, i) => {
        //     let rowFactory = this.cfr.resolveComponentFactory(Row);
        //     let newRow = this.tableOutlet.createComponent(rowFactory, i);
        //     Object.keys(data).forEach( (key, j) => {
        //         let cellFactory = this.cfr.resolveComponentFactory(Cell);
        //         let newCell = newRow.instance.rowOutlet.createComponent(cellFactory, j);
        //         newCell.instance.data = data[key];
        //     });
        // });
        let headerFactory = this.cfr.resolveComponentFactory(HeaderRow);
        let headerRow = this.tableOutlet.createComponent(headerFactory, -1);
        this.columns.forEach(col => {
            console.log(col, col.header);
            headerRow.instance.headerOutlet.createEmbeddedView(col.header);
        })
    }
}
        