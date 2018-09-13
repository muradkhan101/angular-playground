import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DropdownItem } from '../dropdown/dropdown.component';
import { CheckBoxManager } from './checkBoxManager';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss', '../shared/dropdown.scss']
})
export class MultiSelectDropdownComponent implements OnInit {
  @Input() placeholder: string;
  @Input() items: Array<DropdownItem>;

  @Output() selected = new EventEmitter<Array<DropdownItem>>();

  state = {
    open: false,
    selected: [],
    search: '',
    checkboxes: new CheckBoxManager()
  }
  constructor() { }

  ngOnInit() {
    this.items.forEach(item => {
      this.state.checkboxes.addCheckbox(item.Value, true);
    })
    console.log('INFO', this.state.checkboxes.mainChecked);
  }

  toggleDropdown(event) {
    this.state.open = !this.state.open;
    event.stopPropagation()
    if (this.state.open) {
      // create an event listener to close dropdown
      let eventFn = (e) => {
        this.state.open = false;
        window.removeEventListener('click', eventFn);
      };
      // when a user clicks anywhere on the page
      window.addEventListener('click', eventFn);
    }
  }
  search(event) {
    this.state.search = event.target.value;
  }
  select(item: DropdownItem) {
    this.state.checkboxes.toggleOne(item.Value);
  }
  output(item: DropdownItem) {
    this.selected.emit(this.state.selected);
    // this.state.open = false;
  }

}
