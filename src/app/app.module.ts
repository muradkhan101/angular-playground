import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './accordion/accordion.component';
import { CollapsibleTableComponent } from './collapsible-table/collapsible-table.component';
import { FlexGraphModule } from './flex-graph/flex-graph.module';
@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CollapsibleTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexGraphModule,
    // RoutingAlignmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
  ]
})
export class AppModule { }
