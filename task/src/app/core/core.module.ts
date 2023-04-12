import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    BodyComponent,
    LeftComponent,
    RightComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BodyComponent
  ]
})
export class CoreModule { }
