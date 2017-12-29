import { Paragraph } from './paragraph';
import { TemplateRef, Component, Input, ContentChild} from '@angular/core';
import { NgForOfContext } from '@angular/common';

@Component({
    selector: 'paragraphs',
    template: `
    <div>
        <ng-template ngFor let-para [ngForOf]="paragraphs" [ngForTemplate]="paraTemplate">
        </ng-template>
    </div>
    `
})

export class ParagraphTemplateComponent {
    @Input() paragraphs: Paragraph[];
    @ContentChild(TemplateRef) paraTemplate: TemplateRef<NgForOfContext<Paragraph>>;
}
