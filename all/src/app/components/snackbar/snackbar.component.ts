import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  msg!:string;
  action:any='ok';
  sec:number=3;
  constructor(private snackbar: MatSnackBar){}
  ngOnInit(): void {
   
  }
  onclick(type:string){
    // setInterval(()=>{
    //   this.sec--;
    //   console.log(this.sec);
    // },1000);
    
    
    if(type=='success')
    {
    this.msg='SnackBar Opend Successfully';
    // this.action=this.sec;
    }
    else if(type=='error')
    {
    this.msg='Some error occurred!';
    }
    else if(type=='warning')
    {
    this.msg='This is Warning';
    }
    else if(type=='info')
    {
    this.msg='Information Provided';
    }
    else if(type=='default')
    {
    this.msg='Default SnackBar';
    }
    
    this.snackbar.open(this.msg,this.action,{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'center',
      panelClass:type
    })
  }
}
