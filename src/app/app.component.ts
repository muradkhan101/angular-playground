import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  state = {
    open: {
      row1: false,
      row2: false
    }
  }
  ngDoCheck() {
    console.log('CHECKINg');
    this.cdr.detectChanges();
  }
}
