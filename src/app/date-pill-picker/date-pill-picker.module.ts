import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthPickerComponent } from './monthly-date-picker/monthly-date-picker.component';
import { DatePillPickerComponent } from './date-pill-picker.component';
import { DatePickerModalComponent } from './date-picker-modal/date-picker-modal.component';
@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DatePickerModalComponent,
        DatePillPickerComponent,
        MonthPickerComponent,
    ],
    exports: [
        DatePickerModalComponent,
        DatePillPickerComponent,
        MonthPickerComponent,
    ],
    entryComponents: [
        DatePickerModalComponent
    ]
})
export class DatePillPickerModule {}
