import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isdisable!:boolean;
  user=[{email:"venkatesh@gmail.com",password:"venki@123",name:"venkatesh"},
        {email:"vignesh@gmail.com",password:"viki@123",name:"vignesh"}]  
  onlogin(email:string,password:string){
    for(let i=0;i<this.user.length;i++)
    if(email===this.user[i].email && password===this.user[i].password)
    {
      alert("Welcome "+this.user[i].name)

    }
  }
  myobs= new Observable (abs=>{
    console.log("start");
    abs.next(200);
    console.log('end');
   })
   
  form_field!:FormGroup;
   pass_type='password';
   lock_sts='lock';
   show(){
    if(this.lock_sts=='lock')
    {
      this.lock_sts='lock_open';
      this.pass_type='text';
    }
    else if(this.lock_sts=='lock_open')
    {
      this.lock_sts='lock';
      this.pass_type='password';
    }
   }

   xyz!:Subscription;
   message!:Observable<any>;

   constructor(public http:HttpClient,public share:SharedService){}

   ngOnInit(){
    setTimeout(()=>{
      this.share.logout.next(false)
    })

    this.xyz=this.myobs.subscribe(sub=>{
      // console.log(sub);
    })
    this.share.show_logout=false;
    // console.log("login......");
    // console.log(this.share.show_logout);
    //message json....
    this.message=this.http.get("assets/message.json")
    //form part....
    this.form_field=new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9.]+@gmail.com$')]),
      login_password:new FormControl(null,Validators.required)
    })
   }
   ngOnDestroy(){
    this.xyz.unsubscribe();
  
    
   }
}
