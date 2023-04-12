import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  msg!:string;
  
constructor(private snackinit:MatSnackBar){

}
  roll=[
    {id:1,value:"Software Developer"},
    {id:2,value:"Team Leader"},
    {id:3,value:"HR"},
  ]
  form_field!:FormGroup;
  tody=new Date();
  ngOnInit(): void {
    this.form_field=new FormGroup({
      firstname:new FormControl(null,[Validators.required,Validators.pattern('^[a-z A-Z 0-9]+$')]),
      lastname:new FormControl(null,Validators.required),
      mail:new FormControl(null,[Validators.required,Validators.pattern('^[a-z 0-9 @gmail.com]+$')]),
      roll:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required),
      doj:new FormControl(null,Validators.required),
      Contacts:new FormArray([]),
    })
    this.createArray();
  }
  createArray() {
    (this.form_field.get('Contacts') as FormArray).push(new FormGroup({
      Address: new FormControl(null, Validators.required),
      City: new FormControl(null, Validators.required),
      State: new FormControl(null, Validators.required),
      Pincode: new FormControl(null, Validators.required)
    }));
  }
  getContacts(){
    return (this.form_field.get('Contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('Contacts').controls[i].controls;
  }
  removeitem(index: number) {
    (this.form_field.get('Contacts')as FormArray).removeAt(index);
  }
  opensnack(mode:string){
    if(mode=='add')
    {
        this.msg="Contact Added"
    }
    else if(mode=='sub')
    {
      this.msg="Contact Removed!"
    }
    this.snackinit.open(this.msg,'OK',{
      // duration:7000,
      horizontalPosition:'center',
      verticalPosition:'top',
      panelClass:mode
    })
    console.log("snack opened!!!");
    
  }
  ngOnDestroy(): void {
    console.log("snack closed");
  }
}
