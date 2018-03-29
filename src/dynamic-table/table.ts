import {
    Component,
    Directive,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'd-table',
    template: `
    <ng-template #headerCell let-info>
        <div class="header-cell">{{ info.text }}</div>
    </ng-template>
    <ng-template #bodyCell let-info>
        <div class="body-cell">{{ info.text }}</div>
    </ng-template>
    <ng-template #bodyRow>
        <div class="body-row"></div>
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
    styleUrls: ['./table.scss']
})
export class DTableComponent implements OnChanges {
    @ViewChild('headerCell') headerCell: TemplateRef<any>;
    @ViewChild('bodyCell') bodyCell: TemplateRef<any>;

    @ViewChild('headerOutlet', {read: ViewContainerRef}) headerOutlet: ViewContainerRef;
    @ViewChild('bodyOutlet', {read: ViewContainerRef}) bodyOutlet: ViewContainerRef;

    @ViewChild('bodyRow') bodyRow: TemplateRef<any>;

    @Input() data: {
        headers: Array<string>;
        rows: Array<{
            name: string;
            data: Array<number>;
        }>;
    };
    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data.currentValue) {
            this.headerOutlet.clear();
            this.bodyOutlet.clear();

            this.data.headers.forEach((header, i) => {
                this.headerOutlet.createEmbeddedView(this.headerCell, {
                    columnIndex: i,
                    text: header,
                });
            });
            
            this.data.rows.forEach( (row, i) => {
                let bodyRow = this.bodyOutlet.createEmbeddedView(this.bodyRow, {
                    rowIndex: i,
                });
                let bodyElem = bodyRow.rootNodes[0] as HTMLElement;
                row.data.forEach( (datum, j) => {
                    this.bodyOutlet
                });
            })
        }
    }
}