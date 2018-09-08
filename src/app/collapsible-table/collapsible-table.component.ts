import { Component, OnInit, Input } from '@angular/core';

interface ICollapsableTable {
  Children: Array< {[key: string]: any;}>;
  [key: string]: any;
}

@Component({
  selector: 'app-collapsible-table',
  templateUrl: './collapsible-table.component.html',
  styleUrls: ['./collapsible-table.component.scss']
})
export class CollapsibleTableComponent implements OnInit {
  @Input() table: ICollapsableTable;
  @Input() headers: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
