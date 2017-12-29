import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepeatComponent } from './repeat.component';
import { MainFormComponent } from '../forms/main-form.component';
import { SubFormComponent } from '../forms/subform.component';
import { ParagraphTemplate } from '../templateRefs/paragraph-template.component';
import { ReverseParagraphComponent } from '../templateRefs/reverse-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphTemplate,
    ReverseParagraphComponent,
    RepeatComponent,
    MainFormComponent,
    SubFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
