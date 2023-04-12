import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
  NavbarComponent

   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,

  ],
  exports:[
    RouterModule,
    NavbarComponent
  ]
})
export class CoreModule { }