import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface DropdownItem {
  Name: string;
  Value: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', '../shared/dropdown.scss']
})
export class DropdownComponent implements OnInit {
  @Input() placeholder: string;
  @Input() items: Array<DropdownItem>;

  @Output() selected = new EventEmitter<DropdownItem>();

  state = {
    open: false
  }
  constructor() { }

  ngOnInit() {
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
  output(item: DropdownItem) {
    this.selected.emit(item);
    this.state.open = false;
  }
}
