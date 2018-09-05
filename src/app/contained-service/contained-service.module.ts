import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';
import { ScrollService } from './scroll.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollButtonComponent,
    ScrollContainerComponent,
  ],
  exports: [
    ScrollButtonComponent,
    ScrollContainerComponent,
  ],
  providers: [ ScrollService ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ContainedServiceModule { }
