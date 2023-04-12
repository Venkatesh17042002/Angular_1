import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})

export class HttpComponent {
  arr!:any;
  url=environment.myurl;
  constructor(public httpreq:HttpClient){}
  ngOnInit(){
    this.httpreq.get(this.url+"posts").subscribe(res=>{
    this.arr=res;
    console.log(res);
    })
    console.log(this.url);

    
  }
  
}


