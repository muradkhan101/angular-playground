import { Component, OnInit } from '@angular/core';
import { IDateRange } from '../shared/interfaces';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { adjustForTz } from '../shared/helpers';

@Component({
  selector: 'date-picker-modal',
  templateUrl: './date-picker-modal.component.html',
  styleUrls: ['./date-picker-modal.component.scss']
})
export class DatePickerModalComponent {
  dateRange: IDateRange;
  selectedRange: number;
  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  updateRange(type: 'startDate' | 'endDate', date: string) {
    this.selectedRange = undefined;
    this.dateRange[type] = date;
  }

  setTime(duration: number) {
    this.selectedRange = duration;
    this.dateRange = {
      startDate: adjustForTz( moment().subtract(duration, 'months').startOf('month') ).toISOString(),
      endDate: adjustForTz( moment().endOf('month') ).toISOString()
    }
  }
  submit() {
    this.activeModal.close(this.dateRange);
  }
}
