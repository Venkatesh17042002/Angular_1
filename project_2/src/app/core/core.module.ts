import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './template/parent/parent.component';
import { ChildComponent } from './template/child/child.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './template/nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  exports:[
    ParentComponent,
    ChildComponent,
    NavComponent,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class CoreModule { }
