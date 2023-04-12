import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  data:string[]=["Vishnu MR","Vishnu M","Venkatesh","Vignesh","Vimal","Vinodhan","Vigneshwaran"];
  search_text:string='';
  x='';
  add_text:string=this.x;
  remove_text:string=this.x;
  convert_text:string='';
  search_count:number=0;
  check=false;
  
  styleng={
    color: true?'green':'red'
  };

  _pop(){
    console.log(this.data.length);
    for(let i=0;i<this.data.length;i++)
    {
      console.log(i);
      if(this.data[i].toLowerCase()==this.remove_text.toLowerCase())
      { 
      this.data.splice(i,1);
      i=0;
      console.log("matched");
      
      }
      else
      console.log("not match");
      
    }
    console.log(this.data);
    
  }
  _add(){
    let a=this.add_text.substring(0,1).toUpperCase();
    let b=this.add_text.substring(1,this.add_text.length).toLowerCase();
    this.add_text=a+b;
    this.data.push(this.add_text)
    
    console.log(this.add_text+"=>added!!");
    console.log(this.data)
  }
  _clear(){
    this.search_text='';
  }
  ngDoCheck(): void {
    console.log("called!!!");
    console.log(this.search_text);
    
    
    this.search_count=0;
    for(let i=0;i<this.data.length;i++)
    {
      
      if(this.data[i].toLowerCase().includes(this.search_text.toLowerCase()))
      {
        this.search_count++;
        console.log("in...");
        
      }
      else{
        console.log("not-in.");
      }
    }
    
  }
}
