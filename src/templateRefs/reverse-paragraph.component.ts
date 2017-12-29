import { Input, Component, OnInit } from '@angular/core';

@Component({
    selector: 'reverse',
    template: `
    <div>
            <p> {{para.footer}}</p>
            <p> {{para.body}}</p>
            <p> {{para.topic}}</p>
    </div>
    `
})

export class ReverseParagraphComponent {
    @Input() para;
    ngOnInit() {
        this.para.body = this.para.body + 'lfakjdslf;kj';
    }
}
