import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideScrollerComponent } from './side-scroller.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ SideScrollerComponent ],
    exports: [ SideScrollerComponent ],
    schemas: [ NO_ERRORS_SCHEMA ],
})
export class SideScrollerModule {}
