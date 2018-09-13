import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown/dropdown.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownComponent,
    MultiSelectDropdownComponent,
    FilterPipe,
  ],
  exports: [
    DropdownComponent,
    MultiSelectDropdownComponent,
  ],
})
export class DropdownModule { }
