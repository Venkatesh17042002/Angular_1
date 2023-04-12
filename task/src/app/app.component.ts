import { style } from '@angular/animations';
import { Component,TemplateRef,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

@ViewChild("alert",{static:true}) refalert!:TemplateRef<any>;
constructor(private openDialog: MatDialog){}
  title = 'task';
  sts: string="Strong!";
  pass: string="Password@123";
  f_name: string="Alex Parinson";
  mail: string="alex@example.com";

  cap: number = 0;
  num: number = 0;
  spl: number = 0;
  sml: number = 0;
  i: number = 0;

  eyecls: string="fa-regular fa-eye-slash";
  passtype: string="password";



  pass_show(){
    if(this.eyecls=="fa-regular fa-eye-slash")
    {
      this.eyecls="fa-regular fa-eye";
      this.passtype="text";
    }
    else if(this.eyecls=="fa-regular fa-eye")
    {
      this.eyecls="fa-regular fa-eye-slash";
      this.passtype="password";
    }
}
  myfunction() {

    if(this.pass.length==0)
    this.sts=" ";
    for (this.i = 0; this.i < this.pass.length; this.i++) {
      
        if (this.pass[this.i] >= 'a' && this.pass[this.i] <= 'z') {
          this.sml = 1;

        }
        else if (this.pass[this.i] >= 'A' && this.pass[this.i] <= 'Z') {
          this.cap= 1;

        }
        else if (this.pass[this.i] >= '0' && this.pass[this.i] <= '9') {
          this.num= 1;
        }
        else {
          this.spl= 1;
        }
    }

    if (this.pass.length >= 8 && this.sml == 1 && this.cap == 1 && this.num == 1 && this.spl == 1)
    {  
    this.sts = "Strong!";
    this.sml=0;
    this.cap=0;
    this.num=0;
    this.spl=0;
    }
    else {
      this.sts = "Weak!";
    }
  }

  dialog()
  {
    // alert(`your Password is ${this.pass}`);
    this.openDialog.open(this.refalert,{
      width:"400px",
    })
  }

}






