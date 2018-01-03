import { Input, Component, OnInit } from '@angular/core';

@Component({
    selector: 'reverse',
    template: `
    <div #Thing>
            <p #Thing> {{para.footer}}</p>
            <p #Thing> {{para.body}}</p>
            <p #Thing> {{para.topic}}</p>
    </div>
    `
})

export class ReverseParagraphComponent {
    @Input() para;
    ngOnInit() {
        this.para.body = this.para.body + 'lfakjdslf;kj';
    }
}
