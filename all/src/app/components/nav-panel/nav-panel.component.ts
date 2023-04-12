import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent {
  show=true;
  constructor(public share:SharedService){}
ngOnInit(): void {
  // console.log(this.show);

  this.share.logout.subscribe(x=>{
    console.log(x);
    this.show=x;
  })
}

onlogout(){
  alert("Logout")
}
}
