import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackboxComponent } from './components/snackbox/snackbox.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackbar: MatSnackBar,public httpreq:HttpClient){}
 
 snack_call(msg:string ,action:string , type:string,_icon:string){ 
    this.snackbar.openFromComponent( SnackboxComponent,  {
      data:{
        message:msg,
        action:action,
        icon:_icon ,
      },
    duration:3000,
    verticalPosition:'top',
    horizontalPosition:'center',
    panelClass:type
  })
}
}
