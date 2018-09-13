import { Component, EventEmitter, Input, OnInit, Output, ViewChildren, ElementRef } from '@angular/core';

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

  @ViewChildren('dropdownEl') dropdownElements: Array<ElementRef>;

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
  }
  private setUpCloseListener() {
    // create an event listener to close dropdown
    let eventFn = (e) => {
      e.stopPropagation();
      let clickedElementInDropdown = this.dropdownElements.reduce((result, element) => {
        return (element.nativeElement.contains(e.target)
          || e.target === element.nativeElement)
          || result;
      }, false)
      if (!clickedElementInDropdown) {
        this.state.open = false;
        window.removeEventListener('click', eventFn);
      }
    };
    // when a user clicks anywhere on the page
    window.addEventListener('click', eventFn);
  }
  toggleDropdown(event) {
    this.state.open = !this.state.open;

    event.stopPropagation()
    if (this.state.open) {
     this.setUpCloseListener();
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
