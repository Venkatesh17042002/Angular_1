import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  add(val:number,val1:number):number
  {
    console.log(val+val1);
    
    return val+val1;
  }
  sub(val:number,val1:number):number
  {
    console.log(val-val1);
    
    return val-val1;
  }

  constan_value:number=5;
}
