import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  value1:any= "";
  limit:any="";
  output: string="Output";
  // sum: number=0;
  // a: number=0;
  // b: number=0;
  onclick(){
    
    // The Add of {{a}} and {{b}} is {{sum}}
    if(this.value1!="" && this.limit!="")
    {
      this.output='';
      for(let i=1;i<=this.limit;i++)
      {
        this.output+=`${this.zero(i)}  * ${this.value1} = ${i*this.value1}</br>`;
    
      }
    }
    else if(this.value1=="" && this.limit=="")
    {
      this.value1="enter any value";
      this.limit="enter any value";
     
    }
    else if(this.value1=="")
    {
      this.value1="enter any value";
     
    }
    else if(this.limit=="")
    {
      this.limit="should not empty";
    }


  }

  zero(num:number){
    return num<=9?'0'+num:num; 
  }
  
}
