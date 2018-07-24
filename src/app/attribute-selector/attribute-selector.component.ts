import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[attribute-selector]',
  templateUrl: './attribute-selector.component.html',
  styleUrls: ['./attribute-selector.component.scss']
})
export class AttributeSelectorComponent implements OnInit {
  @Input() name;
  @Input() shouldRender: boolean;
  constructor() { }

  ngOnInit() {
  }

}
