import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='task_2';
  big="orange";
  small_1="gray";
  small_2="blue";
  small_3="green";
  color="Orange";
  dis:string="false";
  price:number=139.58;
  quantity:number=1;
  zoom="../assets/"+this.big+"_chair.png";
  t! :string;

  @ViewChild('dialog_box',{static:true})box!:TemplateRef<any>
  @ViewChild('spinner',{static:true})spin!:TemplateRef<any>
  constructor(private dialog: MatDialog) {}
  openDialog() {
    if(this.quantity<6 && this.quantity>0){
    
    this.dialog.open(this.spin);  
    setTimeout( ()=>{
      this.dialog.closeAll();
     },1500);
    setTimeout( ()=>{
     this.dialog.open(this.box);
    },1700);
 
    }
  }

  
  img_click(num:any){
    if(num==1) {
      this.t=this.big;
      this.big=this.small_1;
      this.small_1=this.t;
      this.zoom="../assets/"+this.big+"_chair.png";
    } else if(num==2) {
      this.t=this.big;
      this.big=this.small_2;
      this.small_2=this.t;
      this.zoom="../assets/"+this.big+"_chair.png";
    }
    else if(num==3)
    {
      this.t=this.big;
      this.big=this.small_3;
      this.small_3=this.t;
      this.zoom="../assets/"+this.big+"_chair.png";
    }
    if(this.big=="orange")
    this.color="Orange";
    else if(this.big=="gray")
    this.color="Sky Blue";
    else if(this.big=="blue")
    this.color="Blue";
    else if(this.big=="green")
    this.color="Green";
  }
// ngDoCheck(): void {
//   if(this.quantity>5||this.quantity<1 || this.quantity==null)
//   {
//     this.dis="true";
//   }
//   else
//   {
//   this.dis="false";
//   }
//   if(this.quantity<1 || this.quantity==0)
//   this.quantity=1;
//   else if(this.quantity>5)
//   this.quantity=5
// }
}


