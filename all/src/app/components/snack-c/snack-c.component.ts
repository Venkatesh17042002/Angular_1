import { Component } from '@angular/core';
import { SnackService } from 'src/app/snack.service';

@Component({
  selector: 'app-snack-c',
  templateUrl: './snack-c.component.html',
  styleUrls: ['./snack-c.component.scss']
})
export class SnackCComponent {
  constructor(private snackbar: SnackService){}
  msg!:string;
  action:any='ok';
  sec:number=3;
  icon!:string;

  onclick(type:string){

    
    if(type=='success')
    {
    this.msg='SnackBar Opend Successfully';
    this.icon='done';
    }
    else if(type=='error')
    {
    this.msg='Some error occurred';
    this.icon='close';
    }
    else if(type=='warning')
    {
    this.msg='This is Warning';
    this.icon='warning';
    }
    else if(type=='info')
    {
    this.msg='Information Provided';
    this.icon='info';
    }
    else if(type=='default')
    {
    this.msg='Default SnackBar';
    this.icon='';
    }
    this.snackbar.snack_call(this.msg,this.action,type,this.icon);
  }
}
