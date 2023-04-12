import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value:any, search_text:string): any{
    
    if(search_text==null)
    return value;
    else if(search_text.toLowerCase()!="vignesh"){
      return value.filter((name: any)=>{
        return name.toLowerCase().includes(search_text.toLowerCase())
      })
    }
    else
    return value;
  }
}
