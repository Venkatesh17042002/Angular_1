import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  abc!:Subscription;
   myobs=new Observable(obs=>{
    console.log("start");
    obs.next('100');
    obs.next('200');
    obs.next('300');
    obs.next('400');
    setTimeout(()=>{
      obs.next('500');
    },3000)
    obs.next('600');
    console.log("end");
   })
   ngOnInit(){
    this.abc=this.myobs.subscribe(sub=>{
      console.log(sub);
    })
   }
   ngOnDestroy(){
   this.abc.unsubscribe();
   }
   
  
}
