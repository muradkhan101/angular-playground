import { Component, TemplateRef, ContentChild, Input } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user-template',
    template: `
    <div>
        <ng-template [user]="user">
        </ng-template>
    </div>
    `
})
export class UserTemplateComponent {
    @Input() user: User;
    @ContentChild(TemplateRef) userTemplate: TemplateRef<User>;
}
