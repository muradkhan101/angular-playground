import {
  Component,
  Input,
  HostBinding,
  OnInit,
} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerModalComponent } from './date-picker-modal/date-picker-modal.component';
import { IDateRange } from './shared/interfaces';

import * as moment from 'moment';

@Component({
  selector: 'date-pill-picker',
  templateUrl: './date-pill-picker.component.html',
  styleUrls: ['./date-pill-picker.component.scss']
})
export class DatePillPickerComponent implements OnInit {
  @Input() dateRange: IDateRange = { startDate: new Date().toISOString(), endDate: new Date(Date.now() + 1001 * 60 * 60 * 24 * 30 * 5).toISOString() };
  @Input() color: string;
  @HostBinding('style.background') background: string;

  timeDiff;
  constructor(
    private modal: NgbModal
  ) {}
  ngOnInit() {
    this.background = this.color;
    this.calculateTimeDiff();
  }
  calculateTimeDiff() {
    this.timeDiff = moment(this.dateRange.endDate).diff(this.dateRange.startDate, 'months');
  }
  openModal() {
    let modalRef = this.modal.open(DatePickerModalComponent);
    modalRef.componentInstance.dateRange = this.dateRange; 
    modalRef.result.then(dateRange => {
      this.dateRange = dateRange
      this.calculateTimeDiff();
    });
  }
}
