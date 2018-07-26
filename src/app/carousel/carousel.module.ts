import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { CarouselDirective } from './carousel.directive';
import { CarouselService } from './carousel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        CarouselComponent,
        CarouselDirective,
    ],
    providers: [
        CarouselService
    ],
    exports: [
        CarouselComponent,
        CarouselDirective,
    ]
})
export class CarouselModule {}