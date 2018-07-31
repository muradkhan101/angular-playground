import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { COneComponent } from './c-one/c-one.component';
import { CTwoComponent } from './c-two/c-two.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'one',
        component: COneComponent
      },
      {
        path: 'two',
        component: CTwoComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BaseComponent,
    COneComponent,
    CTwoComponent
  ],
  exports: [
    BaseComponent,
    COneComponent,
    CTwoComponent
  ]
})
export class RoutingAlignmentModule { }
