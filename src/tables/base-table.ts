import {
    AfterContentInit,
    Component,
    ComponentFactoryResolver,
    Directive,
    HostBinding,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ContentChild,
    ContentChildren,
    QueryList,
} from '@angular/core';
@Directive({
    selector: 'ng-template[headerCell]',
})
export class CellHeader {
    constructor(public tref: TemplateRef<any>) {}
}
@Directive({
    selector: 'ng-template[cellBody]'
})
export class CellDirective {
    constructor(public tRef: TemplateRef<any>) {}
}
@Directive({ selector: 'ng-container[cellCol]'})
export class colDef {
    @Input() cellCol;
    @ContentChild(CellHeader, { read: TemplateRef }) header;
    @ContentChild(CellDirective, {read: TemplateRef}) body;
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
        