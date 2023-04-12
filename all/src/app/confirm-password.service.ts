import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPasswordService {

  constructor() { }
  equal_fn(form:any){
    if(form.value.newpassword && form.value.newpassword1)
    {
      return form.value.newpassword === form.value.newpassword1? null:form.get("newpassword1").setErrors({mismatch:true});
    }
  }
}
