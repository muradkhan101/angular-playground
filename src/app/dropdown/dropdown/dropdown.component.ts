import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

export interface DropdownItem {
  Name: string;
  Value: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', '../shared/dropdown.scss']
})
export class DropdownComponent {
  @Input() placeholder: string;
  @Input() items: Array<DropdownItem>;

  @Output() selected = new EventEmitter<DropdownItem>();
  @ViewChild('button') button: ElementRef;

  
  state = {
    open: false,
    hovered: -1
  }
  
  toggleDropdown(event) {
    this.state.open = !this.state.open;
    this.state.hovered = -1;
    event.stopPropagation();
    if (this.state.open) {
      // In request animation frame so dropdown element exists before setting listeners
      window.requestAnimationFrame( () => {
        this.setUpListeners();
        this.button.nativeElement.focus()
      });
    }
  }
  setUpListeners() {
    let keyboardListenerFn = (e) => {
      switch (e.keyCode) {
        // Up Arrow
        case (38):
          this.moveHoveredState(-1);
          break;
        // Down Arrow
        case (40):
          this.moveHoveredState(1);
          break;
        // Enter Key
        case (13):
          this.output(this.items[this.state.hovered]);
      }
    }
    let closeListenerFn = (e) => {
      this.state.open = false;
      window.removeEventListener('click', closeListenerFn);
      this.button.nativeElement.removeEventListener('keydown', keyboardListenerFn);
    };

    this.button.nativeElement.addEventListener('keydown', keyboardListenerFn);
    window.addEventListener('click', closeListenerFn);
  }
  moveHoveredState(direction: 1 | -1) {
    let nextState = this.state.hovered + direction;
    if (nextState < 0) nextState = 0;
    if (nextState > this.items.length - 1) nextState = this.items.length - 1;

    this.state.hovered = nextState;
  }
  output(item: DropdownItem) {
    this.selected.emit(item);
    this.state.open = false;
  }
}
