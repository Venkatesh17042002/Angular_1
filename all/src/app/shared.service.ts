import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  show_logout!:boolean;
  
  logout=new BehaviorSubject<any>(null);

  
}
