import { Component } from '@angular/core';
import { CustomService } from './custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'all';
  res!:number;
  input1!:number;
  input2!:number;

  constructor(private ref:CustomService){}
  _add(){
    this.res=this.ref.add(this.input1,this.input2)
  }
  _sub(){
    this.res=this.ref.sub(this.input1,this.input2)+this.ref.constan_value;
  }
}
