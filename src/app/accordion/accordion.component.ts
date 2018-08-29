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
  <div class="accordion-wrapper" [ngClass]="{closed: !open}" [style.height]="content.offsetHeight + 'px'">
    <div class="accordion-content" #content>
      <ng-content></ng-content>
    </div>
  </div>
`,
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('accordionState', [
      state('true', style({height: '100%'})),
      state('false', style({height: 0}))
    ])
  ]
})
export class AccordionComponent {
  @Input() open: boolean = true;
}
