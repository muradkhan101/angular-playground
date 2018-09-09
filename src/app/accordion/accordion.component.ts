import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-accordion',
  template: `
  <div [@accordionState]="open" class="accordion-wrapper">
    <div class="accordion-content" #content>
      <ng-content></ng-content>
    </div>
  </div>
`,
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('accordionState', [
      state('true', style({height: '*'})),
      state('false', style({height: 0})),
      transition('false <=> true', animate('350ms ease-out'))
    ])
  ]
})
export class AccordionComponent {
  @Input() open: boolean = true;
}
