import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './carousel-item.component';
import { CarouselService } from './carousel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        CarouselComponent,
        CarouselItemComponent,
    ],
    providers: [
        CarouselService
    ],
    exports: [
        CarouselComponent,
        CarouselItemComponent,
    ]
})
export class CarouselModule {}