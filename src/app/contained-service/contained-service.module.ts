import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { ScrollContainerComponent } from './scroll-container/scroll-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollButtonComponent, ScrollContainerComponent]
})
export class ContainedServiceModule { }
