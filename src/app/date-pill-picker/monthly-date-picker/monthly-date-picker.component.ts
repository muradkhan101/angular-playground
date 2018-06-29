import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'month-picker',
  templateUrl: './monthly-date-picker.component.html',
  styleUrls: ['./monthly-date-picker.component.scss'],
})
export class MonthPickerComponent implements OnInit, OnChanges {
  @Output() date: EventEmitter<any> = new EventEmitter();
  @Input() refDate = Date.now();
  @Input() alignTime: 'start' | 'end';
  currentDate: Date;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.refDate) {
        this.currentDate = this.alignDate(this.refDate);
    }
  }

  alignDate(date) {
      return this.alignTime === 'start'
          ? moment(date).startOf('month').toDate()
          : moment(date).endOf('month').toDate();
  }
  ngOnInit() {
      this.currentDate = this.alignDate(this.refDate);
      this.outputDate(this.currentDate);
  }

  prevMonth = ($event) => {
      this.currentDate = this.alignDate(moment(this.currentDate).subtract(1, 'month'));
      this.outputDate(this.currentDate);
  }

  nextMonth = ($event) => {
      this.currentDate = this.alignDate(moment(this.currentDate).add(1, 'month'));
      this.outputDate(this.currentDate);
  }
  outputDate(start) {
      this.date.emit(moment(start).toISOString())
  }
}
