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
import { adjustForTz } from '../shared/helpers';

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
        this.currentDate = this.alignDate(this.refDate).toDate();
    }
  }

  alignDate(date) {
      return this.alignTime === 'start'
          ? moment(date).tz('UTC').startOf('day').add(1, 'day').startOf('month')
          :  moment(date).tz('UTC').startOf('day').endOf('month');
  }
  ngOnInit() {
      this.currentDate = this.alignDate(this.refDate).toDate();
  }

  prevMonth = ($event) => {
      this.currentDate = this.alignDate( this.currentDate ).subtract(1, 'month').toDate();
      this.outputDate(this.currentDate);
  }

  nextMonth = ($event) => {
      this.currentDate = this.alignDate( this.currentDate ).add(1, 'month').toDate();
      this.outputDate(this.currentDate);
  }
  outputDate(start: Date) {
      this.date.emit(start.toISOString());
  }
}
