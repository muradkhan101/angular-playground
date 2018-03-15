import {
    AfterContentInit,
    Component,
    ContentChild,
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
} from '@angular/core';

const ROW_TEMPLATE = '<div class="table-row"><ng-container #vcf></ng-container></div>';

// Let's you create custom body/header cells

@Directive({ selector: '[headerCell]' })
export class HeaderCellDirective {
    constructor(public tRef: TemplateRef<any>) { }
}
@Directive({ selector: '[bodyCell]' })
export class BodyCellDirective {
    constructor(public tRef: TemplateRef<any>) { }
}

class RowBase implements OnInit {
    // Holds info for cells
    cells: Array<any>;
    // Cell to render
    cellTemplate: TemplateRef<any>;
    rowIndex: number;
    firstColumn: string;
    @ViewChild('vcf', {read: ViewContainerRef}) vcf: ViewContainerRef;
    ngOnInit() {
        // if (changes.cells.currentValue) {
            this.vcf.createEmbeddedView(this.cellTemplate, {
                row: this.rowIndex,
                column: 0,
                text: this.firstColumn
            });
            this.cells.forEach( (cell, i) => {
                this.vcf.createEmbeddedView(this.cellTemplate, {
                    row: this.rowIndex,
                    column: i + 1,
                    text: cell
                });
            });
        // }
    }
}

@Component({
    selector: 'table-row',
    template: ROW_TEMPLATE,
})
export class RowTemplate extends RowBase {}

@Component({
    selector: 'table-header-row',
    template: ROW_TEMPLATE,
})
export class HeaderRowTemplate extends RowBase {}

@Component({
    selector: 'dynamic-table',
    styleUrls: ['./table.scss'],
    template: `
    <ng-template #headerCell let-text="text" let-row="row" let-column="column">
        <div class="header-cell">{{ text }}<br>row:{{row}}<br>column:{{column}}</div>
    </ng-template>
    <ng-template #bodyCell let-text="text" let-row="row" let-column="column">
        <div class="body-cell">{{ text }}<br>row:{{row}}<br>column:{{column}}</div>
    </ng-template>
    <div class="table">
        <div class="header-row">
            <ng-container #headerOutlet></ng-container>
        </div>
        <div class="body-rows">
            <ng-container #bodyOutlet></ng-container>
        </div>
    </div>
    `,
    encapsulation: 2,
})
export class DynamicTable implements AfterContentInit, OnChanges {
    @ViewChild('headerCell') headerCell: TemplateRef<any>;
    @ViewChild('bodyCell') bodyCell: TemplateRef<any>;

    @ViewChild('headerOutlet', { read: ViewContainerRef }) headerOutlet: ViewContainerRef;
    @ViewChild('bodyOutlet', { read: ViewContainerRef }) bodyOutlet: ViewContainerRef;

    @ContentChild(HeaderCellDirective) headerTemplate: HeaderCellDirective;
    @ContentChild(BodyCellDirective) bodyTemplate: BodyCellDirective;

    constructor(
        private cfr: ComponentFactoryResolver
    ) {}
    @Input() data: {
        headers: Array<string>;
        rows: Array<{
            name: string;
            data: Array<number>;
        }>;
    };

    renderTable() {
        console.log('this.renderTable')
        if (this.headerOutlet.length) this.headerOutlet.clear();
        if (this.bodyOutlet.length) this.bodyOutlet.clear();

        let headerRow = this.headerOutlet.createComponent(this.cfr.resolveComponentFactory(HeaderRowTemplate));
        headerRow.instance.cellTemplate = this.headerTemplate ? this.headerTemplate.tRef : this.headerCell;
        headerRow.instance.rowIndex = 0;
        headerRow.instance.firstColumn = '';
        headerRow.instance.cells = this.data.headers;

        this.data.rows.forEach( (row, i) => {
            let bodyRow = this.bodyOutlet.createComponent(this.cfr.resolveComponentFactory(RowTemplate));
            bodyRow.instance.cellTemplate = this.bodyTemplate ? this.bodyTemplate.tRef : this.bodyCell;
            bodyRow.instance.rowIndex = i + 1;
            bodyRow.instance.firstColumn = row.name;
            bodyRow.instance.cells = row.data;
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        if (changes.data.currentValue) {
            this.renderTable();
        }
    }
    ngAfterContentInit() { this.renderTable(); }

}

