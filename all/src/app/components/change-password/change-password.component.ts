import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfirmPasswordService } from 'src/app/confirm-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  pass_field!:FormGroup;
  message!:Observable<any>;
constructor(public http:HttpClient, public confirm_password:ConfirmPasswordService){}
  ngOnInit(): void {
    this.pass_field=new FormGroup({
      oldpassword:new FormControl(null,Validators.required),
      newpassword:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]+$')]),
      newpassword1:new FormControl(null,Validators.required) 
    },this.confirm_password.equal_fn.bind(this));
    this.message=this.http.get("assets/"+"message.json")
   
    
  }
}
