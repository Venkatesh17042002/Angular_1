import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project_1';
  constructor(){
    console.log("Construct");
    
  }
  ngOnInit(){
    console.log("ngoninit");
    
  }
}
