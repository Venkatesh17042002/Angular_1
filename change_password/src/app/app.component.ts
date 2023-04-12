import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change_password';
  reset!:FormGroup;
  f=false;
  ngOnInit(): void {
    this.reset=new FormGroup(
      {
        oldpassword:new FormControl(null,Validators.required),
        newpassword:new FormControl(null,Validators.required),
        confirmpassword:new FormControl(null,Validators.required),
        
      }
    )
  }
  ngDoCheck(): void {
    if(this.reset?.get('confirmpassword')?.value!=this.reset?.get('newpassword')?.value)
    {
      this.f=true;
      console.log("True");
      
    }
    else{
      this.f=false;
      console.log("false");
      
    }
  }
  
}
